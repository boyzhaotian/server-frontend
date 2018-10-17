<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo-sky-blue.png"> -->
    <Slider/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider'
export default {
  name: 'home',
  components: {
    Slider
  }
}
</script>
