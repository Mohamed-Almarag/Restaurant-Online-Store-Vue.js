export default {
  FOODS_LIST(state, foods) {
    return (state.foodsList = foods);
  },
  SINGLE_FOOD(state, food) {
    return (state.foodtypes = food);
  },
  ADD_TO_CART(state, foodCart) {
    let foodQuantityCount = foodCart.quantity;
    let productInCart = state.shopCart.find((item) => {
      return item.id === foodCart.id;
    });
    if (productInCart) {
      productInCart.quantity += foodQuantityCount;
      return;
    }
    state.shopCart.push(foodCart);
  },
  DELETE_FOOD_FROM_CART(state, foodToDelete) {
    state.shopCart = state.shopCart.filter((item) => {
      return foodToDelete.id !== item.id;
    });
  },
  DELETE_ALL_FOODS_IN_CART(state) {
    state.shopCart = [];
  },
  DECREASE_QUANTITY_IN_SHOPCART(state, foodCart) {
    let foodQuantityCount = foodCart.quantity;
    let productInCart = state.shopCart.find((item) => {
      return item.id === foodCart.id;
    });
    if (productInCart) {
      productInCart.quantity = foodQuantityCount - 1;
      return;
    }
  },
};
