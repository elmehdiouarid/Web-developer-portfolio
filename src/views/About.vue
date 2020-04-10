<template>
  <div class="contentabout">
    <h1 class="about">ABOUT</h1>
    <div class="ligne"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12 text-center">
          <img src="../assets/me.jpg" alt="Me" id="me" class="rounded-circle">
        </div>
        <div class="col-md-8 col-sm-12 text-center p-4">
          <h2 style="color: #2EAEDE; ">Who's this guy ?</h2><br>
          <p class="para">Hi , My names is El Mehdi Ouarid , I'm a Web Developer from Morocco
            , I have serious passion for Web Development .
            You find Here My hard and Soft skills
          </p>
        </div>
      </div>
      <div class="row p-4">
        <div class="col-md-6 col-sm-12 text-center">
          <h3 class="text-success text-center">Hard Skills</h3>
          <div class="bar" style="margin-top: 3%;">
            <div class="bar2" style="width: 90%;">
            <div class="nom">HTML</div>
            </div>
            <div class="text-right" style="margin-left: 1% ; margin-top: 1%">90%</div>
          </div>

          <div class="bar">
            <div class="bar2" style="width: 90%;">
              <div class="nom">CSS</div>
            </div>
            <div class="text-right" style="margin-left: 1% ; margin-top: 1%">90%</div>
          </div>

          <div class="bar">
            <div class="bar2" style="width: 80%;">
              <div class="nom">JS</div>
            </div>
            <div class="text-right" style="margin-left: 1% ; margin-top: 1%">80%</div>
          </div>

          <div class="bar">
            <div class="bar2" style="width: 75%;">
              <div class="nom">VUE JS</div>
            </div>
            <div class="text-right" style="margin-left: 1% ; margin-top: 1%">75%</div>
          </div>

          <div class="bar">
            <div class="bar2" style="width: 80%;">
              <div class="nom">PHP</div>
            </div>
            <div class="text-right" style="margin-left: 1% ; margin-top: 1%">80%</div>
          </div>

          <div class="bar">
            <div class="bar2" style="width: 70%; font-size: 15px;">
              <div class="nom">LARAVEL</div>
            </div>
            <div class="text-right" style="margin-left: 1% ; margin-top: 1%">70%</div>
          </div>

          <div class="bar">
            <div class="bar2" style="width: 90%; font-size: 15px;">
              <div class="nom"> BOOSTRAP</div>
            </div>
            <div class="text-right" style="margin-left: 1% ; margin-top: 1%">90%</div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <h3 class="text-primary text-center" >Soft Skills</h3>
          <div class="soft">
          <img src="../assets/communication.png" width="60px" height="60px">
          <h4 class="softskills" style="padding-top: 4%; padding-left: 5%">Communication</h4>
          </div>
          <div class="soft">
            <img src="../assets/team.png" width="60px" height="60px">
            <h4 class="softskills" style="padding-top: 4%; padding-left: 5%">TeamWork</h4>
          </div>
          <div class="soft">
            <img src="../assets/time.png" width="60px" height="60px">
            <h4 class="softskills" style="padding-top: 4%; padding-left: 5%">TimeManagement</h4>
          </div>
          <div class="soft">
            <img src="../assets/flex.png" width="60px" height="60px">
            <h4 class="softskills" style="padding-top: 4%; padding-left: 5%">Flexibility</h4>
          </div>
        </div>
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
    padding-top: 20px;
  }
  #me{
    width: 200px;
    height: 200px;
  }
  .para{
      font-size: 22px;
  }
  .bar{
    width: 400px;
    height: 26px;
    background-color:#eeeeee;
    display: flex;
    margin-bottom: 3%;
  }
  .bar2{
    height: 26px;
    background-color: #00a1a7;
  }
  .nom{
    height: 26px;
    background-color: #04c2c9;
    color: #ffffff;
    text-align: center;
    padding: 1%;
  }
  .soft{
    display: flex;
    padding-bottom: 2%;
    padding-left: 15%;
  }
  @media (max-width: 768px) {
    .contentabout {
      width: 100%;
      margin-left: 0;
      height:100%;
    }
    .ligne{
      left: 37%;
    }
    .container{
      padding: 0;
    }
    #me{
      width: 150px;
        height: 150px;
      margin-top: 10%;
    }
    .softskills{
      font-size: 20px;
      margin-top: 3%;
    }
    h3{
      padding-top: 10px;
    }
  }
</style>
