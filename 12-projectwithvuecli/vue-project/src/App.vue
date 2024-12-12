<template>
  <div id="app">
    <AppHeader />
    <BookList />
  </div>
</template>

<script>
import AppHeader from './LayoutHeader/Header.vue';
import BookList from './BookList/BookList.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    BookList,
  },
};
</script>
