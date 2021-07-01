<template>
  <div class="row">
    <LoadingPage v-if="isLoaded"></LoadingPage>
    <input class="search-input" type="text" v-model="inputSearch" />
    <div
      class="list-food-box text-capitalize col-md-6 col-lg-4 col"
      v-for="food in filterFoods"
      :key="food.id"
    >
      <div class="food-container">
        <div class="food-photo-container">
          <img class="photo d-block m-auto" :src="food.image" :alt="food.meal" />
        </div>
        <div class="price-rating d-flex justify-content-between">
          <div class="reting-stars">
            <fa class="stars" icon="star" />
            <fa class="stars" icon="star" />
            <fa class="stars" icon="star" />
            <fa class="stars" icon="star" />
            <fa class="stars" icon="star" />
          </div>
          <span class="price">
            <fa class="dollar-price" icon="dollar-sign" />
            {{ food.price }}
          </span>
        </div>

        <div class="food-name-content">
          <div class="details-wishes d-flex justify-content-between align-items-center">
            <h3 class="food-name">{{ food.meal }}</h3>
            <div class="details">
              <router-link class="details" :to="`/foodkinds/${food.id}`">
                <fa icon="eye" />
              </router-link>
            </div>
            <div class="wishes">
              <fa
                class="love-heart"
                @click="toggleLoveEffect(food.id)"
                :class="{'active': food.lovefood}"
                icon="heart"
              />
            </div>
          </div>
          <p class="food-content">{{food.text}}</p>
        </div>

        <div class="add-to-cart">
          <button class="add-cart-button text-capitalize" @click="addToCart(food)">
            <fa class="shooping-cart-icon" icon="shopping-cart" />add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodCard",
  data() {
    return {
      inputSearch:'',
      isLoaded: false
    }
  },
  mounted() {
    this.isLoaded = true
    this.$store.dispatch("getAllFoodsList").finally(() => {
      this.isLoaded = false
    });
  },
  computed: {
    foods() {
      return this.$store.state.foods.foodsList;
    },
    filterFoods() {
      let inputSearchValue = this.inputSearch.toLowerCase();
      return this.foods.filter((food) => {
        return food.meal.match(inputSearchValue)
      })
    }
  },
  
  methods: {
    addToCart(food) {
      this.$store.dispatch("addFoodToCart", food);
    },
    toggleLoveEffect(id) {
      this.foods.filter((item) => {
        if (item.id == id) {
          return item.lovefood = !item.lovefood
        }
      })      
    }
  },
};
</script>
<style lang="scss" scoped>
.search-input {
  display: block;
  position: absolute;
  margin: auto;
  width: 50%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #fff;
  outline: none;
  padding: 7px 20px;
  border-radius: 20px;
  background-color: rgba($black, 0.5);
  color: #fff;
  @media (min-width: 320px) and (max-width: 576px) {
    width: 85%;
  }
}
.list-food-box {
  margin-bottom: 40px;
  transition: 0.5s;

  .food-container {
    border: 1px solid #ccc;
    padding: 15px;
    position: relative;
    overflow: hidden;
    background-color: $bgcolor;
    color: $bgcolor3;
    border-radius: 10px;
    transition: 0.5s;
    @media (min-width: 420px) and (max-width: 539px) {
      width: 70%;
      margin: auto;
    }
    &:hover {
      border-color: $maincolor;
      transform: translatey(-5px);
    }
    .food-photo-container {
      // border-radius: 50%;
      .photo {
        width: 200px;
        height: 200px;
        // width: 100%;
        // height: 100%;
        border-radius: 50%;
        transition: 0.5s;
        padding: 2px;
        &:hover {
          background-color: $maincolor;
          filter: drop-shadow(0 0 5px $maincolor);
        }
      }
    }
    .price-rating {
      padding: 10px 0;
      .reting-stars {
        .stars {
          color: $starscolor;
        }
      }
      .price {
        font-size: 18px;
        .dollar-price {
          color: #fff;
          color: $maincolor;
        }
      }
    }
    .food-name-content {
      .details-wishes {
        padding: 10px 0;
        .food-name {
          font-size: 22px;
        }
        .details {
          font-size: 22px;
          color: $white;
          transition: 0.5s;
          &:hover {
            filter: drop-shadow(0 0 3px $maincolor);
          }
        }
        .wishes {
          .love-heart {
            cursor: pointer;
            transition: 0.5s;
            &.active {
              color: red;
            }
          }
        }
      }
      .food-content {
        font-size: 14px;
        line-height: $pline;
      }
    }
    .add-to-cart {
      .add-cart-button {
        background-color: $maincolor;
        padding: 8px;
        outline: none;
        border: none;
        color: #fff;
        width: 100%;
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
}
</style>
