<template>
  <div
    v-for="comment in comments" :key="comment.id"
  >
    <Header />
    <v-card
    class="card"
    >
      <TotallNumber
        :value="num"/>
      <SingleNumber />
    </v-card>
    <input v-model.number="num" type="number">
    <span v-if="comment.created">
      <span>
        名前:{{ comment.name }}<br>
        内容:{{ comment.index}}<br>
        投稿時間:{{ comment.created.toDate() | dateFilter}}
      </span>
    </span>
    <form @submit.prevent="add">
      <div>
        <div>
          <label>
            名前
          </label>
        </div>
        <input v-model="name">
        <div>
          <label>
            内容
          </label>
        </div>
        <input v-model="index">
      </div>
      <button>投稿する</button> 
    </form>
  </div>
</template>

<script>
import Header from '../components/header';
import TotallNumber from '../components/TotallNumber';
import SingleNumber from '../components/SingleNumber';


export default {
  components: {
    Header,
    TotallNumber,
    SingleNumber,
  },
  data () {
    return {
      num: 0,
      name: '',
      index: '',
      done: false
    }
  },
  created: function() {
    this.$store.dispatch('comments/init')
  },
  methods: {
    add() {
      this.$store.dispatch('comments/add', {index: this.index, name: this.name})
      this.name = ''
      this.index = ''
    }
  },
  computed: {
    comments() {
      return this.$store.getters['comments/orderdComments']
    }
  },
  filters: {
    dateFilter: function(date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  }
};
</script>

<style scoped>

</style>
