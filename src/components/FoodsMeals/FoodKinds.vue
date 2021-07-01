<template>
  <div class="food-kinds" v-if="foodtypes">
    <div class="container">
      <div class="food-box">
        <div class="row">
          <div class="food-image col-md-5">
            <fa class="show-all-images" @click="showSliderImages" icon="search-plus" />

            <img class="d-block" :src="foodtypes.image" :alt="foodtypes.meal" />
          </div>
          <div class="food-content col-md-7">
            <h2 class="text-capitalize food-meal">{{ foodtypes.meal }}</h2>
            <div class="reting-stars-price d-flex">
              <span class="price">
                <fa icon="dollar-sign" />
                {{ foodtypes.price }}
                <span class="pipe">|</span>
              </span>
              <div class="stars">
                <fa class="stars" icon="star" />
                <fa class="stars" icon="star" />
                <fa class="stars" icon="star" />
                <fa class="stars" icon="star" />
                <fa class="stars" icon="star" />
              </div>
            </div>
            <div class="ingredients-container text-capitalize">
              <h4 class="ingredient-title">ingredients</h4>
              <ul class="list-unstyled ingredients-list d-flex">
                <li
                  class="ingredient"
                  v-for="(ingredient, id) in foodtypes.ingredients"
                  :key="id"
                >{{ ingredient }}</li>
              </ul>
              <p class="meal-fulldsecription">{{ foodtypes.fulldsecription }}</p>
            </div>
            <div>
              <div class="add-to-cart">
                <button class="add-cart-button text-capitalize" @click="addToCart(foodtypes)">
                  <fa class="shooping-cart-icon" icon="shopping-cart" />add to
                  cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <transition name="fade">
          <div
            v-if="showSlider"
            @click.self="hideSliderImages"
            class="each-meal d-flex align-items-center"
          >
            <fa @click="hideSliderImages" class="Close-slider-images" icon="window-close" />
            <carousel :perPage="2">
              <slide v-for="(img, id) in foodtypes.mealkinds" :key="id">
                <img class="d-block meal-img" :src="img" :alt="foodtypes.meal" />
              </slide>
            </carousel>
          </div>
        </transition>
      </div>
    </div>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "FoodKinds",
  data() {
    return {
      showSlider: false,
    };
  },
  components: {
    Carousel,
    Slide,
  },
  computed: {
    foodtypes() {
      return this.$store.state.foods.foodtypes;
    },
  },
  mounted() {
    this.$store.dispatch("singleFoodType", this.$route.params.id);
  },
  methods: {
    addToCart(foodtypes) {
      this.$store.dispatch("addFoodToCart", foodtypes);
    },
    showSliderImages() {
      return (this.showSlider = true);
    },
    hideSliderImages() {
      return (this.showSlider = false);
    },
  },
};
</script>

<style lang="scss" scoped>
.food-kinds {
  background-color: $bgcolor;
  padding-top: $padding + 50;
  .food-box {
    padding: $padding 0;
    .food-image {
      height: 300px;
      padding: 0;
      position: relative;

      &:hover {
        img {
          filter: brightness(0.5);
        }
        .show-all-images {
          opacity: 1;
        }
      }
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #fff;
        transition: 0.5s;
      }
      .show-all-images {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 7;
        color: #fff;
        font-size: 40px;
        cursor: pointer;
        opacity: 0;
        transition: 0.5s;
      }
    }

    .food-content {
      color: $bgcolor3;
      .food-meal {
        color: $maincolor;
      }
      .reting-stars-price {
        padding: 10px 0;
        .price {
          font-size: 18px;
          margin-right: 10px;
          .pipe {
            color: $textcolor;
          }
        }
        .stars {
          color: $starscolor;
        }
      }
      .ingredients-container {
        margin-top: 15px;
        margin-bottom: 15px;
        .ingredient-title {
          margin-bottom: 25px;
        }
        .ingredients-list {
          flex-wrap: wrap;
          .ingredient {
            color: $white;
            background-color: $maincolor;
            padding: 8px 15px;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
          }
        }
        .meal-fulldsecription {
          margin-bottom: 50px;
          line-height: $pline;
        }
      }
    }

    .add-to-cart {
      .add-cart-button {
        background-color: $maincolor;
        padding: 8px;
        outline: none;
        border: none;
        color: #fff;
        width: 50%;
        border-radius: 5px;
        transition: 0.5s;
        &:hover {
          filter: drop-shadow(0 0 5px $maincolor);
        }
        .shooping-cart-icon {
          margin-right: 10px;
        }
      }
    }
  }

  .each-meal {
    padding: 50px 0;
    background: $bgcolor;
    position: fixed;
    inset: 0;
    // display: flex;
    // align-items: center;
    z-index: 8888888;
    .Close-slider-images {
      position: absolute;
      right: 15px;
      top: 40px;
      color: #fff;
      padding: 4px;
      background: $maincolor;
      font-size: 25px;
      border-radius: 4px;
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    .VueCarousel {
      width: 65% !important;
      margin: auto !important;
      height: 500px;
      @media (min-width: 320px) and (max-width: 576px) {
        width: 90% !important;
      }
      .VueCarousel-wrapper {
        .VueCarousel-inner {
          .VueCarousel-slide {
            .meal-img {
              width: 100% !important;
              height: 100% !important;
              cursor: grab;
            }
          }
        }
      }

      // .VueCarousel-pagination {
      //   background-color: aqua !important;
      //   .VueCarousel-dot-container {
      //     .VueCarousel-dot {
      //       background-color: aquamarine !important;
      //       &.VueCarousel-dot--active {
      //         background-color: red !important;
      //       }
      //     }
      //   }
      // }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.7s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
