<template>
  <div class="textbox-container">
    <input
      v-model.trim="time"
      class="textbox-input"
      type="number"
      max="24"
      min="0.25"
      step="0.25"
      placeholder="3"
    />時間
    <v-textarea
      v-model.trim="body"
      class="textbox-area"
      label="今日のアウトプット内容"
      color="red"
      flat
      auto-grow
      outlined
      rows="1"
      row-height="100"
    ></v-textarea>
    <div class="textbox-button">
      <Button
        title="今日の学習内容送信！！！"
        :onClick="post"
        :onGet="get"
        :onChart="chart"
        :clickable="canPost"
      />
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
    onGet: {
      type: Function,
      required: true,
    },
    onChart: {
      type: null,
      required: true,
    }
  },
  data() {
    return {
      time: 0,
      body: '',
      canPost: true,
    }
  },
  methods: {
    async post() {
      this.canPost = false;
      try {
        const message = await MessageModel.save({
          time: Number(this.time),
          body: this.body
        });
        this.onPost(message);
        this.time = 0;
        this.body = '';
      } catch (error) {
        alert(error.message);
      }
      this.canPost = true;
    },
    async get() {
      let times = 0;
      try {
        times += await MessageModel.dbtime();
        this.onGet(times);
      } catch (error) {
        alert(error.message);
      }

      return times
    },
    async chart() {
      let data = 0;
      try {
        data += await MessageModel.dbtime();
        this.onChart(data);
      } catch (error) {
        alert(error.message);
      }

      return data
    }
  },
}
</script>

<style scoped>
.textbox-container {
  padding: 0 5vw;
}
.textbox-input {
  margin: 1vw;
  border: 1px solid rgb(161, 161, 161);
}
.textbox-area {
  width: 100%;
  resize: none;
  background: white;
  border-radius: 5px;
  padding: 0;
}
.textbox-button {
  margin-top: 10px;
  text-align: right;
}
</style>
