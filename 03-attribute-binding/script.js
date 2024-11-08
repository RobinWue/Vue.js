Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
    };
  },
  computed: {
    formattedHeadline() {
      return this.headline.toLowerCase().replace(/\s+/g, "-"); //Regex
    },
  },
}).mount("#app");
