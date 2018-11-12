<template>
    <div class="recommend">
      <div class="title border-bottom">{{title}}</div>
      <ul class="content">
        <router-link class="pro-item border-bottom"
            v-for="item in proList"
            :key="(item.id+1)"
            tag="li"
            :to="{path: '/detail', query: {id: item.id}}">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <h3 class="item-title">{{item.title}}</h3>
            <p class="item-desc">{{item.desc}}</p>
            <span class="item-price">{{item.price}}</span>
          </div>
        </router-link>
      </ul>
      <div class="more border-bottom border-top">查看更多商品</div>
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
    this.$axios.get('https://easy-mock.com/mock/5bddc35f1706204c2bc9b479/hotRecommend')
      .then((res) => {
        this.proList = res.data
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
      width: 100%
      display: flex;
      cursor: pointer
      background-color: #fff;
      .item-img-wrapper
        width: 1.9rem
        height: 1.9rem
        margin-left: .2rem
        img
          width: 1.7rem
          height: 1.7rem
          margin: .1rem
          display: block
      .item-info
        width: 0
        flex: 1
        padding: .1rem
        .item-title
          margin: .15rem .1rem
          font-size: .3rem
          color: #333
        .item-desc
          color: $bgColor
          padding-left: .2rem
          padding-bottom: .1rem
        .item-price
          font-size .36rem
          padding-left: .2rem
          color $fontColor
  .more
    width: 100%
    height: .8rem
    line-height: .8rem
    text-align: center
    background-color: #fff;
    font-size: .30rem
    color: #333

</style>
