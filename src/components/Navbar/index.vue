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
  export default {
    name: 'navbar',

    mounted () {
      this.$store.dispatch('getCityName')
    },

    computed: {
      cityName () {
        return this.$store.state.location.cityName
      }
    }
  }

</script>