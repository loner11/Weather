<template>
  <div>
    <article class="forecast" v-if="weatherForecastData">
      <router-link to='/forecast/detail'>更多 <i class="fa fa-angle-double-right" aria-hidden="true"></i></router-link>

      <div v-for="forecastList in weatherForecastData[0].daily_forecast">
        <section class="forecast-list">
            <span class="date">{{ forecastList.date.replace(/^\d{4}-/g, '') }}</span>
            <span class="cond">
              <img :src="imageSrc + forecastList.cond.code_d + '.png'" :alt="forecastList.cond.txt_d">
              <span>{{ forecastList.cond.txt_d }}</span>
            </span>
            <span class="tmp">
              <span>{{ forecastList.tmp.max }}&deg;</span>
              <span>&nbsp;/&nbsp;</span>
              <span>{{ forecastList.tmp.min }}&deg;</span>
            </span>
            <span class="wind">{{ forecastList.wind.dir }} {{ forecastList.wind.sc }}</span>
        </section>
      </div>

    </article>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'forecast',

    data () {
      return {
        imageSrc: '../../../src/assets/weather-images/weather_icon/',
        forecastList: {
          cond: {
            code_d: 999
          }
        }
      }
    },

    mounted () {
      this.$store.dispatch('getForecastWeatherData', this.$store.getters.updatedCityName)
    },

    computed: {
      weatherForecastData () {
        return this.$store.state.forecast.forecastWeatherData
      }
    }
  }
</script>