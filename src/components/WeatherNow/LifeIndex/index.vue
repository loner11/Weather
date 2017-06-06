<template>
  <article class="life" v-if="suggestionData">
    <section v-for="suggestion in suggestionData">
      <span class="suggestion-title">{{suggestion[0]}}</span>
      <span class="suggestion-content">{{suggestion[1]}}</span>
    </section>
  </article>
</template>

<script>
  export default {
    data () {
      return {
        imageSrc: '../../../../src/assets/weather-images/'
      }
    },

    mounted () {
      this.$store.dispatch('getLifeIndexData', this.$store.state.location.cityName)
    },

    computed: {
      suggestionData () {
        return this.$store.state.lifeIndex.lifeIndexData
      }
    }
  }
</script>