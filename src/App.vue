<template>
  <div id="app">
    <Global></Global>
  </div>
</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,500;0,600;0,700;1,500;1,600;1,700&display=swap');
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Roboto', sans-serif;
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
