<template>
  <v-btn
  elevation="11"
  large
  outlined
  small
  x-large
  class="button"
  @click="onClick"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '投稿'
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>

</style>