<template>
  <div id="app">
    <header-app></header-app>
    <scroll-top-button></scroll-top-button>

    <router-view />
  </div>
</template>

<script>
import HeaderApp from '@/components/Global/HeaderApp.vue'
import ScrollTopButton from '@/components/Global/ScrollTopButton.vue'

export default {
  name: "App",
components: {
    HeaderApp,
    ScrollTopButton
  },
}
</script>


<style lang="scss">
body {
  background-color: $white !important;
}
::-webkit-scrollbar {
  background-color: $bgcolor;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: $maincolor;
  height: 100px;
  border-radius: 10px;
}
::selection {
  background-color: $starscolor;
  color: $white;
}
</style>
