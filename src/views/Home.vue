<template>
  <div class="home">
    <description></description>
    <main-meals></main-meals>
    <our-stay></our-stay>
    <delicious-food></delicious-food>
    <subscribe-news></subscribe-news>
    <footer-app></footer-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Description from '@/components/Home/Description.vue'
import MainMeals from '@/components/Home/MainMeals.vue'
import SubscribeNews from '@/components/Home/SubscribeNews.vue'
import DeliciousFood from '@/components/Home/DeliciousFood'

export default {
  name: 'Home',
  components: {
    Description,
    MainMeals,
    SubscribeNews,
    DeliciousFood
  }
}
</script>

<style lang="scss" scoped>
</style>
