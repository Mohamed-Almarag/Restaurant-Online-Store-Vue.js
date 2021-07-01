<template>
  <div :class="['introduction', `introduction-${bgImage}`]">
    <h2 class="title-page">
      <slot name="title"></slot>
    </h2>
  </div>
</template>


<script>
export default {
  name: "Introduction",
  props: {
    bgImage: {// bgImage =>>> it means background-image
      type: String,
      required: false,
      default: "defaultImage",
      validator: function (value) {
        // The value must match one of these strings
        return ['defaultImage', 'aboutImage','blogsImage', 'foodsImage',].indexOf(value) !== -1
      }
    }
  }

}
</script>


<style lang="scss" scoped>
.introduction {
  position: relative;
  background-image: url("../../assets/images/pages/01.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    @extend %before-overlay;
    background-color: rgba($black, 0.5);
  }
  &-aboutImage {
    background-image: url("../../assets/images/pages/02.jpg");
  }
  &-blogsImage {
    background-image: url("../../assets/images/pages/04.jpg");
  }
  &-foodsImage {
    background-image: url("../../assets/images/pages/03.jpg");
  }
  .title-page {
    position: relative;
    z-index: 2;
    color: $white;
    font: {
      size: 60px;
      weight: bold;
    }
  }
}
</style>