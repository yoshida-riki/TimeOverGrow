<template>
<div id="animated-number-demo">
  <input v-model.number="number" type="number" step="20" />
  <p>{{ animatedNumber }}</p>
</div>
</template>

<script> 
export default {
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
    }
  }
}
Vue.createApp(Demo).mount('#animated-number-demo')
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 20vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
}
</style>