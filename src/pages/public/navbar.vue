<template>
  <p class="navbar">
    <span :class="{'is-active': index==current}" @click="changeClass(index)" v-for="(item, index) in list" :key="index">{{item}}</span>
  </p>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      list: ['首页', '动画', '番剧', '国创', '音乐'],
      current: 0
    }
  },
  methods: {
    changeClass (index) {
      this.current = index
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  margin-top: 2.4rem;
  background: #fff;
  padding-bottom: .5rem;
  span {
    font-size: .6rem;
    margin-left: 1.7rem;
    color: #757575;
  }
}

.is-active {
  border-bottom: solid 6px #fb7299;
  color: #fb7299 !important;
}
</style>
