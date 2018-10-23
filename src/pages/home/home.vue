<template>
  <div class="home">
    <Slider></Slider>
  </div>
</template>

<script>
import Slider from './components/slider.vue'
export default {
  name: 'home',
  components: {
    Slider
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 4rem;
}
</style>
