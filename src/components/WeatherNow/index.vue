<template>
  <article>
    <header class="anchor">
      <h3>
        <router-link to="/now">当前天气</router-link>
        <router-link to="/now/realtime">实时天气</router-link>
        <router-link to="/now/lifeindex">生活指数</router-link>
      </h3>
    </header>

    <article id="current" class="current" v-if="weatherNowData">
      <div class="current-top">
        <span>{{ basic.city }}</span>
        <span>{{ now.wind.dir }} {{ now.wind.sc }}</span>
      </div>
      <div class="current-center">
        <div class="temp">
          <span>{{now.tmp}}&deg;</span>
          <img :src="imageSrc + now.cond.code + '.png'" :alt="now.cond.txt">
        </div>
        <div class="refresh">
          <span id="refresh" @click="updateCurrentWeather()"><img src="../../../src/assets/weather-images/refresh.png" alt="refresh"></span>
          <span>{{basic.update.loc}}</span>
          <span>{{ now.cond.txt }}</span>
        </div>
      </div>
      <div class="current-bottom">
        <span>体感温度 {{now.fl}}&deg;</span>
        <span>湿度 {{ now.hum }}%</span>
        <span>降水量 {{ now.pcpn }}mm</span>
      </div>
    </article>

    <router-view></router-view>
  </article>
</template>

<script>
  export default {
    data () {
      return {
        cond: {
          code: '999'
        },
        imageSrc: '../../../src/assets/weather-images/weather_icon/'
      }
    },

    mounted () {
      this.$store.dispatch('getNowWeatherData', this.$store.state.location.cityName)
    },

    computed: {
      weatherNowData () {
        return this.$store.state.now.nowWeatherData
      },

      basic () {
        return this.$store.state.now.nowWeatherData[0]
      },

      now () {
        return this.$store.state.now.nowWeatherData[1]
      }
    },

    methods: {
      updateCurrentWeather () {
        this.$store.dispatch('getNowWeatherData', this.$store.getters.updatedCityName)
        this.weatherNowData === '' ? this.$message({message: '当前天气数据更新失败', type: 'error', duration: 1000})
         : this.$message({message: '当前天气数据更新成功', type: 'success', duration: 1000})
      }
    }
  }
</script>
