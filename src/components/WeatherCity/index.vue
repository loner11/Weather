<template>
  <article>
    <form action="" class="search">
      <input type="search" v-model="search" placeholder="请输入城市名">
    </form>
    <span>{{ search }}</span>

    <span id="refresh" @click="updateWeather()"><i class="fa fa-search fa-lg" aria-hidden="true"></i></span>

    <article id="current" class="current">
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
  </article>
</template>

<script>
  import Params from '../../store/api.js'

  export default {
    data () {
      return {
        search: 'dalian',
        weatherNowData: '',
        basic: {
          update: ''
        },
        now: {
          cond: {
            code: '999'
          },
          wind: ''
        },
        imageSrc: '../../../src/assets/weather-images/weather_icon/',
        param: 'now'
      }
    },

    mounted () {
      this.getNowData(this.search)
    },

    methods: {
      getNowData (cityName) {
        let api = Params.params.API
        let city = Params.params.City
        let key = Params.params.KEY

        this.axios.get(api + this.param + city + cityName + key)
          .then(response => {
            this.weatherNowData = response.data.HeWeather5
            this.basic = this.weatherNowData[0].basic
            this.basic.update = this.basic.update
            this.now = this.weatherNowData[0].now
            this.now.cond = this.now.cond
            this.now.wind = this.now.wind
          })
          .catch(error => {
            console.log(error)
          })
      },

      updateWeather () {
        this.getNowData(this.search)
        this.weatherNowData === '' ? this.$message({message: '当前天气数据更新失败', type: 'error', duration: 1000})
         : this.$message({message: '当前天气数据更新成功', type: 'success', duration: 1000})
      }
    }
  }
</script>
