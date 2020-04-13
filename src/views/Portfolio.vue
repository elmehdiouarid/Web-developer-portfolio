<template>
  <div class="cotentportfolio">
    <h1 class="about">PORTFOLIO</h1>
    <div class="ligne"></div>
    <div class="container">
      <div class="row p-4">
        <div v-for="projet in Projets" :key="projet.id" :title="projet.title"
             :para="projet.paragraph"
             class="col-md-6 col-sm-12 text-center post" >
          <img v-bind:src="projet.img" width="450px" height="260px" class="img">
          <router-link :to="{ name: 'info', params: { id: projet.id , title: projet.title
          , para: projet.paragraph , img: projet.img  } }">
          <a href="#" class="btn btn-primary text-white readmore">Read More</a>
          </router-link>
          <p class="h4 mb-2 like">
            <b-icon icon="heart-fill" variant="danger"></b-icon>
            234
          </p>
          <p class="h4 mb-2 watch">
            1256
            <b-icon icon="eye-fill" variant="success"></b-icon>
          </p>
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
  .post{
    margin-bottom: 30px;
  }
  .readmore{
    position: absolute;
    top:7rem;
    left: 30%;
    background-color: #2EAEDE;
    color: #000000;
    display: none;
  }
  .img{
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }
  .like{
    position: absolute;
    left: 10%;
    top: 88%;
    font-size: 20px;
  }
  .watch{
    position: absolute;
    left: 77%;
    top: 88%;
    font-size: 20px;
  }
  .post:hover .readmore{
    display: block;
    width: 150px;
    left: 37%;
  }
  .post:hover .img{
    opacity: 0.3;
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
      left: 31%;
      top: 70px;
    }
    .img{
      width: 90%;
    }
    .watch{
      left: 73%;
    }
  }
</style>
