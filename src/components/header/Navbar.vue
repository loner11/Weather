<template>
  <nav class="navbar">
    <ul>
      <li>
        <!--<img src="../../../src/assets/weather-images/weather_icon/100.png" alt="">-->
        <span class="city" @click="getCityName()">
          <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
          <span>{{ cityName }}</span>
        </span>
      </li>
      <li><router-link to="/now">首页</router-link></li>
      <li><router-link to="/forecast">天气预报</router-link></li>
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
        //cityName: ''
      }
    },

    mounted () {
      // this.getInitCityName()
    },

    computed: {
      cityName () {
        return this.$store.state.location.cityName
      }
    },

    methods: {
      getCityName () {
        return this.$store.dispatch('getCityName')
      },

      getInitCityName () {
        this.axios.get(Params.params.LOCATION_CITY_URL)
        .then(response => {
          this.cityName = response.data.city
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