<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ author }}</td>
    <td>
      <BaseButton text="Action" />
    </td>
  </tr>
</template>

<script>
import BaseButton from '../../BaseButton/BaseButton.vue';

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
  },
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
td {
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
