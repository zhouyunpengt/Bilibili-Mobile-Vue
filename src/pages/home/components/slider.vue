<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <swiper-slide><img src="//i0.hdslb.com/bfs/archive/7643340a738b24080f5bcd06a58625576ac034c9.png"></swiper-slide>
      <swiper-slide><img src="//i0.hdslb.com/bfs/archive/f1cc4ceaee9dda7df35eff887eb524d1e871d174.png"></swiper-slide>
      <swiper-slide><img src="//i0.hdslb.com/bfs/archive/a82835f5f29e1a498b0988d447bab2191ef4b55d.jpg"></swiper-slide>
      <swiper-slide><img src="//i0.hdslb.com/bfs/archive/42cde42b2a12a28fa14a9718a08d6f11d29e91d9.png"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="scss">
.slider {
  width: 100%;
  img {
    width: 95%;
    border-radius: .7rem;
    margin-left: 2.5%;
  }
}
</style>
