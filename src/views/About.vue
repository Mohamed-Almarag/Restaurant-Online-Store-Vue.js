<template>
  <div class="about">
    <introduction bgImage="aboutImage">
      <template #title>About Us</template>
    </introduction>
    <WeAre></WeAre>
    <OurStay></OurStay>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import WeAre from "@/components/About/WeAre.vue";


export default {
  name: "About",
  components: {
    WeAre,
  },
};
</script>

<style lang="scss" scoped>
</style>
