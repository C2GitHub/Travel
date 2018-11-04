<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont">&#xe624;</span>
  </div>
  <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/游玩主题/经典</div>
  <router-link to="/city">
    <div class="header-right">北京 <span class="iconfont arrow-icon">&#xe64a;</span></div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
.header
  height: .86rem
  line-height: 0.86rem
  display: flex
  color: #fff
  background-color: $bgColor
  a
    color: #fff
  .header-left
    width: .64rem
    float: left
    text-align: center
  .header-input
    flex: 1
    height: .62rem
    line-height: .62rem
    color: #ccc
    margin: .12rem .1rem
    padding-left: 6px
    border-radius: .05rem
    background-color: #fff;
    span
      margin-right: .07rem
  .header-right
    float: right
    width: 1.24rem
    text-align: center
    .arrow-icon
      font-size: .24rem

</style>
