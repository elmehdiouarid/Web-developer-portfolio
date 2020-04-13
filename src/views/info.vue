<template>
  <div class="info p-3">
    <h1 class="titr">{{ $route.params.title }}</h1>
    <img :src="$route.params.img" width="400px" height="300px" class="image" >
    <p class="text-left p-3">{{ $route.params.para }}</p>
  </div>
</template>

<script>

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
  @media (max-width: 768px) {
    .info {
      width: 100%;
      margin-left: 0;
      height: 100%;
    }
    .image{
      width: 380px;
    }
    .titr{
      padding-top: 10%;
      font-size: 27px;
      text-align: left;
    }
  }
</style>
