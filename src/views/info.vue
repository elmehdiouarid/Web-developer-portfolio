<template>
  <div class="info">
    <h1>{{ $route.params.id }}</h1>
    <img :src="$route.params.img" width="250px" height="250px" class="img">
    <h1>{{ $route.params.title }}</h1>
    <p>{{ $route.params.para }}</p>
  </div>
</template>

<script>
import data from '../data2.json';


export default {
  data() {
    return {
      Projets: data,
    };
  },
};
</script>
<style>
  .info{
    background-color: #FAFAFA;
    width: calc(100% - 17rem);
    margin-left: 17rem;
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
  }
</style>
