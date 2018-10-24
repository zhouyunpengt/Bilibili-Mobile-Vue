<template>
  <div class="header">
    <img src="@/assets/icon/BILIBILI_LOGO.png">
    <img src="@/assets/icon/search.png">
    <img src="@/assets/icon/avatar.png">
    <span>下载 App</span>
  </div>
</template>

<script>
export default {
  name: 'heador'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 2.5rem;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;
  :nth-child(1) {
    width: 3rem;
    position: relative;
    top: .7rem;
    left: .7rem;
  }
  :nth-child(2) {
    width: 1.25rem;
    position: relative;
    top: .75rem;
    left: 5.3rem;
  }
  :nth-child(3) {
    width: 1.25rem;
    position: relative;
    top: .7rem;
    left: 5.55rem;
  }
  :nth-child(4) {
    font-size: .55rem;
    color: #fff;
    background-color: #fb7299;
    padding: .3rem .6rem .3rem .6rem;
    border-radius: .15rem;
    position: relative;
    top: .3rem;
    left: 5.7rem;
  }
}
</style>
