<template>
  <div>
    <client-only>
      <v-card max-width="374" style="margin: 0 auto">
        <v-img height="350" :src="image_src"></v-img>
        <div class="totaltime">
          <p class="times_text">これまでのトータル学習時間は</p>
          <span class="times">{{ times }}時間</span>
        </div>
      </v-card>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_src: require('@/assets/Upgrade.png'),
    }
  },
  props: {
    times: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.totaltime {
  text-align: center;
  padding: 1vw;
}
.times_text {
  font-weight: bold;
}
.times {
  font-weight: 900;
  font-size: 3vw;
}
</style>
