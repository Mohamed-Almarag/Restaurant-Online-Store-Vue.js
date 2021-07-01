<template>
  <div class="our-statement">
    <div class="container">
      <div class="row">
        <div class="photo col-md-5 col-sm-12"></div>
        <div class="discription col-md-7 col-sm-12">
          <h2 class="haed text-center text-capitalize">Our Stay</h2>
          <h3 class="disc text-center text-uppercase">the perfect and savor in foods</h3>
          <p
            class="content-p"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .</p>
          <p
            class="content-p last"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "OurStay",
}
</script>



<style lang="scss" scoped>
.our-statement {
  background-color: $bgcolor3;
  padding-top: $padding;
  padding-bottom: $padding;
  .photo {
    height: 450px;
    background-image: url("../../assets/images/pages/about/02.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.3s;
    &:hover {
      filter: brightness(0.5);
    }
  }
  .discription {
    @media (min-width: 320px) and (max-width: 767px) {
      margin-top: 40px;
    }
    .haed {
      @extend %main-head;
      font-size: 50px;
      margin-bottom: 20px;
    }
    .disc {
      @extend %second-head;
      font-size: 20px;
      color: $headcolor;
      line-height: $pline;
      &::before {
        background-image: url("../../assets/images/pages/before.png");
      }
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 16px;
      }
    }
    .content-p {
      line-height: $pline;
      margin: auto;
      color: $textcolor;
      &.last {
        margin-top: 30px;
      }
    }
  }
}
</style>