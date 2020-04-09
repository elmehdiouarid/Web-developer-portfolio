<template>
  <div class="contentabout">
    <h1 class="about">ABOUT</h1>
    <div class="ligne"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12 text-center">
          <img src="../assets/me.jpg" alt="Me" id="me" class="rounded-circle">
        </div>
        <div class="col-md-8 col-sm-12 text-center">
          <h2 style="color: #2EAEDE; ">Who's this guy ?</h2><br>
          <p class="para">Hi , My names is El Mehdi Ouarid , I'm a Web Developer from Morocco
            , I have serious passion for Web Development .
            You find Here My hard and Soft skills
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">Soft Skils</div>
        <div class="col-md-6 col-sm-12">Hard Skils</div>
      </div>
    </div>
  </div>
</template>
<style>
  .contentabout {
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
  .container{
    padding-top: 70px;
  }
  #me{
    width: 200px;
    height: 200px;
  }
  .para{

  }
  @media (max-width: 768px) {
    .contentabout {
      width: 100%;
      margin-left: 0;
      height: 94vh;
    }
    .ligne{
      left: 37%;
    }
  }
</style>
