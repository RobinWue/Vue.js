const { createApp } = Vue;

createApp({
  data() {
    return {
      count: 0 // Originalwert vom Counter
    };
  },
  methods: {
    increaseCount() {
      this.count++;
      if (this.count > 100) {
        this.count = 0; // Zähler wieder auf 0 setzen wenn 100 erreicht
      }
      this.updateBackground(); // Aktualisiert den Hintergrund
    },
    resetCount(event) {
      event.stopPropagation(); // 
      this.count = 0; // Setzt den Coubter wieder auf 0 zurück durch den resetbutton
      this.updateBackground(); // Aktualisiert den Hintergrund wenn reset gedrückt wurde
    },
    handleKeyPress(event) {
      if (event.code === 'Space') { // Leertaste drücken um Wert zu erhöhen
        event.preventDefault(); 
        this.increaseCount();
      }
    },
    updateBackground() {
      document.documentElement.style.setProperty('--counter', `${this.count}%`);
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
}).mount('#app');
