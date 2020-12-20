<template>
  <div>
    <Header />
    <v-card
    class="card"
    >
      <TotallNumber
        :value="num"
      />
      <SingleNumber />
    </v-card>
    <input
      v-model.number="num" type="number"
    >
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
    };
  }
};
</script>

<style scoped>
.card {
  display: flex;
}
</style>