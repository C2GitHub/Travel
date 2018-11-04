<template>
  <div class="recommend">
    <div class="title border-bottom">好礼不断</div>
    <ul class="content">
      <li class="pro-item" v-for="item in proList" :key="(item.id+1)">
        <a href="/">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <h3 class="item-title">{{item.title}}</h3>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    title: {
      type: String,
      default: 'test'
    }
  },
  data () {
    return {
      proList: null
    }
  },
  created () {
    this.$axios.get('https://easy-mock.com/mock/5bddc35f1706204c2bc9b479/moreService')
      .then((res) => {
        this.proList = res.data
      })
      .catch(error => {
        throw error.message
      })
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@css/varibles.styl"
  @import "~@css/mixins.styl"
  .recommend
    width: 100%;
    margin: .1rem 0
    .title
      width: 100%
      height: .8rem
      line-height: .8rem
      padding-left: .4rem
      background-color: #eee;
      font-size: .34rem
      font-weight: 600
    .content
      .pro-item
        width: 50%
        float left
        overflow hidden
        background-color: #fff;
        a
          display: block
          .item-img-wrapper
            width: 90%
            margin: 0 auto
            img
              display: block
              border-radius 8px
              border: 1px solid $fontColor
              width: 90%
              margin: .2rem auto
          .item-info
            padding: .1rem
            text-align center
            .item-title
              margin: .16rem 0
              font-size: .3rem
              color: #333
            .item-desc
              color: $bgColor
              padding-bottom: .3rem

</style>
