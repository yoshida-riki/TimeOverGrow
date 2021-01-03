<template>
  <client-only>
    <v-card max-width="374" style="margin: 0 auto;">
      <v-img height="350" :src="image_src"></v-img>
      <p>
        これまでのトータル学習時間は 
        {{ totaldbtime }}
        <!-- <span v-bind="totaldbtime"></span> -->
        <!-- <span v-bind="dbtime"></span> -->
      </p>
    </v-card>
  </client-only>
</template>

<script>
import { totaldbtime } from '../models/Message'
import Textbox from './TextBox'


export default {
  data() {
    return {
      // totalltime: 6,
      image_src: require('@/assets/Upgrade.png'),
    }
  },
  //   props: {
  //   time: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  methods: {
    totaldbtime
  },
  // watch: {
  //   value(newValue, oldValue) {
  //     let timeCnt = 0
  //     let timer
  //     const animate = () => {
  //       timeCnt++
  //       if (timeCnt <= 60) {
  //         this.totall_time =
  //           Math.floor(((newValue - oldValue) * timeCnt) / 60) + oldValue
  //         timer = setTimeout(() => {
  //           animate()
  //         }, 10)
  //       } else {
  //         clearTimeout(timer)
  //         timer = null
  //         this.totall_time = newValue
  //       }
  //     }
  //     animate()
  //   },
  // },
  // mounted() {
  //   this.totall_time = this.value
  // },
}
</script>

<style scoped></style>
