<template>
  <ul class="list" ref="list">
    <li class="item"
        v-for="(item, index) in capitals"
        :key="index"
        @click="handleLetterClick"
        @touchstart="handleTouchtart"
        @touchmove="handleTouchmove"
        @touchend="handleTouchend"
    >{{item}}</li>
  </ul>
</template>

<script>

export default {
  name: 'CityList',
  data () {
    return {
      isTouch: false,
      elHeight: 20,
      topHeight: 0,
      end: 0
    }
  },
  methods: {
    handleLetterClick (e) {
      let letter = e.target.innerText
      this.bus.$emit('sendLetter', letter)
    },
    handleTouchtart (e) {
      this.isTouch = true
    },
    handleTouchmove (e) {
      this.end = e.touches[0].clientY - 80
      if (this.isTouch) {
        let num = Math.floor((this.end - this.topHeight) / this.elHeight)
        if (num > 0 && num !== Infinity) {
          this.bus.$emit('sendLetter', this.capitals[num - 1])
        }
      }
    },
    handleTouchend (e) {
      this.isTouch = false
      this.start = 0
      this.end = 0
    }
  },
  props: ['capitals'],
  mounted () {
    if (this.$refs.list.children[0]) {
      this.topHeight = this.$refs.list.offsetTop
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      height: .4rem
      line-height .4rem
      text-align: center
      color: $bgColor

</style>
