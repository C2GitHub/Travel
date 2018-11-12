<template>
  <div>
    <div class="banner">
      <img :src="bannerImg"
      @click="handleImgClick"
      >
      <div class="banner-info">
        <p class="pro-title">{{sightName}}</p>
        <div class="banner-number">
          <span class="iconfont arrow-icon">&#xe64a;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <Gallary
        @close="handleGallaryClose"
        v-show="isShow"
        :gallaryImgs="gallaryImgs"
      />
    </FadeAnimation>
  </div>
</template>

<script>
import Gallary from 'components/Gallary'
import FadeAnimation from 'components/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  methods: {
    handleGallaryClose () {
      this.isShow = false
    },
    handleImgClick () {
      this.isShow = true
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Gallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    width: 100%
    img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      padding: 0 .2rem
      background-color: #fff
      .pro-title
        flex: 1
        line-height: .4rem
        font-size: .3rem
      .banner-number
        float: right
        height: .4rem
        line-height: .4rem
        padding: 0 .2rem
        color: #fff
        background-color: rgba(0, 0, 0, .6);
        border-radius: .2rem
</style>
