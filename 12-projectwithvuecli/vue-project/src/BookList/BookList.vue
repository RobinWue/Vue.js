<template>
  <div class="book-list">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <BookListRow
          v-for="book in books"
          :key="book.id"
          :title="book.title"
          :author="book.author"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import BookListRow from './BookListRow/BookListRow.vue';

export default {
  name: 'BookList',
  data() {
    return {
      books: [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: '1984', author: 'George Orwell' },
        { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      ],
    };
  },
  components: {
    BookListRow,
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 2px solid #ddd;
}
</style>
