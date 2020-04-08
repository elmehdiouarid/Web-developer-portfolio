<template>
  <div>
    <div class="vertical-nav " id="sidebar">
      <div class="py-4 px-3 mb-4" >
        <div class="media d-flex align-items-center" style="padding-top: 15px">
          <img src="../assets/logo1.png" alt="..." width="65"
               class="mr-3 rounded-circle img-thumbnail shadow-sm">
          <div class="media-body">
            <h4 class="m-0">Ouarid El Mehdi</h4>
            <p class="mb-0" style="color: #F76C6C;">Web developer</p>
          </div>
        </div>
      </div>


      <ul class="nav flex-column mb-0 side" >
        <router-link to="/" tag="li" class="nav-item nvitem">
          <a class="nav-link font-italic nvlink " >
            Home
          </a>
        </router-link>
        <router-link to="/about" tag="li" class="nav-item nvitem">
          <a class="nav-link font-italic nvlink " >
            About
          </a>
        </router-link>
        <router-link to="/portfolio" tag="li" class="nav-item nvitem">
          <a class="nav-link font-italic nvlink " >
            Portfolio
          </a>
        </router-link>
        <router-link to="/Blog" tag="li" class="nav-item nvitem">
          <a class="nav-link font-italic nvlink " >
            Blog
          </a>
        </router-link>
        <router-link to="/contact" tag="li" class="nav-item nvitem">
          <a class="nav-link font-italic nvlink " >
            Contact
          </a>
        </router-link>
      </ul>

        <p class="text-white font-weight-bold text-uppercase px-3 small py-4 mb-0" id="follow">
          Follow Me:
        </p>
        <p style="font-size: 13px; color: white; font-weight: bold">
          <img src="../assets/gmail.png"
               style="width: 30px; height: 30px; margin-left: 10px">
          elmehdi.ouariid@gmail.com
        </p>
        <p style="font-size: 13px; color: white; font-weight: bold">
          <img src="../assets/fb-icon.png" style="width: 30px; height: 30px; margin-left: 10px">
          /elmehdi.ouarid
        </p>
        <p style="font-size: 13px; color: white; font-weight: bold">
        <img src="../assets/insta-icon.png" style="width: 38px; height: 38px; margin-left: 5px">
        /elmehdi.ouariid
      </p>
        <p style="font-size: 13px; color: white; font-weight: bold">
          <img src="../assets/Lin-icon.png" style="width: 30px; height: 30px; margin-left: 10px">
          /elmehdiouarid
        </p>
        <p style="font-size:12px; color: #F76C6C; padding-left: 10px; padding-top: 70px ">
          © 2020 - ElMehdi Ouarid Portfolio
        </p>
    </div>
    <!-- End vertical navbar -->


    <!-- Page content holder -->
    <div class="page-content p-3" id="content">
      <nav class="navbar navbar-expand-lg  ">
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style="justify-content: center;">
          <ul class="navbar-nav ">
            <router-link to="/" tag="li" class="nav-item nvitem2">
              <a class="nav-link nvlink2" >Home</a>
            </router-link>
            <router-link to="/about" tag="li" class="nav-item nvitem2">
              <a class="nav-link nvlink2" >About</a>
            </router-link>
            <router-link to="/portfolio" tag="li" class="nav-item nvitem2">
              <a class="nav-link nvlink2" >Portfolio</a>
            </router-link>
            <router-link to="/blog" tag="li" class="nav-item nvitem2">
              <a class="nav-link nvlink2" >Blog</a>
            </router-link>
            <router-link to="/contact" tag="li" class="nav-item nvitem2">
              <a class="nav-link nvlink2">Contact</a>
            </router-link>
          </ul>
        </div>
      </nav>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
};

</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .vertical-nav {
    min-width: 17rem;
    width: 17rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
    background-color: #24305E !important;
  }
  h4{
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
  }
  .side{
    text-align: center;
    padding-top: 15px;
    padding-left: 55px;
    padding-bottom: 15px;
  }
  .nvitem{
    font-size: 16px;
    font-weight: bold;
    width: 150px;
    text-align: center;
    margin-bottom: 10px
  }
  .nvlink{
      color: #ffffff;
      letter-spacing: 2px;
  }
  .page-content {
    width: calc(100% - 17rem);
    margin-left: 17rem;
    transition: all 0.4s;
  }
  .nvitem:hover {
    background-color: #F76C6C;
    border-radius: 6px;
    transition: 1s;
  }
  #follow{
    text-align: center;
    font-size: 18px;
    font-family: Courier Prime, monospace;
    padding-top: 10px;
  }
  .navbar{
     background-color: #A8D0E6;
     border-radius: 60px;
     width: 40%;
     margin-left: 30%;
  }
  .nvitem2{
    font-size: 15px;
    font-weight: bold;
  }
  .nvlink2{
    color: #24305E;
    margin-right: 15px;
    font-family: "Lao UI";
  }
  .nvlink2:hover {
    border-top: 2px solid #F76C6C;
  }
  /* for toggle behavior */

  #sidebar.active {
    margin-left: -17rem;
  }

  #content.active {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -17rem;
    }
    #sidebar.active {
      margin-left: 0;
    }
    .navbar{
      border-radius: 0px;
      width: 100%;
      margin-left: 0;
    }
    #content {
      width: 100%;
      margin: 0;
    }
    #content.active {
      margin-left: 17rem;
      width: calc(100% - 17rem);
    }
  }
  body {
    background: #599fd9;
    background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
    background: linear-gradient(to right, #599fd9, #c2e59c);
    min-height: 100vh;
    overflow-x: hidden;
  }
  .text-uppercase {
    letter-spacing: 0.1em;
  }

  .text-gray {
    color: #aaa;
  }
</style>
