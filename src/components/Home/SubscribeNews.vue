<template>
  <div class="blogs text-center">
    <div class="container">
      <h2 class="title-1 text-center text-capitalize">our news</h2>
      <h3 class="title-2 text-center text-capitalize">the latest news daily</h3>

      <div class="blogs-content">
        <div class="row">
          <div class="blog-container col-md-6">
            <div class="blog-content">
              <h5 class="content-title text-capitalize">the healthy food for a good life</h5>
              <p
                class="blog-description"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, similique illum?</p>
              <div class="blog-images d-flex justify-content-around flex-wrap">
                <img src="../../assets/images/pages/home/news/01.jpg" alt="blogs" />
                <img src="../../assets/images/pages/home/news/02.jpg" alt="blogs" />
              </div>
              <p
                class="blog-description"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, similique illum? Architecto numquam consectetur magnam minima dicta ipsa adipisci ipsum facilis</p>
            </div>
          </div>
          <div class="blog-container col-md-6">
            <div class="blog-content">
              <h5 class="content-title text-capitalize">the most usefully food in vegetables</h5>
              <p
                class="blog-description"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, similique illum?</p>
              <div class="blog-images d-flex justify-content-around flex-wrap">
                <img src="../../assets/images/pages/home/news/03.jpg" alt="blogs" />
                <img src="../../assets/images/pages/home/news/04.jpg" alt="blogs" />
              </div>
              <p
                class="blog-description"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, similique illum? Architecto numquam consectetur magnam minima dicta ipsa adipisci ipsum facilis</p>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/blog" class="btn-blogs text-capitalize">see all news</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name:"subscribe-news",
}
</script>


<style lang="scss" scoped>
.blogs {
  background-image: url("..//../assets/images/pages/home/news/055.jpg");
  // background-color: $starscolor;
  padding-top: $padding;
  padding-bottom: $padding;
  background-size: cover;
  // background-size: contain;
  background-attachment: fixed;
  color: #fff;
  position: relative;
  &::before {
    @extend %before-overlay;
    background-color: rgba($black, 0.5);
  }
  .title-1 {
    @extend %main-head;
  }
  .title-2 {
    @extend %second-head;
    margin-bottom: $margin-bottom;
    &::before {
      background-image: url("../../assets/images/pages/before.png");
    }
  }
  .blogs-content {
    .blog-container {
      .blog-content {
        background-color: $white;
        padding: 30px 10px;
        margin-bottom: $margin-bottom - 30px;
        color: $textcolor;
        .content-title {
          color: $textcolor;
        }
        .blog-images {
          padding: 20px 0;
          img {
            @media (min-width: 320px) and (max-width: 480px) {
              width: 50%;
            }
          }
        }
        .blog-description {
          line-height: $pline;
          margin: 0;
          @media (min-width: 320px) and (max-width: 576px) {
            font-size: 14px;
          }
        }
      }
    }
  }
  .btn-blogs {
    @extend %button;
    position: relative;
    z-index: 3;
    margin-top: $margin-bottom - 40px;
  }
}
</style>