const { createApp } = Vue;

createApp({
  data() {
    return {
      activeLetter: '' 
    };
  },
  methods: {
    setActiveLetter(letter) {
      this.activeLetter = letter;
      console.log('Aktiver Buchstabe:', this.activeLetter); // Ausgabe in der Konsole welcher buchstabe jetzt gerade aktiv ist
    }
  }
}).mount('#app');
