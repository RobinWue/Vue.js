const app = Vue.createApp({
  data() {
    return {
      name: "Robin",
      currentDate: new Date().toLocaleString("en-us"),
    };
  },
});

app.mount("#app");
