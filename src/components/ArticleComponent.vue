<template>
  <article class="flex flex-col rounded-xl overflow-hidden mb-6">
    <img :src="require(`@/images/${image}`)" alt="" class="w-full" />
    <div class="felx flex-col p-8 bg-white">
      <p class="text-sm text-grayishBlue">by {{ author }}</p>
      <h5 class="text-md my-4 text-darkBlue">{{ title }}</h5>
      <p class="text-sm text-grayishBlue">{{ info }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticleComponent",
  props: {
    image: String,
    alt: String,
    title: String,
    author: String,
    info: String,
  },
};
</script>

<style scoped></style>
