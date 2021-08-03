<template>
  <div class="we-are">
    <div class="container">
      <h2 class="text-center">Dicover</h2>
      <h3 class="text-uppercase text-center">restaurant history</h3>
      <p
        class="text-center"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatem, hic fugiat vitae eaque cumque reprehenderit iusto rerum nesciunt fugit sapiente voluptates consequatur neque nisi ea eius doloribus nulla labore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatem, hic fugiat vitae eaque cumque reprehenderit iusto rerum nesciunt fugit sapiente voluptates consequatur neque nisi ea eius doloribus nulla labore!</p>
      <div class="images">
        <div class="row">
          <div class="col-md-6">
            <img :src="require('../../assets/images/pages/about/' + imgsrc1)" :alt="alternate" />
          </div>
          <div class="col-md-6">
            <img :src="require('../../assets/images/pages/about/' + imgsrc2)" :alt="alternate" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeAre",
  data() {
    return {
      imgsrc1: "03.jpg",
      imgsrc2: "04.jpg",
      alternate: "foods",
    };
  },
};
</script>

<style lang="scss" scoped>
.we-are {
  padding-top: $padding - 20;
  padding-bottom: $padding;
  h2 {
    @extend %main-head;
  }
  h3 {
    @extend %second-head;
    color: $headcolor;
    &::before {
      background-image: url("../../assets/images/pages/before.png");
    }
  }
  p {
    color: $textcolor;
    line-height: 1.7;
    margin-bottom: 60px;
  }
  .images {
    div {
      padding-left: 0;
      padding-right: 0;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
          filter: brightness(0.5);
        }
      }
    }
  }
}
</style>
