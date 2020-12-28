<template>
  <div>
    <client-only>
      <Header />
      <v-card class="card">
        <!-- flexで横並び -->
        <TotallTime :value="num" />
        <Chart />
      </v-card>
      <input v-model.number="num" type="number" />
      <Textbox :on-post="addMessage" />
      <Spinner v-if="!initialLoaded" />
      <p
        class="no-messages"
        v-else-if="initialLoaded && messages.length === 0"
      >
        投稿データ0件
      </p>
      <MessageList v-else :messages="reversedMessages" />
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
    TotallNumber,
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
  // filters: {
  //   dateFilter(date) {
  //     let moment
  //     return moment(date).format('YYYY/MM/DD HH:mm:ss')
  //   },
  // },

  // computed: {
  //   comments() {
  //     return this.$store.getters['comments/orderdComments']
  //   },
  // },
  // created() {
  //   this.$store.dispatch('comments/init')
  // },
  // methods: {
  //   add() {
  //     this.$store.dispatch('comments/add', {
  //       index: this.index,
  //       name: this.name,
  //     })
  //     this.name = ''
  //     this.index = ''
  //   },
  // },
}
// describe('pages/index.vue', () => {
//   let vuetify
//   let wrapper

//   beforeEach(() => {
//     vuetify = new Vuetify()
//     // これを追加
//     localVue.use(vuetify)
//     wrapper = mount(IndexPage, {
//       localVue
//     })
//   })
// })
</script>

<style scoped>
.no-messages {
  text-align: center;
}
</style>
