<template>
  <header :class="{ 'header-dark': isDarkMode }">
    <h1>Welcome to the Book Store</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
header {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #f8f9fa; /* Standard (Light Mode) */
  color: black; /* Textfarbe Light Mode */
  transition:
    background-color 0.3s,
    color 0.3s;
}

.header-dark {
  background-color: #333; /* Hintergrundfarbe Dark Mode */
  color: white; /* Textfarbe Dark Mode */
}
</style>
