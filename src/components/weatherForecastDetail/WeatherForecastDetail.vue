<template>
  <article class="detail" v-if="weatherForecastData">
    <div v-for="detail in weatherForecastData[0].daily_forecast">
      <section class="forecast-detail">
        <span class="alltime">
          <span>最高温度 {{ detail.tmp.max }}&deg;</span>
          <span>最低温度 {{ detail.tmp.min }}&deg;</span>
          <span>相对湿度 {{ detail.hum }}%</span>
          <span>降水量 {{ detail.pcpn }}mm</span>
          <span>日期 {{ detail.date }}</span>
        </span>
        <span class="daytime">
          <span>白天天气</span>
          <img :src="imageSrc + detail.cond.code_d + '.png'" :alt="detail.cond.txt_d">
          <span>{{ detail.cond.txt_d }}</span>
          <span>日出 {{ detail.astro.sr }}</span>
          <span>日落 {{ detail.astro.ss }}</span>
        </span>
        <span class="night">
          <span>夜间天气</span>
          <img :src="imageSrc + detail.cond.code_n + '.png'" :alt="detail.cond.txt_n">
          <span>{{ detail.cond.txt_n }}</span>
          <span>月出 {{ detail.astro.mr }}</span>
          <span>月落 {{ detail.astro.ms }}</span>
        </span>
      </section>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'detail',

    data () {
      return {
        imageSrc: '../../../src/assets/weather-images/weather_icon/',
      }
    },

    computed: {
      weatherForecastData () {
        return this.$store.state.forecast.forecastWeatherData
      }
    }
  }
</script>

<style lang="scss">

  @import './weatherForecastDetail.scss';

</style>

