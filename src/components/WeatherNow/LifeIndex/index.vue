<template>
  <article class="life" v-if="suggestion">
    <div class="left">
      <span><i class="fa fa-bolt fa-lg" aria-hidden="true"></i>气象指数 {{suggestion.air.brf}}</span>
      <span><i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>舒适度指数 {{suggestion.comf.brf}}</span>
      <span><i class="fa fa-car fa-lg" aria-hidden="true"></i>洗车指数 {{suggestion.cw.brf}}</span>
      <span><i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>穿衣指数 {{suggestion.drsg.brf}}</span>
    </div>
    <div class="right">
      <span><i class="fa fa-hospital-o fa-lg" aria-hidden="true"></i>感冒指数 {{suggestion.flu.brf}}</span>
      <span><i class="fa fa-plane fa-lg" aria-hidden="true"></i>旅游指数 {{suggestion.sport.brf}}</span>
      <span><i class="fa fa-futbol-o fa-lg" aria-hidden="true"></i>运动指数 {{suggestion.trav.brf}}</span>
      <span><i class="fa fa-sun-o fa-lg" aria-hidden="true"></i>紫外线指数 {{suggestion.uv.brf}}</span>
    </div>
  </article>
</template>

<script>
  import Params from '../../../store/api.js'

  export default {
    data () {
      return {
        suggestionData: '',
        suggestion: {
          air: '',
          comf: '',
          cw: '',
          drsg: '',
          flu: '',
          sport: '',
          trav: '',
          uv: ''
        },
        param: 'suggestion'
      }
    },

    mounted () {
      this.getLifeIndexData(this.$store.state.location.cityName)
    },

    methods: {
      getLifeIndexData (cityName) {
        let api = Params.params.API
        let city = Params.params.City
        let key = Params.params.KEY

        this.axios.get(api + this.param + city + cityName + key)
          .then(response => {
            this.suggestionData = response.data.HeWeather5
            this.suggestion = this.suggestionData[0].suggestion
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>