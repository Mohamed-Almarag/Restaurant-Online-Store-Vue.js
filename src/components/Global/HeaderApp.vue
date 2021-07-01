<template>
  <div id="nav" class="nav-header">
    <nav @scroll="handleSCroll" class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link :to="{ name: 'Home' }" class="navbar-brand">DAHSHA</router-link>
        <button
          @click="toggleNavbarClass"
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon line-1"></span>
          <span class="navbar-toggler-icon line-2"></span>
          <span class="navbar-toggler-icon line-3"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Foods' }" class="nav-link">Foods</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Blog' }" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'ContactUs' }" class="nav-link">Contact Us</router-link>
            </li>
            <li class="nav-item cart">
              <router-link :to="{ name: 'Cart' }" class="nav-link">
                <div class="shoping-container">
                  <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
                  <fa class="shooping-cart-icon" icon="shopping-cart" />
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
  name: "HeaderApp",
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    toggleNavbarClass() {
      document.querySelector(".navbar-toggler").classList.toggle("show");
      let header = document.querySelector(".nav-header .navbar ");
      if (window.scrollY < 10) {
        header.classList.add('nav-while-scroll'); 
      } 
    },
    handleSCroll () {
      let header = document.querySelector(".nav-header .navbar ");
      if (window.scrollY > 10) {
        header.classList.add('nav-while-scroll'); 
      } else {
        header.classList.remove('nav-while-scroll');
      }
    },


    
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    
  },
  created () {
      window.addEventListener('scroll', this.handleSCroll);

    },
  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll);
  }
};
</script>

<style lang="scss" scoped>
.nav-header {
  .navbar {
    background-color: rgba($black, 0.1);
    padding: 1.7rem 1rem;
    transition: 0.5s;
    &.nav-while-scroll {
      background-color: $bgcolor2;
      padding: 1rem 1rem;
      box-shadow: 0px 3px 8px rgba($black, 0.7);
    }
    .navbar-brand {
      color: $maincolor;
      border: 1px solid $white;
      padding: 7px 15px;
      border-radius: 5px;
      font: {
        style: italic;
        weight: bold;
        size: 25px;
      }
    }
    .navbar-nav {
      @media (min-width: 320px) and (max-width: 991px) {
        padding-top: 10px;
        border-top: 1px solid $starscolor;
        margin-top: 20px;
      }
      .nav-item {
        &:not(:last-of-type) {
          margin-right: 25px;
        }
        .nav-link {
          color: $white;
          text-decoration: none;
          transition: 0.3s;
          position: relative;
          @media (min-width: 320px) and (max-width: 991px) {
            text-align: center;
          }
          &::before {
            position: absolute;
            content: "";
            bottom: 0;
            background-color: $maincolor;
            right: 0;
            width: 0;
            height: 3px;
            transition: 0.3s;
          }
          &:hover {
            color: $maincolor;
            transform: translate(5px);
            &::before {
              @media (min-width: 991px) {
                width: 100%;
              }
            }
          }
          &.router-link-exact-active {
            color: $maincolor;
            &::before {
              @media (min-width: 991px) {
                width: 100%;
              }
            }
          }
        }
        &.cart {
          @media (min-width: 320px) and (max-width: 991px) {
            padding-top: 5px;
          }
          &:hover {
            .cart-count {
              color: $white;
            }
          }
          .router-link-active {
            &.router-link-exact-active {
              color: $maincolor;
            }
            .cart-count {
              color: $white;
            }
          }
          .shoping-container {
            position: relative;
            .cart-count {
              position: absolute;
              top: -15px;
              left: 50%;
              // left: 9px;
              background: $maincolor;
              border-radius: 50%;
              padding: 3px;
              width: 20px;
              height: 20px;
              line-height: 1;
              text-align: center;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
.navbar-toggler {
  position: relative;
  height: 35px;
  width: 40px;
  .navbar-toggler-icon {
    height: 3px;
    position: absolute;
    left: 2px;
    width: 85%;
    background-color: $maincolor;
    transform-origin: center;
    transition: 0.3s;
  }

  .line-1 {
    transform: translateY(-8px);
  }
  .line-3 {
    transform: translateY(8px);
  }
  &.show {
    .line-1 {
      transform: translateY(0) rotate(-45deg);
    }
    .line-2 {
      opacity: 0;
    }
    .line-3 {
      transform: translateY(0) rotate(45deg);
    }
  }
}
</style>
