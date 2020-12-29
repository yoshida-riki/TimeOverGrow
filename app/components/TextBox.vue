<template>
  <div class="textbox-container">
      <input
        v-model.trim="time"
        type="number"
        max="24"
        min="0.25"
        step="0.25"
        placeholder=""
      />
      <textarea
        v-model.trim="body"
        placeholder=""
        class="textbox-input"
      ></textarea>
      <div class="textbox-button">
        <Button title="投稿" :on-click="post" :clickable="canPost" />
      </div>
  </div>
</template>

<script>
import Button from './Button'
import MessageModel from '../models/Message'

export default {
  components: {
    Button,
  },
  props: {
    onPost: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      time: '',
      body: '',
      canPost: true,
    }
  },
  methods: {
    async post() {
      this.canPost = false;
      try {
        const message = await MessageModel.save({
          time: this.time,
          body: this.body
        });
        this.onPost(message);
        this.time = '';
        this.body = '';
      } catch (error) {
        alert(error.message);
      }

      this.canPost = true;
    },
  },
}
</script>

<style scoped>
.textbox-container {
  padding: 0 5vw;
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
