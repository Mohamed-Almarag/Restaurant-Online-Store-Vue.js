import Api from "./api";

const STATE_POINT = "foods";

export default {
  allFoods() {
    return Api.get(STATE_POINT);
  },
  singleFood(id) {
    return Api.get(`${STATE_POINT}/${id}`);
  },
};
