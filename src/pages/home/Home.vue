<template>
<div>
  <div>
    <Home-header></Home-header>
    <HomeSwiper></HomeSwiper>
  </div>
</div>
</template>

<script>
import HomeHeader from './conponents/Header'
import HomeSwiper from './conponents/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }

}
</script>

<style scoped>

</style>
