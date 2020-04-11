<template>
  <div class="cotentportfolio">
    <h1 class="about">PORTFOLIO</h1>
    <div class="ligne"></div>
    <div class="container">
      <div class="row p-5">
        <div v-for="projet in Projets" :key="projet.id" :title="projet.title"
             class="col-md-3 col-sm-12 text-center post" >
          <img v-bind:src="projet.img" width="250px" height="250px" class="img">
          <router-link :to="{ name: 'info', params: { id: projet.id } }">
          <a href="#" class="btn btn-primary readmore">Read More</a>
          </router-link>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import projetDta from '../data2.json';

export default {
  data() {
    return {
      Projets: projetDta,
    };
  },
  methods: {
    info(id) {
      console.log(id);
    },
  },
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
