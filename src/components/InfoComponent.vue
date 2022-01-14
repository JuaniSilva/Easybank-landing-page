<template>
  <div class="flex flex-col items-center mt-space pt-space-top">
    <img :src="require(`@/images/${image}`)" alt="" class="mb-8"/>
    <h3 class="text-2xl text-center text-darkBlue">{{ title }}</h3>
    <p class="text-grayishBlue my-8 text-center text-lg">{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: "InfoComponent",
  props: {
    image: String,
    alt: String,
    title: String,
    info: String,
  },
};
</script>

