<template>
<div>
  <div>
    <Home-header/>
    <HomeSwiper/>
    <HomeIcon/>
  </div>
</div>
</template>

<script>
import HomeHeader from './conponents/Header'
import HomeSwiper from './conponents/Swiper'
import HomeIcon from './conponents/Icon'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }

}
</script>

<style scoped>

</style>
