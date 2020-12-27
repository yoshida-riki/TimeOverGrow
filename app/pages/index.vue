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
      <v-form @submit.prevent="add">
        <div>
          <div>
            <label> 名前 </label>
          </div>
          <input v-model="name" />
          <div>
            <label> 内容 </label>
          </div>
          <input v-model="index" />
        </div>
        <button>投稿する</button>
      </v-form>
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

Vue.use(Vuetify)
export default {
  name: 'TimeOverGrow',
  components: {
    Header,
    TotallNumber,
    SingleNumber,
  },
  filters: {
    dateFilter(date) {
      let moment
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    },
  },
  data() {
    return {
      num: 0,
      name: '',
      index: '',
      done: false,
    }
  },
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

<style></style>
