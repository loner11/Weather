<template>
  <div id="weather">
    <navbar></navbar>
  </div>
</template>

<script>
  import Navbar from './components/Navbar/index.vue'

  export default {
    name: 'weather',

    components: {
      Navbar
    }
  }
</script>