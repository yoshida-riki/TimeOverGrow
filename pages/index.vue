<template>
  <div>
    <Header />
    <TotallNumber
      :value="num"
    />
    <input
      v-model.number="num" type="number"
    >
  </div>
</template>

<script>
import TotallNumber from '../components/TotallNumber';
import Header from '../components/header';


export default {
  components: {
    TotallNumber,
    Header
  },
  data () {
    return {
      num: 0,
    };
  }
};
</script>

<style>

</style>