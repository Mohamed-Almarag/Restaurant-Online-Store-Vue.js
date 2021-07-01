<template>
  <div class="single-blog" v-if="singleBlog">
    <div class="main-blog text-center">
      <div class="container">
        <h2 class="blog-title">{{singleBlog.title}}</h2>
        <p class="blog-content">{{singleBlog.maincontent}}</p>
        <div class="img-container">
          <img class="blog-img" :src="singleBlog.image" :alt="singleBlog.title" />
        </div>
        <p class="blog-content">{{singleBlog.maincontent}}</p>
      </div>
    </div>
    <InformationBlog :data="singleBlog"></InformationBlog>
    <footer-app></footer-app>
  </div>
</template>


<script>
import InformationBlog from "@/components/BlogNews/InformationBlog.vue";
export default {
  name: "SingleBlog",
  data() {
    return {
      blog: null,
    }
  },
  components :{
InformationBlog
  },
  computed:{
  singleBlog() {
    return this.$store.state.blogs.singleBlog
  }
  },
  mounted() {
    this.$store.dispatch("singleBlogPost",this.$route.params.id)
  },

}
</script>


<style lang="scss" scoped>
.single-blog {
  background-color: $bgcolor;
  .main-blog {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: auto;
    padding-top: $padding * 2;
    padding-bottom: 10px;
    .blog-title {
      @extend %second-head;
      color: $starscolor;
      line-height: $pline;
      @media (min-width: 320px) and (max-width: 576px) {
        font-size: 18px;
      }
    }
    .blog-content {
      line-height: 2;
      color: $bgcolor3;
      @media (min-width: 320px) and (max-width: 576px) {
        font-size: 14px;
      }
    }
    .img-container {
      width: 70%;
      margin: auto;
      padding: 40px 0;
      height: 350px;
      @media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
      }
      .blog-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>