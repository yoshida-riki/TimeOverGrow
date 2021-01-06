<template>
  <div>
    <client-only>
      <v-card max-width="374" style="margin: 0 auto;">
        <v-img height="350" :src="image_src"></v-img>
        <p>
          これまでのトータル学習時間は 
          {{ times }}時間
        </p>
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
    }
  },
}
</script>

<style scoped></style>
