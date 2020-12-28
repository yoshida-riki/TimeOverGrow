<template>
  <div class="header">
    <v-system-bar height="100" color="primary">
      <h1>{{ title }}</h1>
    </v-system-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'TimeOverGrow',
    }
  },
}
</script>

<style scoped>
h1 {
  margin: 0 auto;
}
.header {
  margin-bottom: 3vw;
}
</style>
