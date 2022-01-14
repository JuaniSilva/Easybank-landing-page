<template>
  <button
    class="border-none py-4 px-8 rounded-5xl font-bold text-veryLightGray bg-gradient-to-r from-limeGreen to-brightCyan"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props:{ 
    title: String,
  }
};
</script>

<style scoped></style>
