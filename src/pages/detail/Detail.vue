<template>
  <div class="wrapper">
    <div class="content">
      <DetailBanner
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
        :sightName="sightName"
      />
      <DetailHeader/>
      <DetailList :lists="categoryList"/>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailData (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted () {
    this.$axios.get('/static/mock/detail.json', {
      params: {
        id: this.$route.query.id
      }
    }).then(this.getDetailData)
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow scroll
    .content
      height: 500rem

</style>
