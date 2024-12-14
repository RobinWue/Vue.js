<template>
  <div id="app">
    <div class="header">
      <AppHeader :isDarkMode="isDarkMode" />
      <button class="dark-mode-toggle" @click="toggleDarkMode">
        <span v-if="isDarkMode">🌞</span>
        <span v-else>🌙</span>
      </button>
    </div>
    <BookList />
  </div>
</template>

<script>
import AppHeader from './LayoutHeader/Header.vue'
import BookList from './BookList/BookList.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    BookList,
  },
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.body.classList.toggle('dark', this.isDarkMode)
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.dark-mode-toggle {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  transition: transform 0.2s;
}

.dark-mode-toggle:hover {
  transform: scale(1.1);
}
</style>
