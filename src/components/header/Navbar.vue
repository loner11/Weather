<template>
  <nav class="navbar">
    <ul>
      <li>
        <span class="city">
          <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
          <span>{{ cityName }}</span>
        </span>
      </li>
      <li><router-link to="/now">首页</router-link></li>
      <li><router-link to="/forecast">天气预报</router-link></li>
      <li><router-link to="/city">城市天气</router-link></li>
    </ul>

    <router-view></router-view>
  </nav>
</template>

<script>
  import Params from '../../store/api.js'

  export default {
    name: 'navbar',

    data () {
      return {
        cityName: this.$store.state.location.cityName,
      }
    },

    mounted () {
      this.getCityName()
    },

    computed: {
      cityName () {
        return this.$store.getters.updatedCityName
      }
    },

    methods: {
      getCityName () {
        this.axios.get(Params.params.LOCATION_CITY_URL)
          .then(response => {
            this.cityName = response.data.city
            return this.$store.dispatch('getCityName', response.data.city)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }

</script>

<style lang="scss">

  @import './navbar.scss';

</style>