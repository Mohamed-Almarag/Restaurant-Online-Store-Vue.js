import foods from "@/api/foods";

export default {
  getAllFoodsList({ commit }) {
    return new Promise((resolve, reject) => {
      foods
        .allFoods()
        .then((response) => {
          commit("FOODS_LIST", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  singleFoodType({ commit }, foodId) {
    return new Promise((resolve, reject) => {
      foods
        .singleFood(foodId)
        .then((response) => {
          commit("SINGLE_FOOD", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  addFoodToCart({ commit }, foodCartItem) {
    return new Promise((resolve) => {
      commit("ADD_TO_CART", Object.assign({}, foodCartItem, { quantity: 1 }));
      resolve(foodCartItem);
    });
  },
  decreaseQuantintyInShopCart({ commit }, foodCartItemShow) {
    return new Promise((resolve) => {
      commit(
        "DECREASE_QUANTITY_IN_SHOPCART",
        Object.assign({}, foodCartItemShow)
      );
      resolve(foodCartItemShow);
    });
  },

  deleteFoodFormCart({ commit }, foodToDelete) {
    return new Promise((resolve) => {
      commit("DELETE_FOOD_FROM_CART", foodToDelete);
      resolve(foodToDelete);
    });
  },
  deleteAllFoodsInCart({ commit }) {
    return new Promise(() => {
      commit("DELETE_ALL_FOODS_IN_CART");
    });
  },
};

// element[ yourKey ] = yourValue;
