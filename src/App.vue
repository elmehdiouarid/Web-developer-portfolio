<template>
  <div id="app">
   <Global></Global>
  </div>
</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Courier Prime, monospace;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
<script>
import Global from './components/Global.vue';

export default {
  components: { Global },
  metaInfo: {
    title: 'OUARID EL MEHDI',
  },
  meta: [
    { charset: 'utf-8' },
    { content: 'http-equiv="X-UA-Compatible" content="ie=edge"' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
};
</script>
