<template>
  <div>
    <client-only>
      <Header />
      <v-card class="card">
        <!-- flexで横並び -->
        <TotallNumber :value="num" />
        <SingleNumber />
      </v-card>
      <input v-model.number="num" type="number" />
      <!-- <v-form @submit.prevent="add"> -->
        <Textbox :onPost="addMessage"/>
        <MessageList :messages="reversedMessages"/>
      <!-- </v-form> -->
    </client-only>
  </div>
</template>

<script>
import 'normalize.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Header from '../layouts/Header'
import TotallNumber from '../components/TotallNumber'
import SingleNumber from '../components/SingleNumber'
import Textbox from '../components/Textbox'
import MessageList from '../components/MessageList'

Vue.use(Vuetify)
export default {
  name: 'TimeOverGrow',
  components: {
    Header,
    TotallNumber,
    SingleNumber,
    Textbox,
    MessageList,
  },
  data() {
    return {
      num: 0,
      name: '',
      index: '',
      done: false,
      messages: []
    };
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    }
  }
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

<style scoped></style>
