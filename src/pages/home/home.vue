<template>
  <div class="home">
    <Slider></Slider>
    <Card></Card>
  </div>
</template>

<script>
import Slider from './components/slider.vue'
import Card from './components/card.vue'
export default {
  name: 'home',
  components: {
    Slider,
    Card
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 4rem;
}
</style>
