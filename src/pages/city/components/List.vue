<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
        </div>
        </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="city in hotCities" :key="city.id">
            <div class="button">{{city.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(items, key, index) in cities" :key="index">
        <div class="title border-topbottom" :ref="key">{{key}}</div>
        <div class="button-list">
          <div class="item border-bottom" v-for="(city) in items" :key="city.id">{{city.name}}</div>
        </div>
      </div>

      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  methods: {
    getLetter (letter) {
      this.letter = letter
    }
  },
  data () {
    return {
      letter: ''
    }
  },
  props: ['hotCities', 'cities'],
  mounted () {
    const wrapper = this.$refs.wrapper
    this.scroll = new BScroll(wrapper)
    this.bus.$on('sendLetter', this.getLetter)
  },
  watch: {
    letter () {
      if (this.letter && this.$refs[this.letter]) {
        const target = this.$refs[this.letter][0]
        this.scroll.scrollToElement(target)
        console.log(this.letter)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
  .border-topbottom, .border-bottom
    &:before
      color: #ccc
    &:after
      color: #ccc
  .list
    width: 100%
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .content
      max-width: 750px
      margin: 0 auto
      .title
        line-height: .54rem
        padding-left: .2rem
        font-size: .26rem
        color: #666
        background-color: #eee
      .button-list
        width: 100%
        overflow hidden
        padding: .1rem .6rem .1rem .1rem
        background-color: #fff;
        .button-wrapper
          float: left
          width: 33.3333%
          .button
            line-height: 1.5
            margin: .1rem
            border: 1px solid $bgColor
            border-radius: .1rem
            text-align: center
      .item
        width: 100%
        height: .74rem
        line-height: .74rem
        padding-left: .2rem
        background-color: #fff;

</style>
