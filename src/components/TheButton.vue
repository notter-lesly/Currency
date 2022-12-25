<script setup lang="ts">
interface ButtonProps {
  text: string;
}
const props = defineProps<ButtonProps>();
</script>

<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  background-color: #d9be8f;
  border: 2px solid #6e5a41;
  border-radius: 2rem;
  width: 110px;
  height: 36.35px;
  font-family: "spectral";
  cursor: pointer;
}
button:hover {
  background-color: bisque;
}
</style>
