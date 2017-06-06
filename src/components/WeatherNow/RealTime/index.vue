<template>
  <article class="realtime" v-if="hourlyForecastData">
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
  export default {
    data () {
      return {
        imageSrc: '../../../../src/assets/weather-images/weather_icon/'
      }
    },

    mounted () {
      this.$store.dispatch('getRealTimeData', this.$store.state.location.cityName)
    },

    computed: {
      hourlyForecastData () {
        return this.$store.state.realTime.realTimeData
      }
    }
  }
</script>