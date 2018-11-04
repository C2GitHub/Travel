<template>
    <div class="city">
      <CityHeader/>
      <CitySearch :cities="cities"/>
      <CityList :hotCities="hotCities" :cities="cities"/>
      <CityAlphabet :capitals="capitals"/>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: null,
      hotCities: null,
      capitals: []
    }
  },
  mounted () {
    this.$axios.get('/api/mock/city.json')
      .then(this.getCityData)
  },
  methods: {
    getCityData (res) {
      if (res.data && res.data.ret === true) {
        this.cities = res.data.data.cities
        this.hotCities = res.data.data.hotCities
        for (let key in this.cities) {
          this.capitals.push(key)
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
