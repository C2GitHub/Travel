<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="swiper">
      <!-- slides -->
      <swiper-slide v-for="img in imgLists" :key="img.id"><a href="#"><img :src="img.imgUrl"  class="swiper-img" alt=""></a></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 5000,
        loop: true
      },
      imgLists: null
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    let _this = this
    this.$axios('/getBannerImg')
      .then(function (res) {
        if (res.statusText === 'OK') {
          _this.imgLists = res.data
        }
      }).catch(function (error) {
        throw error.message
      })
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff;
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 45.56%
    .swiper-img
      width: 100%
</style>
