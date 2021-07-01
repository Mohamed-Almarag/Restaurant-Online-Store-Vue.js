import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Foods from "../views/Foods.vue";
import Blog from "../views/Blog.vue";
import ContactUs from "../views/ContactUs.vue";
import SingleBlog from "../components/BlogNews/SingleBlog.vue";
import FoodKinds from "../components/FoodsMeals/FoodKinds.vue";
import ShopeCart from "../components/FoodsMeals/ShopeCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/foods",
    name: "Foods",
    component: Foods,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "SingleBlog",
    component: SingleBlog,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/foodkinds/:id",
    name: "FoodKinds",
    component: FoodKinds,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: ShopeCart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
