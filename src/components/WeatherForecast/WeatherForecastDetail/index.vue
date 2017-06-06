<template>
  <article class="detail" v-if="weatherForecastData">
    <div v-for="detail in weatherForecastData">
      <section class="forecast-detail">
        <section class="alltime">
          <span>{{ detail.date }}</span>
          <span>最高温度 {{ detail.tmp.max }}&deg;</span>
          <span>最低温度 {{ detail.tmp.min }}&deg;</span>
          <span>相对湿度 {{ detail.hum }}%</span>
          <span>降水量 {{ detail.pcpn }}mm</span>
        </section>
        <section class="day-night">
          <span class="daytime">
            <span>白天天气</span>
            <img :src="imageSrc + detail.cond.code_d + '.png'" :alt="detail.cond.txt_d">
            <span>{{ detail.cond.txt_d }}</span>
            <span class="sun"><img src="../../../assets/weather-images/Sunrise.png" alt="sunrise.png"> {{ detail.astro.sr }}</span>
          </span>
          <span class="night">
            <span>夜间天气</span>
            <img :src="imageSrc + detail.cond.code_n + '.png'" :alt="detail.cond.txt_n">
            <span>{{ detail.cond.txt_n }}</span>
            <span class="moon"><img src="../../../assets/weather-images/Sunset.png" alt="Sunset.png"> {{ detail.astro.ss }}</span>
          </span>
        </section>
      </section>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'detail',

    data () {
      return {
        imageSrc: '../../../../src/assets/weather-images/weather_icon/',
      }
    },

    computed: {
      weatherForecastData () {
        return this.$store.state.forecast.forecastWeatherData
      }
    }
  }
</script>

