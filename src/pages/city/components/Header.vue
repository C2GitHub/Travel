<template>
  <div class="header">
    <div class="header-left" @click="goBack">
      <a href="javascript:;">
        <span class="iconfont">&#xe624;</span>
      </a>
    </div>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
  .header
    height: .86rem
    width: 100%
    line-height: .86rem
    color: #fff
    font-size: .32rem
    text-align: center
    background-color: $bgColor
    .header-left
      width: 1rem
      height: .86rem
      float: left
      text-align: center
      a
        display: block
        width: 100%
        height: 100%
        color: #fff

</style>
