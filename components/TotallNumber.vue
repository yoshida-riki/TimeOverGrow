<template>
  <client-only>
    <v-card class="mx-0 my-12" max-width="374">
      <v-img height="350" :v-bind:src="image_src"></v-img>

      <v-card-title>どんどん継続！！！</v-card-title>
      {{ totall_number }}

      <v-divider class="mx-4"></v-divider>
    </v-card>
  </client-only>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      totall_number: 0,
      image_src: require('@/assets/Upgrade.png'),
    }
  },
  watch: {
    value(newValue, oldValue) {
      let timeCnt = 0
      let timer
      const animate = () => {
        timeCnt++
        if (timeCnt <= 60) {
          this.totall_number =
            Math.floor(((newValue - oldValue) * timeCnt) / 60) + oldValue
          timer = setTimeout(() => {
            animate()
          }, 10)
        } else {
          clearTimeout(timer)
          timer = null
          this.totall_number = newValue
        }
      }
      animate()
    },
  },
  mounted() {
    this.totall_number = this.value
  },
}
</script>

<style scoped></style>
