<template>
  <div>
    <input
      v-model.number="num" type="number"
    >
    <AnimatedNumber
      :value="num"
    >
    </AnimatedNumber>
  </div>
</template>

<script>
import AnimatedNumber from '../components/AnimatedNumber';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


export default {
  components: { AnimatedNumber },
  data () {
    return {
      num: 0,
    };
  }
};
</script>

<style>

</style>