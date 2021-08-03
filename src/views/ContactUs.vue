<template>
  <div class="contact-us">
    <introduction>
      <template #title>Contact Us</template>
    </introduction>
    <div class="reservation">
      <h2 class="reservation-heading text-capitalize text-center">everything for you</h2>
      <p
        class="reservation-text text-capitalize text-center"
      >everything for you to do your reservation with more comfortable.</p>
      <p
        class="reservation-text text-capitalize text-center"
      >feel free to do everything like reservation , contact us , some suggestions to improve our services.</p>
      <p class="reservation-text text-capitalize text-center">
        welcome to our restaurant anytime
        <fa class="heart-icon" icon="heart" />
      </p>
    </div>
    <div class="contact-content">
      <h2 class="contact-heading text-capitalize text-center">contact us</h2>
      <div class="container">
        <form method="post" @submit.prevent="checkValidateForm" class="contact-form text-center">
          <div class="row">
            <div class="col-md-6 input-container">
              <input class="form-input w-100" type="text" placeholder="Name" v-model="Name" />
            </div>
            <div class="col-md-6 input-container">
              <input class="form-input w-100" type="email" placeholder="Email" v-model="Email" />
            </div>
            <div class="col-md-6 input-container">
              <input class="form-input w-100" type="phone" placeholder="Phone" v-model="Phone" />
            </div>
            <div class="col-md-6 input-container">
              <input class="form-input w-100" type="text" placeholder="Subject" v-model="Subject" />
            </div>
            <div class="col-12 input-container">
              <textarea class="form-textarea w-100" placeholder="Message" v-model="Message"></textarea>
            </div>
          </div>
          <div v-if="errors.length > 0" class="errors text-center text-capitalize">
            <span v-for="error in errors" :key="error">{{error}}</span>
          </div>
          <button type="submit" class="submit-btn text-uppercase">send</button>
        </form>
      </div>
    </div>
    <FooterApp></FooterApp>
  </div>
</template>


<script>
export default {
  name: "ContactUs",
  data() {
    return {
      Name: null,
      Email: null,
      Phone: null,
      Subject: null,
      Message: null,
      errors: []
    }
  },
  methods: {
    // It's Just A Simple Validation For Testing You Can Not Use It In The Real Project 
    // It's Not The Best To Do Validation With It
    checkValidateForm() {
      this.errors = []
      if(!this.Name || !this.Email || !this.Phone || !this.Subject || !this.Message) {
        this.errors.push("all fields are required")
      }
      if(!this.errors.length) {
        return true
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.errors {
  padding: 10px;
  background: red;
  color: $white;
  font-size: 18px;
  line-height: 1;
  width: 50%;
  margin: 0 auto 20px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
}
.contact-us {
  // background-color: $bgcolor;
  .reservation {
    padding-top: $padding;
    padding-bottom: $padding - 20;
    .reservation-heading {
      color: $maincolor;
      @extend %second-head;
      &::before {
        background-image: url("../assets/images/pages/before.png");
      }
    }
    .reservation-text {
      line-height: $pline;
      color: $textcolor;
      .heart-icon {
        color: #f00;
      }
    }
  }
  .contact-content {
    padding-top: $padding;
    border-top: 1px solid rgba($textcolor, 0.3);
    .contact-heading {
      color: $maincolor;
      @extend %second-head;
      &::before {
        background-image: url("../assets/images/pages/before.png");
      }
    }
    .contact-form {
      padding-top: $padding - 30;
      padding-bottom: $padding;
      .input-container {
        margin-bottom: 30px;
        .form-input,
        .form-textarea {
          color: $textcolor;
          padding: 8px 16px;
          background: none;
          border: 1px solid rgba($textcolor, 0.3);
          transition: 0.5s;
          &:focus {
            outline: none;
            border-color: $maincolor;
          }
        }
        .form-textarea {
          height: 170px;
          resize: none;
        }
      }
      .submit-btn {
        @extend %button;
        width: 50%;
      }
    }
  }
}
</style>