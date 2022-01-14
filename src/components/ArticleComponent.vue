<template>
  <article class="flex flex-col rounded-xl overflow-hidden mb-6 h-full lg:mb-0">
    <div class="py-article-image px-32 bg-no-repeat bg-cover" :class="`bg-${image}`"></div>
    <!-- <img :src="require(`@/images/${image}`)" alt="" class="w-full" /> -->
    <div class="felx flex-col p-8 bg-white">
      <p class="text-sm text-grayishBlue">by {{ author }}</p>
      <h5 class="text-title my-4 text-darkBlue">{{ title }}</h5>
      <p class="text-base text-grayishBlue">{{ info }}</p>
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
