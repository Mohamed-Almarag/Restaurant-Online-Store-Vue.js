export default {
  cartItemCount(state) {
    return state.shopCart.length;
  },
  cartItemstotalPrice(state) {
    let total = 0;
    state.shopCart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  },
};
