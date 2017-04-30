<template>
  <article>
    <header class="anchor">
      <h3>
        <a href="#current">当前天气</a>
        <a href="#realtime">实时天气</a>
        <a href="#life">生活指数</a>
      </h3>
    </header>

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
          <span id="refresh" @click="click()"><i class="fa fa-refresh fa-lg" aria-hidden="true"></i></span>
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

    <real-time></real-time>
    <life-index></life-index>
  </article>
</template>

<script>
  import Params from '../../store/api.js'
  import RealTime from '../realTime/RealTime.vue'
  import LifeIndex from '../LifeIndex/LifeIndex.vue'

  export default {
    data () {
      return {
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
        city: this.$store.state.location.cityName,
        param: 'now'
      }
    },

    mounted () {
      this.getNowData()
    },

    methods: {
      getNowData () {
        let api = Params.params.API
        let city = Params.params.City
        let key = Params.params.KEY

        this.axios.get(api + this.param + city + this.city + key)
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

      click () {
        this.getNowData()
        this.weatherNowData === '' ? this.$message({message: '数据更新失败', type: 'error', duration: 1000})
         : this.$message({message: '数据更新成功', type: 'success', duration: 1000})
      }
    },

    components: {
      RealTime, LifeIndex
    }
  }
</script>

<style lang="scss">

  @import './weatherNow.scss';

</style>
