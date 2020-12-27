<template>
  <div class="textbox-container">
    <textarea
      placeholder=""
      class="textbox-input"
      v-model.trim="body"
    ></textarea>
    <div class="textbox-button">
      <!-- ボタン記述 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: ''
    }
  },
}
</script>

<style scoped>
.textbox-container {
  padding: 10px;
}

.textbox-input {
  width: 100%;
  height: 100px;
  resize: none;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0;
}

.textbox-button {
  margin-top: 10px;
  text-align: right;
}
</style>