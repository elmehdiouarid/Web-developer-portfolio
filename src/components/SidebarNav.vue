<template>
  <div class="container">
    <div class="row">
    <div class="col-12 col-sm-3" id="nav">
      <img id="logo" src="../assets/logo1.png">
      <h1 id="titre">Hi , Everyone..</h1>
      <ul>
      <router-link to="/" tag="li" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/about" tag="li">
        <a>About</a>
      </router-link>
        <li><a href="#"> Portfolio</a></li>
        <li><a href="#"> Blog</a></li>
        <li><a href="#"> Contact</a></li>
      </ul>
      <h2 class="titre2">Follow Me :</h2>
        <a href="#">
          <img src="../assets/fb-icon.png" class="fb" style="width: 30px; height: 30px;">
        </a>
      <a href="#">
        <img src="../assets/insta-icon.png" class="in" style="width: 41px; height: 41px;">
      </a>
      <a href="#">
        <img src="../assets/Lin-icon.png" class="Link" style="width: 30px; height: 30px;">
      </a>
        <img src="../assets/gmail.png" class="gmail" style="width: 30px; height: 30px;">
      <h3 class="email">elmehdi.ouariid@gmail.com</h3>
      <h4 class="copy">copyright © 2020 - All rights reserved</h4>
    </div>
      <div class="col-12 col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarNav',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin: 0;
    padding: 0;
  }
  #nav{
    padding-right: 0;
    background-color: #24305E;
    min-height: 100vh;
    position: relative;
  }
  #logo{
    position: absolute;
    top: 5%;
    left: 32%;
    width: 120px;
    height: 120px;
  }
  #titre{
    position: absolute;
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    top: 23%;
    left: 20%;
    font-family: "Lao UI";
    letter-spacing: 2px;
  }
  ul{
    position: absolute;
    top: 30%;
    left: 27%;
    padding-top: 20px;
    list-style: none;
  }
  li{
    color: #ffffff;
    font-family: "Lao UI";
    font-size: 15px;
    font-weight: bold;
    width: 150px;
    height: 25px;
    margin-bottom: 40px;
    text-align: center;
    padding: 0px 5px 0px 5px;
  }
  li:hover {
    background-color: #F76C6C;
    border-radius: 5px;
    transition: 1s;
  }
  a{
    text-decoration: none;
    color: #ffffff;
    letter-spacing: 2px;
  }
  .titre2{
    position: absolute;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    top: 75%;
    left: 32%;
    font-family: "Lao UI";
    letter-spacing: 2px;
  }
  .fb{
    position: absolute;
    top: 85%;
    left: 30%;
  }
  .in{
    position: absolute;
    top: 84.20%;
    left: 45%;
  }
  .Link{
    position: absolute;
    top: 85%;
    left: 64%;
  }
  .gmail{
    position: absolute;
    top: 80%;
    left: 8%;
  }
  .email{
    position: absolute;
    color: #ffffff;
    font-size: 15px;
    font-family: "Lao UI";
    font-weight: bold;
    top: 80.50%;
    left: 20%;
  }
  .copy{
    position: absolute;
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    top: 97%;
    left: 13%;
  }
  @media (max-width: 550px) {
    #titre{
      display: none;
    }
    #logo{
      left:35%;
    }
    #nav{
      min-height: 50vh;
    }
    ul{
      top: 40%;
      left: 13%;
      display: flex;
    }
    .titre2{
      top: 60%;
      left: 35%;
    }
    .gmail{
      top: 75%;
      left: 20%;
    }
    .email{
      top: 76%;
      left: 30%;
    }
    li{
      width: auto;
    }
    .copy{
      display: none;
    }
  }
</style>
