<template>
  <v-card class="message">
    <p class="message-text">{{ time }}時間</p>
    <div class="message-date">{{ date }}</div>
    <p class="message-text">{{ body }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.message {
  /* border-bottom: 1px solid black; */
  min-height: 80px;
  padding: 10px;
  margin: 0 5vw 2vw;
}
.message:hover {
  background-color: #eee;
}
.message-date {
  font-size: 0.8em;
  color: #777;
  text-align: right;
}
</style>
