<template>
  <div class="contact">
    <img class="imagec" src="../assets/img-01.png">
    <h1 class="font-italic titrec">Contact Me</h1>
    <form class="contactme">
      <div class="form-group">
        <label for="name">Name :</label>
        <input type="text" class="form-control inputbrd" id="name"
               aria-describedby="name" placeholder="Enter Name">
        <small class="form-text text-muted">
          You can write your name and surname.
        </small>
      </div>
      <div class="form-group">
        <label for="Email">Email address :</label>
        <input type="email" class="form-control inputbrd" id="Email"
               aria-describedby="emailHelp" placeholder="Enter email">
        <small class="form-text text-muted">
          Your email will be secret.
        </small>
      </div>
      <div class="form-group">
        <label for="subject">Subject :</label>
        <input type="text" class="form-control inputbrd" id="subject"
               aria-describedby="emailHelp" placeholder="Enter Subject">
      </div>
      <div class="form-group">
        <label for="Message">Subject :</label>
        <textarea class="form-control inputbrd" id="Message" placeholder="Enter Message" rows="3">
        </textarea>
      </div>
      <button type="submit" class="btn sendemail">
        Send Email
        <b-icon class="h6 mb-2" icon="envelope-fill" variant="white">
        </b-icon>
      </button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

};
</script>
<style>
  .contact{
    background-color: #FAFAFA;
    width: calc(100% - 17rem);
    margin-left: 17rem;
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
  }
  .imagec{
    position: absolute;
    top: 25%;
    left: 25%;
  }
  .titrec {
    position: absolute;
    top: 15%;
    left: 65%;
  }
  .contactme{
    position: absolute;
    width: 30%;
    top: 25%;
    left: 60%;
  }
  .inputbrd{
    border-radius: 20px;
  }
  .sendemail{
    color: white;
    border-radius: 20px;
    width: 100%;
    background-color: #2EAEDE;
  }
  @media (max-width: 768px) {
    .contact {
      width: 100%;
      margin-left: 0;
      height: 100vh;
    }
    .imagec {
      display: none;
    }
    .titrec {
      position: relative;
      font-size: 35px;
      padding-top: 0%;
      width: 50%;
      left: 25%;
    }
    .contactme{
      position: relative;
      width: 90%;
      left: 5%;
      top: 20%;
    }
  }
</style>
