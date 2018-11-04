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
  }

}
</script>

<style scoped>

</style>
