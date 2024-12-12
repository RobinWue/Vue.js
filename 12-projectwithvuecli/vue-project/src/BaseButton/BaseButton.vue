<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary'].includes(value),
    },
  },
  computed: {
    buttonClass() {
      return this.variant === 'primary' ? 'bg--primary' : 'bg--secondary';
    },
  },
};
</script>

<style scoped>
.bg--primary {
  background-color: blue;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.bg--secondary {
  background-color: gray;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
