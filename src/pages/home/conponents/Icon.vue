<template>
<div>
  <div class="icons">
    <swiper :options="swiperOption" ref="swiper">
      <swiper-slide v-for="(page, index) in renderPages" :key="index">
        <div class="icon" v-for="menu in page" :key="menu.id">
          <router-link to="#" class="nav-item">
            <span :class="['menu-img', 'n'+ (menu.id+1)]"></span>
            {{menu.msg}}
          </router-link>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Icon',
  data () {
    return {
      menus: [
        {
          id: 0,
          msg: '吸油烟机'
        },
        {
          id: 1,
          msg: '嵌入式灶具'
        },
        {
          id: 2,
          msg: '消毒柜'
        },
        {
          id: 3,
          msg: '蒸微一体机'
        },
        {
          id: 4,
          msg: '嵌入式蒸箱'
        },
        {
          id: 5,
          msg: '嵌入式烤箱'
        },
        {
          id: 6,
          msg: '微波炉'
        },
        {
          id: 7,
          msg: '水槽洗碗机'
        },
        {
          id: 8,
          msg: '燃气热水器'
        }
      ],
      swiperOption: {}
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    renderPages () {
      const pages = []
      this.menus.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
  @import "~@css/mixins.styl"
.icons
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 50%
  font-size: 14px
  border-top: 1px solid #cacaca
  border-bottom: 1px solid #cacaca
  .icon
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    overflow hidden
    .nav-item
      display: block
      width: 90%
      height: 0
      padding-bottom: 90%
      margin: .15rem auto
      text-align: center
      ellipsis()
      .menu-img
        display: block
        width: 100%
        height: 0
        padding-bottom: 75%
        margin: 0 auto
        background: url("/static/images/2018-09-04/menu_icon.png") no-repeat;
        -webkit-background-size: 1400%
        background-size: 1400%
      .menu-img.n1
        background-position: 0 0
      .menu-img.n2
        background-position: 11% 0
      .menu-img.n3
        background-position: 22.3% 0
      .menu-img.n4
        background-position: 33.5% 0
      .menu-img.n5
        background-position: 44.7% 0
      .menu-img.n6
        background-position: 56% 0
      .menu-img.n7
        background-position: 67.1% 0
      .menu-img.n8
        background-position: 78.4% 0
      .menu-img.n9
        background-position: 89.8% 0
    .nav-item:hover, .nav-item:active
      color: $fontColor
      .menu-img
        background-position-y:66.4%;
      .menu-img.n1
        background-position-y:66.5%;
      .menu-img.n2
        background-position-y:66.8%;
      .menu-img.n4
        background-position:33.6% 66.4%;
      .menu-img.n7
        background-position-y:65.8%;
      .menu-img.n8
        background-position-y:66.8%;
      .menu-img.n9
        background-position-y:66.8%;
</style>
