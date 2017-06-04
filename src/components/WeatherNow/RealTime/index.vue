<template>
  <article class="realtime">
    <section class="time" v-for="hourlyForecast in hourlyForecastData">
      <span>{{hourlyForecast.date.replace(/\d{4}-\d{2}-\d{2}/g, '')}}</span>
      <span>
        <img :src="imageSrc + hourlyForecast.cond.code + '.png'" :alt="hourlyForecast.cond.txt">
        <span>{{hourlyForecast.cond.txt}}</span>
      </span>
      <span>{{hourlyForecast.tmp}}&deg;</span>
    </section>
  </article>
</template>

<script>
  import Params from '../../../store/api.js'

  export default {
    data () {
      return {
        weatherHourlyData: '',
        hourlyForecastData: '',
        param: 'hourly',
        imageSrc: '../../../../src/assets/weather-images/weather_icon/',
      }
    },

    mounted () {
      this.getHourlyForecastData(this.$store.state.location.cityName)
    },

    methods: {
      getHourlyForecastData (cityName) {
        let api = Params.params.API
        let city = Params.params.City
        let key = Params.params.KEY

        this.axios.get(api + this.param + city + cityName + key)
          .then(response => {
            this.weatherHourlyData = response.data.HeWeather5
            this.hourlyForecastData = this.weatherHourlyData[0].hourly_forecast
          })
      }
    }
  }
</script>