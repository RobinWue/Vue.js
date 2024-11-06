const app = Vue.createApp({
  data() {
    return {
      name: "Robin",
      currentDate: new Date().toLocaleString("de-DE"),
    };
  },
});

app.mount("#app");
