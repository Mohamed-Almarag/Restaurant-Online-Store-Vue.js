<template>
  <div class="blog">
    <introduction bgImage="blogsImage">
      <template #title>Blog</template>
    </introduction>
    <blog-post></blog-post>
    <footer-app></footer-app>
  </div>
</template>


<script>
import BlogPost from "@/components/BlogNews/BlogPost"

export default {
  name: "Blog",
  components: {
    BlogPost
  },
}
</script>

<style lang="scss" scoped>
</style>