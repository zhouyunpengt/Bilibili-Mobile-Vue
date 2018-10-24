<template>
  <div>
    <div class="card">
      <img :src="img" width="95%">
      <div>
        <img src="@/assets/icon/play.png" width="8%"><span>{{play}}</span>
        <img src="@/assets/icon/danmaku.png" width="8%"><span>{{danmaku}}</span>
      </div>
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    img: {
      type: String,
      default: '//s1.hdslb.com/bfs/static/mult/images/tv.png'
    },
    title: {
      type: String,
      default: ''
    },
    play: {
      type: String,
      default: '0'
    },
    danmaku: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 47.5%;
  height: 6.5rem;
  text-align: center;
  float: left;
  img {
    border-radius: .4rem;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    position: relative;
    top: -.7rem;
    font-size: .5rem;
    line-height: .65rem;
    padding-left: .14rem;
    padding-right: .14rem;
  }
  div {
    width: 95%;
    margin-left: 2.5%;
    height: 1rem;
    position: relative;
    top: -1rem;
    border-bottom-left-radius: .4rem;
    border-bottom-right-radius: .4rem;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(transparent), to(#757575));
    background: -webkit-linear-gradient(transparent, #757575);
    background: -moz-linear-gradient(transparent, #757575);
    background: -ms-linear-gradient(transparent, #757575);
    background: -o-linear-gradient(transparent, #757575);
    background: linear-gradient(transparent, #757575);
    span {
      font-size: .45rem;
      vertical-align: middle;
      margin-left: .15rem;
      color: #fff;
    }
    :nth-child(3) {
      margin-left: 1rem;
    }
  }
}
</style>
