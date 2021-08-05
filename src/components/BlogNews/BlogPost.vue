<template>
  <div class="blog-news text-center">
    <LoadingPage v-if="isLoaded"></LoadingPage>
    <div class="container">
      <div class="blog-post">
        <div class="row">
          <div v-for="blog in blogssList" :key="blog.id" class="blog-box col-sm-6 col-lg-4">
            <div class="blog-container-content">
              <div class="img-box">
                <router-link :to="`/blog/${blog.id}`">
                  <img :src="blog.image" alt="news" />
                </router-link>
              </div>

              <div class="content-box">
                <h3 class="title">
                  <router-link :to="`/blog/${blog.id}`" class="read-more">{{blog.title}}</router-link>
                </h3>
                <p class="blog-content">{{blog.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  name: "BlogPost",
  data (){
    return {
      isLoaded: false
    }
  },
  mounted() {
    this.isLoaded = true
    this.$store.dispatch("getAllBlogsList").finally(() => {
      this.isLoaded = false
    });
  },

  computed: {
    blogssList() {
      return this.$store.state.blogs.blogsList
    },
    blogssListLength() {
      return this.$store.getters.getBlogListLength
    },
  },
}

</script>


<style lang="scss" scoped>
.blog-news {
  padding-top: $padding;
  padding-bottom: $padding;
  position: relative;
  .blog-post {
    padding-top: 20px;
    padding-bottom: 20px;
    .blog-box {
      @media (min-width: 420px) and (max-width: 576px) {
        width: 70%;
        margin: auto;
      }
      .blog-container-content {
        color: $bgcolor3;
        transition: 0.5s;
        background-color: #242424;
        border: 1px solid $textcolor;
        margin-bottom: 30px;
        &:hover {
          box-shadow: 0px 0px 3px $starscolor;
        }
        .img-box {
          height: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content-box {
          padding: 5px;
          .title {
            line-height: $pline;
            margin-top: 17px;
            margin-bottom: 10px;
            font-size: 17px;
            .read-more {
              text-decoration: none;
              transition: 0.5s;
              color: $starscolor;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .blog-content {
            line-height: $pline;
          }
        }
      }
    }
  }
  .load-more {
    @extend %button;
    &.all-blogs-loaded {
      display: none;
    }
  }
}
</style>