<template>
  <div>
    <Card
      :img="item.img"
      :title="item.title"
      :play="item.play"
      :danmaku="item.danmaku"
      v-for="(item, index) in list"
      :key="index"
    >
    </Card>
  </div>
</template>

<script>
import Card from '@/pages/public/card.vue'
export default {
  name: 'card',
  components: {
    Card
  },
  data () {
    return {
      list: [
        {
          img: '//i1.hdslb.com/bfs/archive/230af6e2eb64f5c07e0ff54dd75a868904b4b446.jpg',
          title: '让女朋友穿丝袜会同意吗？',
          play: '41.7万',
          danmaku: '742'
        },
        {
          img: '//i1.hdslb.com/bfs/archive/79539f09da7c7584ad84bbd6354332990c6641d3.jpg',
          title: '上班玩游戏，同事全是萌妹子！居然还有这样的公司！你想去么？想去就快点进来看看吧！',
          play: '38.9万',
          danmaku: '2662'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/31338b345cf533e7a8dd7fbcd9fd0d384efacd24.jpg',
          title: '当一群青铜中混入一个王者，对比太过惨烈了！',
          play: '39.4万',
          danmaku: '376'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/d43957b5fc16617c432dd6aa7d572b47829e31a9.jpg',
          title: '灵魂调教师：如何让动物跟着你开口说话？！',
          play: '10.5万',
          danmaku: '1035'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/e0cec1b7e4c907953537417819c7176d5ba16896.jpg',
          title: '开口跪！！被校长叫到全校演唱的同学！窒息操作！',
          play: '25.5万',
          danmaku: '743'
        },
        {
          img: '//i1.hdslb.com/bfs/archive/fec9ff42484e017e4c108e73644399f6199ef73d.jpg',
          title: '请问这么可爱粘人的小猫咪哪里可以领到？',
          play: '20.8万',
          danmaku: '334'
        },
        {
          img: '//i1.hdslb.com/bfs/archive/230af6e2eb64f5c07e0ff54dd75a868904b4b446.jpg',
          title: '让女朋友穿丝袜会同意吗？',
          play: '41.7万',
          danmaku: '742'
        },
        {
          img: '//i2.hdslb.com/bfs/archive/e7525176b0962d6594d620a7a31cc5896146238f.jpg',
          title: '莉哥直播唱国歌被虎牙‘封杀’。',
          play: '43.9万',
          danmaku: '745'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/31338b345cf533e7a8dd7fbcd9fd0d384efacd24.jpg',
          title: '当一群青铜中混入一个王者，对比太过惨烈了！',
          play: '39.4万',
          danmaku: '376'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/d43957b5fc16617c432dd6aa7d572b47829e31a9.jpg',
          title: '灵魂调教师：如何让动物跟着你开口说话？！',
          play: '10.5万',
          danmaku: '1035'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/e0cec1b7e4c907953537417819c7176d5ba16896.jpg',
          title: '开口跪！！被校长叫到全校演唱的同学！窒息操作！',
          play: '25.5万',
          danmaku: '743'
        },
        {
          img: '//i1.hdslb.com/bfs/archive/fec9ff42484e017e4c108e73644399f6199ef73d.jpg',
          title: '请问这么可爱粘人的小猫咪哪里可以领到？',
          play: '20.8万',
          danmaku: '334'
        },
        {
          img: '//i1.hdslb.com/bfs/archive/230af6e2eb64f5c07e0ff54dd75a868904b4b446.jpg',
          title: '让女朋友穿丝袜会同意吗？',
          play: '41.7万',
          danmaku: '742'
        },
        {
          img: '//i2.hdslb.com/bfs/archive/e7525176b0962d6594d620a7a31cc5896146238f.jpg',
          title: '莉哥直播唱国歌被虎牙‘封杀’。',
          play: '43.9万',
          danmaku: '745'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/31338b345cf533e7a8dd7fbcd9fd0d384efacd24.jpg',
          title: '当一群青铜中混入一个王者，对比太过惨烈了！',
          play: '39.4万',
          danmaku: '376'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/d43957b5fc16617c432dd6aa7d572b47829e31a9.jpg',
          title: '灵魂调教师：如何让动物跟着你开口说话？！',
          play: '10.5万',
          danmaku: '1035'
        },
        {
          img: '//i0.hdslb.com/bfs/archive/e0cec1b7e4c907953537417819c7176d5ba16896.jpg',
          title: '开口跪！！被校长叫到全校演唱的同学！窒息操作！',
          play: '25.5万',
          danmaku: '743'
        },
        {
          img: '//i1.hdslb.com/bfs/archive/fec9ff42484e017e4c108e73644399f6199ef73d.jpg',
          title: '请问这么可爱粘人的小猫咪哪里可以领到？',
          play: '20.8万',
          danmaku: '334'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  margin-left: 1.25%;
}
</style>
