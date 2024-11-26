const app = Vue.createApp({
  data() {
    return {
      red: 255,
      green: 0,
      blue: 0,
    };
  },
  computed: {
    rgb() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
    hex() {
      const r = this.red.toString(16).padStart(2, "0").toUpperCase();
      const g = this.green.toString(16).padStart(2, "0").toUpperCase();
      const b = this.blue.toString(16).padStart(2, "0").toUpperCase();
      return `#${r}${g}${b}`;
    },
  },
  watch: {
    rgb(newRgb) {
      document.body.style.backgroundColor = newRgb;
    },
  },
  mounted() {
    document.body.style.backgroundColor = this.rgb;
  },
});

app.mount("#app");
