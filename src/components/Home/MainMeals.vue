<template>
  <div class="main-meals">
    <div class="container">
      <h2 class="text-center text-capitalize main-head">dicover</h2>
      <h3 class="text-center text-capitalize second-head">main meals of restaurant</h3>
      <div class="row">
        <div class="meal-content col-sm-6 col-md-4">
          <div class="card text-center">
            <fa class="meal-icon" icon="cheese" />
            <div class="card-body">
              <h5 class="card-title">Breakfast</h5>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum assumenda dicta quae.</p>
            </div>
          </div>
        </div>
        <div class="meal-content col-sm-6 col-md-4">
          <div class="card second text-center">
            <fa class="meal-icon" icon="hamburger" />
            <div class="card-body">
              <h5 class="card-title">Lunch</h5>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum assumenda dicta quae.</p>
            </div>
          </div>
        </div>
        <div class="meal-content col-sm-6 col-md-4">
          <div class="card text-center">
            <fa class="meal-icon" icon="drumstick-bite" />
            <div class="card-body">
              <h5 class="card-title">Dinner</h5>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum assumenda dicta quae.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MainMeals"
}
</script>


<style lang="scss" scoped>
.main-meals {
  padding-top: $padding;
  padding-bottom: $padding;
  .main-head {
    @extend %main-head;
  }
  .second-head {
    @extend %second-head;
    margin-bottom: $padding;
    &::before {
      background-image: url("../../assets/images/pages/before.png");
    }
  }
  .meal-content {
    margin-bottom: 30px;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
    }
    @media (min-width: 480px) and (max-width: 576px) {
      width: 60%;
      margin: 0 auto 30px;
    }
    .card {
      padding-top: 25px;
      padding-bottom: 25px;
      border: none;
      background-color: $bgcolor;
      color: $bgcolor3;
      transition: 0.5s;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid $maincolor;
        .meal-icon {
          background: $bgcolor2;
        }
      }
      &.second {
        background-color: $maincolor;
        &:hover {
          border: 1px solid $white;
          .meal-icon {
            background: $bgcolor2;
          }
        }
        .meal-icon {
          border-color: $white;
        }
      }
      .meal-icon {
        width: 70px;
        height: 70px;
        transition: all 0.3s ease-in-out;
        display: block;
        margin: auto;
        background: $bgcolor;
        border: 1px solid $maincolor;
        padding: 15px;
        border-radius: 50%;
        color: $white;
        transition: 0.5s;
      }
      .card-body {
        padding-bottom: 0;
      }
    }
  }
}
</style>