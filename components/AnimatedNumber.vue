<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <!-- <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template> -->

    <v-img
      height="350"
      v-bind:src="image_src"
    ></v-img>

    <v-card-title>どんどん継続！！！</v-card-title>
    {{animated_number}}

    <!-- <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>
    </v-card-text> -->

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      animated_number: 0,
      image_src: require("@/assets/Upgrade.png"),
    };
  },
  watch: {
    value (newValue, oldValue) {
      let timeCnt = 0;
      let timer;
      const animate = () => {
        timeCnt++;
        if (timeCnt <= 60) {
          this.animated_number = Math.floor((newValue - oldValue) * timeCnt / 60) + oldValue;
          timer = setTimeout(() => {
            animate();
          }, 10);
        } else {
          clearTimeout(timer);
          timer = null;
          this.animated_number = newValue;
        }
      };
      animate();
    }
  },
  mounted () {
    this.animated_number = this.value;
  }
};
</script>

<style scoped>

</style>