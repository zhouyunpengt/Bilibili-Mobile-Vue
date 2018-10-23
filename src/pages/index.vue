<template>
  <div>
    <Heador></Heador>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Heador from '@/pages/public/heador.vue'
import Navbar from '@/pages/public/navbar.vue'
export default {
  name: 'index',
  components: {
    Heador,
    Navbar
  }
}
</script>

<style>

</style>
