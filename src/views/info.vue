<template>
  <div class="info">
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>

export default {
  props: ['id', 'title'],
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
