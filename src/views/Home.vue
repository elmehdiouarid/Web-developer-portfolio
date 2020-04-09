<template>
  <div class="contenthome">
    <h5 class="title1">Hello , I am </h5>
    <h1 class="titre2">Mehdi Ouarid</h1>
    <h4 class="titre3">A Web developer , From Morocco .</h4>
    <button type="button" class="btn btn-lg">Download " CV " </button>
    <img src="../assets/pngwing.com.png" class="backgd">
  </div>
</template>

<script>
// @ is an alias to /src

export default {

};
</script>
<style>
  .contenthome{
    text-align: left;
    background-color: #FAFAFA;
    width: calc(100% - 17rem);
    margin-left: 17rem;
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
  }
  .title1{
    position: relative;
    top: 28%;
    left: 10%;
    width: 90%;
    font-size: xx-large;
    color: #2EAEDE;
    letter-spacing: 1px;
  }
  .titre2{
    position: relative;
    top: 29%;
    left: 10%;
    width: 90%;
    font-size: 100px;
  }
  .titre3{
    position: relative;
    top: 28%;
    left: 10%;
    width: 90%;
  }
  .btn{
    position: relative;
    left: 10%;
    border: 1px solid #2EAEDE;
  }
  .btn:hover{
    background-color: #2EAEDE;
    color: #ffffff;
  }
  .backgd{
    position: relative;
    width: 295px;
    left: 55%;
  }
  @media (max-width: 768px){
    .contenthome{
      width: 100%;
      margin-left: 0;
      height: 94vh;
    }
    .titre2{
      font-size: 50px;
    }
    .btn{
      position: relative;
      margin-top: 10%;
    }
    .backgd{
      position: relative;
      width: 110px;
      left: 10%;
      margin-top: 60%;
      margin-left: 30px;
    }
  }
</style>
