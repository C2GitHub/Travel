<template>
  <div class="wrapper" @click="handleCloseClick">
    <div class="img-box">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          v-for="(img, index) in gallaryImgs"
          :key="index+0">
          <img :src="img" class="swiper-img" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  props: {
    gallaryImgs: {
      type: Array
    }
  },
  methods: {
    handleCloseClick () {
      this.$emit('close')
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow: inherit
.wrapper
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  top:0
  tight: 0
  bottom: 0
  left: 0
  overflow hidden
  width: 100%
  max-width: 750px
  z-index: 99
  background-color: #000
  .img-box
    height: 0
    width: 100%
    padding-bottom: 100%
    background-color: #fff
    .swiper-img
      width: 100%
  .swiper-pagination
    bottom: -1rem
    color: #fff

</style>
