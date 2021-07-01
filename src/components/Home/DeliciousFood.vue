<template>
  <div class="delicious-foods">
    <div class="container">
      <h2 class="main-heading text-center">Our Foods</h2>
      <h3 class="discription text-center text-capitalize">delicious foods for you</h3>
      <div class="row">
        <div class="food-content col-md-4">
          <p
            class="food-details"
          >Many different types of food with great taste, delicious smell and useful healthy ingredients.</p>
          <ul class="list-unstyled food-list text-capitalize d-flex flex-wrap">
            <li class="food-meal">meat</li>
            <li class="food-meal">pizza</li>
            <li class="food-meal">soup</li>
            <li class="food-meal">fish</li>
            <li class="food-meal">cheecken</li>
            <li class="food-meal">salad</li>
            <li class="food-meal">rice</li>
            <li class="food-meal">Pasta</li>
            <li class="food-meal">spaghetti</li>
          </ul>
          <p
            class="food-details"
          >Many different types of food with great taste, delicious smell and useful healthy ingredients.</p>
        </div>
        <div class="food-images col-md-8">
          <div class="row">
            <div class="photo-container col-sm-6 col-lg-4">
              <div class="img">
                <img
                  class="food-image d-block w-100"
                  src="../../assets/images/pages/home/delicious-food/01.jpg"
                  alt="food-image"
                />
                <span class="food-name text-center text-capitalize">meat</span>
              </div>
            </div>
            <div class="photo-container col-sm-6 col-lg-4">
              <div class="img">
                <img
                  class="food-image d-block w-100"
                  src="../../assets/images/pages/home/delicious-food/02.jpg"
                  alt="food-image"
                />
                <span class="food-name text-center text-capitalize">pasta</span>
              </div>
            </div>
            <div class="photo-container col-sm-6 col-lg-4">
              <div class="img">
                <img
                  class="food-image d-block w-100"
                  src="../../assets/images/pages/home/delicious-food/03.jpg"
                  alt="food-image"
                />
                <span class="food-name text-center text-capitalize">salad</span>
              </div>
            </div>
            <div class="photo-container col-sm-6 col-lg-4">
              <div class="img">
                <img
                  class="food-image d-block w-100"
                  src="../../assets/images/pages/home/delicious-food/04.jpg"
                  alt="food-image"
                />
                <span class="food-name text-center text-capitalize">soup</span>
              </div>
            </div>
            <div class="photo-container col-sm-6 col-lg-4">
              <div class="img">
                <img
                  class="food-image d-block w-100"
                  src="../../assets/images/pages/home/delicious-food/05.jpg"
                  alt="food-image"
                />
                <span class="food-name text-center text-capitalize">cheecken</span>
              </div>
            </div>
            <div class="photo-container col-sm-6 col-lg-4">
              <div class="img">
                <img
                  class="food-image d-block w-100"
                  src="../../assets/images/pages/home/delicious-food/06.jpg"
                  alt="food-image"
                />
                <span class="food-name text-center text-capitalize">spaghetti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="see-all-foods text-center">
        <h4 class="text-capitalize">visit the link to discover all our foods</h4>
        <router-link to="/foods" class="see-all">See All Foods</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DeliciousFood",
};
</script>

<style lang="scss" scoped>
.delicious-foods {
  padding-top: $padding;
  padding-bottom: $padding;
  .main-heading {
    @extend %main-head;
  }
  .discription {
    @extend %second-head;
    margin-bottom: $margin-bottom;
    &::before {
      background-image: url("../../assets/images/pages/before.png");
    }
  }
  .food-content {
    color: $bgcolor3;
    margin-bottom: 30px;
    .food-details {
      line-height: $pline;
    }
    .food-list {
      padding: 30px 0;
      border-top: 1px solid $textcolor;
      border-bottom: 1px solid $textcolor;
      .food-meal {
        background: $maincolor;
        padding: 8px 15px;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
    }
  }
  .food-images {
    .photo-container {
      margin-bottom: 30px;
      @media (min-width: 320px) and (max-width: 576px) {
        width: 50%;
      }
      .img {
        position: relative;
        overflow: hidden;
        &:hover {
          .food-name {
            bottom: 0;
          }
        }
        .food-image {
          height: 100%;
        }

        .food-name {
          position: absolute;
          background: rgba($black, 0.5);
          bottom: -50px;
          left: 0;
          width: 100%;
          padding: 10px 5px;
          color: $starscolor;
          font-weight: bold;
          font-size: 18px;
          height: 50px;
          transition: 0.5s;
          line-height: 1;
          @media (min-width: 320px) and (max-width: 400px) {
            height: 40px;
          }
        }
      }
    }
    // .photo {
    //   background-color: transparent;
    // }
  }
  .see-all-foods {
    margin-top: 40px;
    color: $bgcolor3;
    h4 {
      line-height: $pline;
    }
    .see-all {
      @extend %button;
      margin-top: 20px;
    }
  }
}
</style>
