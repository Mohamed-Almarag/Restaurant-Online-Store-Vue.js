<template>
  <div class="shop-cart" :class="{'no-items': cartItems.length <= 0}">
    <div class="container">
      <div class="empty-cart text-center text-capitalize" v-if="cartItems.length <= 0">
        <p>you do not have any foods in your cart</p>
      </div>
      <div class="main-container">
        <div class="container-of-foods-cart">
          <div class="food-in-cart" v-for="item in cartItems" :key="item.id">
            <div class="food-img m-auto">
              <img :src="item.image" :alt="item.meal" />
            </div>
            <div class="food-deatils text-center text-capitalize">
              <div class="meal-price d-flex align-items-center justify-content-around">
                <h4>{{ item.meal }}</h4>
                <span class="price-meal d-block">
                  <fa icon="dollar-sign" />
                  {{ item.price }}
                </span>
              </div>

              <div
                class="increase-decrease-quantity d-flex justify-content-between align-items-center"
              >
                <span @click="increaseQuantinty(item)" class="increase d-block">
                  <fa icon="plus-circle" />
                </span>
                <span class="quntity d-block">{{ item.quantity }}</span>
                <span
                  @click="decreaseQuantinty(item)"
                  :class="{'disabled':item.quantity == 1}"
                  class="decrease d-block"
                >
                  <fa class="minus" icon="minus-circle" />
                </span>
              </div>
            </div>
            <button @click="deleteFoodFormCart(item)" class="text-capitalize remove-one-food">
              <fa class="trash-icon" icon="trash" />
            </button>
          </div>
        </div>
        <div v-if="cartItems.length >= 1" class="total-price-checkout text-center">
          <div class="total-check-container">
            <div class="total-price d-flex justify-content-between align-items-center">
              <span class="d-block text-capitalize">total price:</span>
              <span class="d-block">
                <fa icon="dollar-sign" />
                {{ cartTotalPrice }}
              </span>
            </div>
            <div class="checkout">
              <button class="checkout-btn text-capitalize">ckeckout</button>
            </div>
          </div>
          <div class="delete-all">
            <button @click="deleteAllFoodsInCart" class="delete-all-foods text-capitalize">
              <fa class="trash-icon" icon="trash" />delete all
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cartItems() {
      return this.$store.state.foods.shopCart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartItemstotalPrice;
    },
    
  },
  methods: {
    deleteFoodFormCart(itemToDelete) {
      this.$store.dispatch("deleteFoodFormCart",itemToDelete);
    },
    deleteAllFoodsInCart() {
      this.$store.dispatch("deleteAllFoodsInCart");
    },
    increaseQuantinty(food) {
      this.$store.dispatch("addFoodToCart", food);
    },
    decreaseQuantinty(food) {
      this.$store.dispatch("decreaseQuantintyInShopCart", food);
    },
  }
  // mounted() {
  //   this.$store.dispatch("getFoodsFromCart");
  // },
};
</script>

<style lang="scss" scoped>
.shop-cart {
  padding-top: $padding + 50;
  padding-bottom: $padding - 20;
  background-color: $bgcolor2;
  &.no-items {
    height: 100vh;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 29px;
  }
  .empty-cart {
    color: $bgcolor3;
  }
  .main-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .container-of-foods-cart {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (min-width: 320px) and (max-width: 991px) {
        width: 100%;
      }
      .food-in-cart {
        user-select: none;
        background-color: $bgcolor;
        border-radius: 5px;
        color: $bgcolor3;
        margin-bottom: 30px;
        padding: 20px;
        position: relative;
        width: 49%;
        height: 200px;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 100%;
        }
        .food-img {
          width: 60px;
          height: 60px;
          img {
            width: 100%;
            height: 100%;
            border: 1px solid $white;
            border-radius: 50%;
            transition: 0.5s;
            &:hover {
              filter: brightness(0.5);
            }
          }
        }
        .food-deatils {
          // .meal-price {
          //   display: flex;
          //   justify-content: space-around;
          //   align-items: center;
          // }
          .price-meal {
            margin: 15px 0;
          }

          .increase-decrease-quantity {
            background-color: $bgcolor2;
            padding: 8px;
            margin: auto;
            border-radius: 5px;
            .increase,
            .decrease {
              padding: 2px 5px;
              background: $bgcolor;
              border-radius: 5px;
              cursor: pointer;
              transition: 0.5s;
              &:hover {
                background-color: $maincolor;
              }
            }
            .quntity {
              padding: 2px 10px;
              background: $bgcolor;
              border-radius: 5px;
              cursor: auto;
            }
            .decrease {
              &.disabled {
                cursor: not-allowed;
                pointer-events: none;
              }
            }
          }
        }
        .remove-one-food {
          color: #fff;
          position: absolute;
          right: 20px;
          top: 20px;
          border: none;
          outline: none;
          background: none;
          .trash-icon {
            cursor: pointer;
            transition: 0.5s;
            &:hover {
              color: $maincolor;
            }
          }
        }
      }
    }
    .total-price-checkout {
      background-color: $bgcolor;
      height: 300px;
      color: #fff;
      width: 28%;
      padding: 20px;
      border-radius: 5px;
      @media (min-width: 320px) and (max-width: 991px) {
        width: 100%;
      }
      .total-check-container {
        margin-bottom: 35px;
        padding-bottom: 15px;
        border-bottom: 1px solid $textcolor;
        .total-price {
          margin-bottom: 30px;
          padding: 15px;
          border-radius: 5px;
        }
        .checkout {
          margin-bottom: 30px;
          .checkout-btn {
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
          }
        }
      }
      .delete-all {
        .delete-all-foods {
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
          .trash-icon {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
