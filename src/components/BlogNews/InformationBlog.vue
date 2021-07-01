<template>
  <div class="author-views-date">
    <div class="container">
      <div class="content d-flex flex-wrap justify-content-between text-capitalize">
        <div class="details">
          <fa class="icons" icon="user" />
          <span class="data">{{data.author}}</span>
        </div>
        <div class="details">
          <fa class="icons" icon="eye" />
          <span class="data">{{data.views}}</span>
        </div>
        <div class="details">
          <fa class="icons" icon="calendar" />
          <span class="data">{{data.date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InformationBlog",
    props: ['data']
  }
</script>

<style lang="scss" scoped>
.author-views-date {
  color: $bgcolor3;
  .content {
    padding-bottom: $padding;
    padding-top: 20px;
    border-top: 1px solid $textcolor;
    .details {
      margin-bottom: 10px;
      .icons {
        color: $starscolor;
        margin-right: 5px;
      }
    }
  }
}
</style>