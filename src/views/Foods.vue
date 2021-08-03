<template>
  <div class="foods">
    <introduction bgImage="foodsImage">
      <template #title>Foods</template>
    </introduction>

    <div class="foods-list">
      <div class="container">
        <div class="list-box">
          <FoodCard></FoodCard>
        </div>
      </div>
    </div>

    <FooterApp></FooterApp>
  </div>
</template>

<script>
import FoodCard from "@/components/FoodsMeals/FoodCard.vue";
export default {
  name: "Foods",
  components: {
    FoodCard,
  },

};
</script>

<style lang="scss" scoped>
.foods-list {
  padding-top: $padding;
  padding-bottom: $padding - 30;
  // background-color: $bgcolor2;
}
</style>
