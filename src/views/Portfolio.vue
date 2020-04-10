<template>
  <div class="cotentportfolio">
    <h1 class="about">PORTFOLIO</h1>
    <div class="ligne"></div>
    <div class="container">
      <div class="row p-5">
        <div class="col-md-3 col-sm-12 text-center post" >
          <img src="../assets/projetTest.jpg" width="250px" height="250px" class="img">
          <a href="#" class="btn btn-primary readmore">Read More</a>
        </div>
        <div class="col-md-3 col-sm-12 text-center post">
          <img src="../assets/projet2.png" width="250px" height="250px" class="img">
          <a href="#" class="btn btn-primary readmore">Read More</a>
        </div>
        <div class="col-md-3 col-sm-12 text-center post">
          <img src="../assets/projet3.jpg" width="250px" height="250px" class="img">
          <a href="#" class="btn btn-primary readmore">Read More</a>
        </div>
        <div class="col-md-3 col-sm-12 text-center post">
          <img src="../assets/Projet4.jpg" width="250px" height="250px" class="img">
          <a href="#" class="btn btn-primary readmore">Read More</a>
        </div>
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
  .cotentportfolio {
    background-color: #FAFAFA;
    width: calc(100% - 17rem);
    margin-left: 17rem;
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
  }
  .about{
    text-align: center;
    padding-top: 50px;
  }
  .ligne{
    border-bottom: 2px solid #434651;
    width: 100px;
    position: relative;
    left: 46.4%;
  }
  .readmore{
    position: relative;
    top:-9rem;
    left: 4%;
    background-color: #2EAEDE;
    color: #000000;
    display: none;
  }
  .img{
    border: 0.5px solid #2EAEDE;
  }
  .post:hover .readmore{
    display: block;
    width: 150px;
    left: 20%;
  }
  .post:hover .img{
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    .cotentportfolio {
      width: 100%;
      margin-left: 0;
      height: 100%;
    }
    .ligne {
      left: 37%;
    }
    .post:hover .readmore{
      display: block;
      width: 150px;
      left: 28%;
      top: -11rem;
    }
  }
</style>
