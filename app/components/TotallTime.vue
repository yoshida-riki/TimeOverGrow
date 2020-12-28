<template>
  <client-only>
    <v-card max-width="374" style="margin: 0 auto;">
      <v-img height="350" :src="image_src"></v-img>
      <!-- <v-card-title>どんどん継続！！！</v-card-title> -->
      {{ totall_time }}
      <!-- <v-divider class="mx-4"></v-divider> -->
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
      totall_time: 0,
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
          this.totall_time =
            Math.floor(((newValue - oldValue) * timeCnt) / 60) + oldValue
          timer = setTimeout(() => {
            animate()
          }, 10)
        } else {
          clearTimeout(timer)
          timer = null
          this.totall_time = newValue
        }
      }
      animate()
    },
  },
  mounted() {
    this.totall_time = this.value
  },
}
</script>

<style scoped></style>
