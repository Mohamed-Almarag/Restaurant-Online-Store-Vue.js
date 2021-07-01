import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import globalComponents from "@/components/Global/globalComponents.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faStar,
  faTrash,
  faTrashAlt,
  faEye,
  faPlusCircle,
  faMinusCircle,
  faDollarSign,
  faHeart,
  faUtensils,
  faPhone,
  faEnvelope,
  faArrowUp,
  faSearchPlus,
  faWindowClose,
  faCheese,
  faHamburger,
  faPizzaSlice,
  faFish,
  faDrumstickBite,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faShoppingCart,
  faPlusCircle,
  faMinusCircle,
  faStar,
  faTrash,
  faTrashAlt,
  faEye,
  faDollarSign,
  faHeart,
  faUtensils,
  faPhone,
  faEnvelope,
  faArrowUp,
  faSearchPlus,
  faWindowClose,
  faCheese,
  faHamburger,
  faPizzaSlice,
  faFish,
  faDrumstickBite,
  faUser,
  faCalendar
);
Vue.component("fa", FontAwesomeIcon);

globalComponents.forEach((component) => {
  Vue.component(component.name, component);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
