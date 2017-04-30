<template>
  <div class="forecast">
    {{ weatherForecastData }}
  </div>
</template>

<script>
  export default {
    name: 'forecast',

    data () {
      return {
        weatherForecastData: ''
      }
    },

    mounted () {
      this.getForecastData()
    },

    methods: {
      getForecastData () {
        this.axios.get('https://free-api.heweather.com/v5/forecast?city=dalian&key=5a222b0e8b9849b7857267228061632b')
          .then(response => {
            this.weatherForecastData = response.data.HeWeather5
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss">

  @import './weatherForecast.scss';

</style>