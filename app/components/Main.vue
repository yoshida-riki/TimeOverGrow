<template>
  <div>
    <client-only>
      <v-row class="container d-flex justify-center">
        <v-col cols="12" sm="6" md="4">
          <TotalTime :times="times" />
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <Chart
            :chartData="chartData"
            
          />
        </v-col>
      </v-row>
      <Textbox :on-post="addMessage" :on-get="addTime" :on-chart="addChart" class="container" />
      <Spinner v-if="!initialLoaded" class="container" />
      <p
        class="no-messages"
        v-else-if="initialLoaded && messages.length === 0"
      >
        毎日の積み上げ0件
      </p>
      <MessageList :messages="reversedMessages" class="container" />
    </client-only>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import TotalTime from './TotalTime'
import Chart from './Chart'
import Textbox from './Textbox'
import Spinner from './Spinner'
import MessageList from './MessageList'
import MessageModel from '../models/Message'


Vue.use(Vuetify)
export default {
  components: {
    TotalTime,
    Chart,
    Textbox,
    Spinner,
    MessageList,
  },
  data() {
    return {
      num: 0,
      name: '',
      index: '',
      done: false,
      messages: [],
      chartData: [],
      times: 0,
      initialLoaded: false
    }
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse()
    },
  },
  mounted () {
    this.addChart()
  },
  async created() {
    const messages = await this.fetchMessages();
    const times = await this.totalTime();
    const chartData = await this.getChart();

    this.messages = messages;
    this.times = times;
    this.chartData = chartData;
    this.initialLoaded = true;
  },
  methods: {
    addMessage(message) {
      this.messages.push(message)
    },
    addTime(times){
      this.times = times
    },
    addChart(data) {
      // this.chartData = chartData
      this.chartData = {
        labels: ['学習時間'],
        datasets: [
          {
            data: [],
            label: "学習時間",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
          }
        ],
      }
      this.chartData.datasets[0].data[0] = this.times
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages();
      } catch (error) {
        alert(error.message);
      }

      return messages
    },
    async totalTime() {
      let times = 0;
      try {
        times += await MessageModel.dbtime();
      } catch (error) {
        alert(error.message);
      }

      return times
    },
    async getChart() {
      let dates = 0;
      let chartData = [];
      try {
        dates = await MessageModel.dbtime();
        chartData = chartData.push(dates);
        let sum = chartData.reduce(function(date) {
          return date
        });
        
      } catch (error) {
        alert(error.message);
      }

      return chartData
    },
  }
}
</script>

<style scoped>
.no-messages {
  text-align: center;
}
.container {
  max-width: 1300px;
  margin: 0 auto;
}
</style>