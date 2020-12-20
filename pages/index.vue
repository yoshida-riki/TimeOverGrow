<template>
  <div>
    <Header />
    <AnimatedNumber
      :value="num"
    />
    <input
      v-model.number="num" type="number"
    >
  </div>
</template>

<script>
import AnimatedNumber from '../components/AnimatedNumber';
import Header from '../components/header';


export default {
  components: {
    AnimatedNumber,
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