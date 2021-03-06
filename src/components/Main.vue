<template>
  <div>
    <client-only>
      <v-row class="container d-flex justify-center">
        <v-col cols="6" sm="6" md="5">
          <TotalTime :times="times" />
        </v-col>
        <v-col v-if="initialLoaded" cols="6" sm="6" md="7">
          <Chart
            :chart-data="BarChartData"
            :options="BarChartOptions"
          />
        </v-col>
      </v-row>
      <TextBox :on-post="addMessage" :on-get="addTime" :on-chart="makeData" class="container" />
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
import MessageModel from '../models/Message'
import TotalTime from './TotalTime'
import Chart from './Chart'
import TextBox from './TextBox'
import Spinner from './Spinner'
import MessageList from './MessageList'


export default {
  components: {
    TotalTime,
    Chart,
    TextBox,
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
      BarChartData: {},
      options: {},
      times: 0,
      initialLoaded: false,
    }
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse()
    },
  },
  async mounted () {
    await this.makeData()
  },
  async created() {
    const messages = await this.fetchMessages();
    const times = await this.totalTime();
    const vuechartData = await this.getChart();

    this.messages = messages;
    this.times = times;
    this.BarChartData.datasets[0].data[0] = vuechartData[0];
    this.initialLoaded = true;
  },

  methods: {
    addMessage(message) {
      this.messages.push(message)
    },
    addTime(times){
      this.times = times
    },
    async makeData () {
      let vuechartData = [];
      let chartdbtime = await MessageModel.dbtime();
      if (vuechartData.length === 0) {
        await vuechartData.push(chartdbtime);
      } 
      // グラフにセットする
      this.BarChartData = {
        labels: ['学習時間'],
        datasets: [
          {
            label: ['学習時間'],
            data: vuechartData,
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)'],
            // borderWidth: [1],
          }
        ]
      },
      this.BarChartOptions = {
        responsive: true,
        maintainAspectRatio: false, // グラフの縦横比を固定するか
        scales: {
          // x軸に関して
          xAxes: [{
            stacked: true,
            // ラベルについて
            scaleLabel: {
              display: true,
              labelString: ''
            }
          }],
          // y軸に関して
          yAxes: [{
            // 目盛りについて
            ticks: {
              beginAtZero: true, // 0からスタートするか
              max: 1000,
              stepSize: 100, // 目盛りの間隔
              callback: function (label, index, labels) {
                return label + ' h';
              }
            }
          }],
        },
        // hoverした時に出てくる表示
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return tooltipItem.yLabel + ' h';
            }
          }
        }
      }
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages();
      } catch (error) {
        console.error(error.message);
      }

      return messages
    },
    async totalTime() {
      let times = 0;
      try {
        times += await MessageModel.dbtime();
      } catch (error) {
        console.error(error.message);
      }

      return times
    },
    async getChart() {
      let vuechartData = [];
      let chartdbtime = await MessageModel.dbtime();
      try {
        if (vuechartData.length === 0) {
          await vuechartData.push(chartdbtime);
        }
      } catch (error) {
        console.error(error.message);
      }

      return vuechartData
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