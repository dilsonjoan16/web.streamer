<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Home2/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home2 from '@/components/Home2.vue'

export default {
  name: 'Home',
  components: {
    Home2
  }
}
</script>

