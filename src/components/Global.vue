<template>
  <div>
    <div class="vertical-nav " id="sidebar">
      <div class="py-4 px-3 mb-4 font-italic" >
        <div class="media d-flex align-items-center" style="padding-top: 15px">
          <img src="../assets/logo1.png" alt="..." width="65"
               class="mr-3 rounded-circle img-thumbnail shadow-sm">
          <div class="media-body">
            <h4 class="m-0">Ouarid El Mehdi</h4>
            <p class="mb-0" style="color: #2EAEDE;">Web developer</p>
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
        <p class=" font-weight-bold font-italic
        text-uppercase px-3 small py-4 mb-0" id="follow" style="color: #434651;">
          Follow Me:
        </p>
      <div class="template">
        <img class="reseauS" src="../assets/reseau.png" width="300" height="300px">
        <h4 class="lien"><a class="styleLien" href="#">/elmehdi.Ouarid</a></h4>
        <h4 class="lien2"><a class="styleLien" href="#">/elmehdi.Ouarid</a></h4>
        <h4 class="lien3"><a class="styleLien" href="#">+212682361632</a></h4>
        <h4 class="lien4"><a class="styleLien" href="#">/Mehdi.Ouarid</a></h4>
        <h4 class="lien5"><a class="styleLien" href="#">/elmehdi.ouariid</a></h4>
        <h4 class="lien6"><a class="styleLien" href="#">/elmehdi.ouarid</a></h4>
      </div>
    </div>
    <!-- End vertical navbar -->


    <!-- Page content holder -->
    <div class="page-content" id="content">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container font-italic text-uppercase font-weight-bold" style="color:#434651;">
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
          <b-icon icon="justify" style="color: #434651 !important;"></b-icon>
        </button>
          Hi , Everyone
          <b-icon icon="laptop" style="color: #434651 !important;"></b-icon>
        </div>
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
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
    background-color: #FAFAFA ;
  }
  h4{
    font-size: 17px;
    font-weight: bold;
    color: #434651;
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
      color: #434651;
      letter-spacing: 2px;
  }
  .page-content {
    width: calc(100% - 17rem);
    margin-left: 17rem;
    transition: all 0.4s;
  }
  .nvitem:hover {
    background-color: #2EAEDE;
    border-radius: 6px;
    transition: 1s;
  }
  #follow{
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
    margin-top: -1rem;
  }
  .navbar{
    background-color: #FAFAFA !important;
     width: 40%;
     margin-left: 30%;
    display: none;
  }
  .nvitem2{
    font-size: 15px;
    font-weight: bold;
  }
  .nvlink2{
    color: #434651;
    margin-right: 15px;
    font-family: "Lao UI";
  }
  .reseauS{
    margin-left: -1.5rem;
    margin-top: -1rem;
  }
  .template{
    position: absolute;
  }
  .lien{
    position: relative;
    font-size: 13px;
    left: 96px;
    top: -17.70rem;
  }
  .lien2{
    position: relative;
    font-size: 13px;
    left: 96px;
    top: -16.40rem;
  }
  .lien3{
    position: relative;
    font-size: 13px;
    left: 96px;
    top: -14.90rem;
  }
  .lien4{
    position: relative;
    font-size: 13px;
    left: 96px;
    top: -13.50rem;
  }
  .lien5{
    position: relative;
    font-size: 13px;
    left: 96px;
    top: -11.90rem;
  }
  .lien6{
    position: relative;
    font-size: 13px;
    left: 96px;
    top: -10.60rem;
  }
  .styleLien{
    text-decoration: none;
    color: #ffffff;
  }
  .nvlink2:hover {
    border-bottom: 2px solid #2EAEDE;
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
      display: block;
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
    background: #ffffff;
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
