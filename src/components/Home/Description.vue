<template>
  <div class="discription">
    <div class="container">
      <div class="content">
        <h1 class="text-center restaurant-name">
          dahsha
          <span class="special">restaurant</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.discription {
  position: relative;
  overflow: hidden;
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/pages/08.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  &::before {
    @extend %before-overlay;
  }
  .content {
    position: relative;
    z-index: 2;
    color: #fff;
  }
  .restaurant-name {
    font: {
      size: 100px;
      family: "Dancing Script", cursive;
      weight: 700;
    }
    text-transform: capitalize;
    .special {
      color: $maincolor;
    }
    @media (min-width: 320px) and (max-width: 576px) {
      font-size: 67px;
    }
  }
}
</style>
