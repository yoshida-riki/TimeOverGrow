<template>
  <v-btn
    elevation="11"
    large
    outlined
    small
    x-large
    class="button"
    :class="{disabled: !clickable}"
    @click="onClick"
    :disabled="!clickable"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '投稿',
    },
    onClick: {
      type: Function,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style scoped>
.disabled {
  opacity: 0.3;
}
</style>
