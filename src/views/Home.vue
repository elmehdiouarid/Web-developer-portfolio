<template>
  <div class="contenthome">
    <div class="row home-row justify-content-around">
      <div class="col-md-8 p-2">
        <h5 class="title1">Hello , I am </h5>
        <h1 class="titre2">Mehdi Ouarid</h1>
        <h4 class="titre3">A Web developer , From Morocco .</h4>
        <button type="button" class="btn mt-5">Download " CV " </button>
      </div>
      <div class="col-md-4 p-3">
        <img src="../assets/pngwing.com.png" class="backgd">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

};
</script>
<style>
  .contenthome{
    background-color: #FAFAFA;
    width: calc(100% - 17rem);
    margin-left: auto;
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    justify-content: center;
    padding-top: 20vh;
    justify-content: spa;
  }
  .home-row {
    height: fit-content;
    align-items: center;
  }
  .title1{
    font-size: xx-large;
    color: #2EAEDE;
    letter-spacing: 1px;
    white-space: nowrap;
  }
  .titre2{
    white-space: nowrap;
    font-size: 5.5vw;
    transition: linear .3s;
  }
  .btn{
    border: 1px solid #2EAEDE;
    color: #2EAEDE;
  }
  .btn:hover{
    background-color: #2EAEDE;
    color: #ffffff;
  }
  .backgd{
    width: 100%;
    max-width: 295px;
    margin: auto;
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
