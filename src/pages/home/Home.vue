<template>
<div>
  <div>
    <Home-header/>
    <HomeSwiper/>
    <HomeIcon/>
    <HomeRecommend title="热卖推荐"></HomeRecommend>
    <HomeService></HomeService>
  </div>
</div>
</template>

<script>
import HomeHeader from './conponents/Header'
import HomeSwiper from './conponents/Swiper'
import HomeIcon from './conponents/Icon'
import HomeRecommend from './conponents/Recommend'
import HomeService from './conponents/Service'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeService
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  }

}
</script>

<style scoped>

</style>
