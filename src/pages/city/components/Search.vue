<template>
 <div class="search-wrapper">
   <div class="search">
     <input v-model="keyword" type="text"  class="search-input" placeholder="输入城市名或拼音">
   </div>
   <div class="search-content" ref="wrapper"  v-show="!!keyword.length">
     <ul>
       <li
         v-for="(item, index) in lists"
         :key="index"
         @click="handleCityClick(item)" class="border-bottom">
         {{item}}
       </li>
       <li class="border-bottom" v-show="!lists.length">没有找到匹配数据</li>
     </ul>
   </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Header',
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.keyword = ''
      this.$router.push('/')
    }
  },
  data () {
    return {
      keyword: '',
      lists: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.lists = []
        return
      }
      let result = []
      this.timer = setTimeout(() => {
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value.name)
            }
          })
        }
      }, 1)
      this.lists = result
    }
  },
  mounted () {
    const wrapper = this.$refs.wrapper
    const scroll = new BScroll(wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
.search-wrapper
  overflow hidden
  .search
    height: .72rem
    width: 100%
    line-height: .72rem
    color: #fff
    font-size: .32rem
    text-align: center
    padding: 0 .1rem
    background-color: $bgColor
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      margin: .05rem 0
      padding: 0 .2rem
      border-radius 6px
      font-size: .26rem
  .search-content
    overflow: hidden;
    position: absolute
    top: 1.58rem
    left:0
    right: 0
    bottom: 0
    max-width: 750px
    margin: 0 auto
    z-index: 1
    background-color: #f4f4f4
    ul
      li
        line-height: .6rem
        padding-left: .2rem
        fon-size: .26rem
        color: #666
</style>
