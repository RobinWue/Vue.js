<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ author }}</td>
    <td>
      <BaseButton
        :text="isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'"
        @click="toggleBookmark"
      />
    </td>
  </tr>
</template>

<script>
import BaseButton from '../../BaseButton/BaseButton.vue'

export default {
  name: 'BookListRow',
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    isBookmarked: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    BaseButton,
  },
  methods: {
    toggleBookmark() {
      this.$emit('toggle-bookmark')
    },
  },
}
</script>

<style scoped>
td {
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
