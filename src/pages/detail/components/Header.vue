<template>
    <div class="header">
      <div class="header-wrapper">
        <router-link to="/">
          <div class="header-back" v-show="isShowBtn">
            <span class="iconfont arrow-icon">&#xe624;</span>
          </div>
        </router-link>
        <div class="fix-wrapper">
          <div class="header-fixed" :style="opacityStyle" v-show="!isShowBtn">
            <span class="iconfont arrow-icon">&#xe624;</span>
            商品详情
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isShowBtn: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let scrollT = document.documentElement.scrollTop
      if (scrollT > 60) {
        this.isShowBtn = false
        if (scrollT <= 160) {
          let opacity = (scrollT - 60) / 100
          this.opacityStyle.opacity = opacity
        }
      } else {
        this.isShowBtn = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
.header
  position: absolute
  top: 0
  width: 100%
  .header-wrapper
    max-width: 750rem
    margin: 0 auto
    .header-back
      position: absolute
      left: .2rem
      top: .2rem
      width: .8rem
      height: .8rem
      line-height: .8rem
      border-radius: .4rem
      color: #fff
      text-align: center
      background-color: rgba(0, 0, 0, .3)
    .fix-wrapper
      position: fixed
      top:0
      left: 0
      right:0
      .header-fixed
        max-width: 750px
        height: .86rem
        line-height: .86rem
        margin: 0 auto
        color: #fff
        text-align: center
        background-color: $bgColor;
        span
          float: left
          display: block
          width: .8rem
          height: .86rem
</style>
