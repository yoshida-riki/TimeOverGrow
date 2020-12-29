<template>
  <div>
    <client-only>
      <Header />
      <v-row class="container d-flex justify-center">
        <v-col cols="12" sm="6" md="4">
          <TotallTime :value="num" />
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <Chart
            style="width: 100%;"
          />
        </v-col>
      </v-row>

      <input v-model.number="num" type="number" />

      <Textbox :on-post="addMessage" class="container" />
      <Spinner v-if="!initialLoaded" class="container" />
      <p
        class="no-messages"
        v-else-if="initialLoaded && messages.length === 0"
      >
        投稿データ0件
      </p>
      <MessageList v-else :messages="reversedMessages" class="container" />
    </client-only>
  </div>
</template>

<script>
import 'normalize.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Header from '../layouts/Header'
import TotallTime from '../components/TotallTime'
import Chart from '../components/Chart'
import Textbox from '../components/Textbox'
import MessageList from '../components/MessageList'
import MessageModel from '../models/Message'
import Spinner from '../components/Spinner'

Vue.use(Vuetify)
export default {
  name: 'TimeOverGrow',
  components: {
    Header,
    TotallTime,
    Chart,
    Textbox,
    MessageList,
    Spinner,
  },
  data() {
    return {
      num: 0,
      name: '',
      index: '',
      done: false,
      messages: [],
      initialLoaded: false
    }
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse()
    },
  },
  async created() {
    const messages = await this.fetchMessages();
    this.messages = messages;
    this.initialLoaded = true;
  },
  methods: {
    addMessage(message) {
      this.messages.push(message)
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages();
      } catch (error) {
        alert(error.message);
      }

      return messages;
    }
  },
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
