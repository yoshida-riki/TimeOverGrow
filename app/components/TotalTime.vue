<template>
  <div>
    <client-only>
      <v-card max-width="374" style="margin: 0 auto;">
        <v-img height="350" :src="image_src"></v-img>
        <p>
          これまでのトータル学習時間は 
          {{ times }}
          <!-- <span v-bind="totaldbtime"></span> -->
          <!-- <span v-bind="dbtime"></span> -->
        </p>
      </v-card>
    </client-only>
  </div>
</template>

<script>
// import { totaldbtime } from '../models/Message'
// import Textbox from './TextBox'


export default {
  data() {
    return {
      // totaltime: 6,
      image_src: require('@/assets/Upgrade.png'),
    }
  },  
  props: {
    times: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style scoped></style>
