<template>
  <div class="footer text-center">
    <fa class="logo" icon="utensils" />
    <h2 class="text-capitalize recommend">recommend us</h2>
    <p
      class="text-capitalize recommend-words"
    >we always work to offer every thing to our clints and do our best</p>
    <span class="d-block phone">
      <fa class="icons" icon="phone" />+20 0106 491 1906
    </span>
    <span class="d-block email">
      <fa class="icons" icon="envelope" />mohamedalmarag97@gmail.com
    </span>
    <ul class="social-media d-flex justify-content-center list-unstyled">
      <li class="items">
        <fa class="icons" :icon="['fab', 'facebook']" />
      </li>
      <li class="items">
        <fa class="icons" :icon="['fab', 'linkedin']" />
      </li>
      <li class="items">
        <fa class="icons" :icon="['fab', 'github']" />
      </li>
      <li class="items">
        <fa class="icons" :icon="['fab', 'twitter']" />
      </li>
      <li class="items">
        <fa class="icons" :icon="['fab', 'whatsapp']" />
      </li>
    </ul>
    <div class="copyright text-capitalize">
      made with
      <span>
        <fa icon="heart" />
      </span> by
      <a href="tel: +2001064911906">Mohamed-Almarag</a>
    </div>
  </div>
</template>



<script>
export default {
  name:"FooterApp"
}
</script>



<style lang="scss" scoped>
.footer {
  background-color: $bgcolor2;
  color: $bgcolor3;
  padding-top: $padding - 40;
  position: relative;
  border-top: 3px solid $starscolor;
  .logo {
    border-radius: 50%;
    width: 55px;
    height: 55px;
    padding: 10px;
    background-color: $maincolor;
    position: absolute;
    z-index: 3;
    top: -30px;
    left: calc(50% - 30px);
    animation: rotate 7s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(45deg);
    }
    75% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .recommend {
    @extend %main-head;
    @media (min-width: 320px) and (max-width: 576px) {
      font-size: 50px;
    }
  }
  .recommend-words {
    line-height: $pline;
  }
  .phone {
    margin-bottom: 10px;
  }
  .phone,
  .email {
    .icons {
      margin-right: 8px;
    }
  }

  .social-media {
    margin-top: 20px;
    .items {
      margin: 10px;

      .icons {
        font-size: 30px;
        padding: 3px 5px;
        cursor: pointer;
        transition: 0.5s;
        width: 30px;
        &:hover {
          box-shadow: 0px 0px 7px $white;
          transform: rotate(-15deg);
          background-color: $maincolor;
        }
      }
    }
  }
  .copyright {
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: 1px solid #656565;
    span {
      font-size: 18px;
      color: red;
    }
    a {
      text-decoration: none;
      color: $bgcolor3;
      transition: 0.5s;
      &:hover {
        color: $maincolor;
      }
    }
  }
}
</style>