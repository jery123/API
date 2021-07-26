<template>
   
<div class="slideshow-container">
<!-- <div>
<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="./wp1886344.jpg" alt="" width="100%" height="600" style="width:100%">
  <div class="text">Caption Text</div>
</div>

</div> -->


        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./hd4.jpeg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        <h3>Bienvenue</h3>
        <p>nous vous remercions pour la confiance que vous nous accordez.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./hd5.jpeg" class="d-block w-100" alt="...">
       <div class="carousel-caption d-none d-md-block">
        <h5>A propos</h5>
        <p>nous avons davantage besoin de votre confiance continue pour mener a bien ce projet.</p>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./hd2.jpg" class="d-block w-100" alt="...">
       <div class="carousel-caption d-none d-md-block">
        <h5>Connexion</h5>
        <p>Nous protegeons l'ensemble de vos données personnelles pour votre sécurité.</p>
        <p>Bien vouloir vous connecter , de ce fait appuyez sur le bouton de connexion tout en bas</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 
<!-- <router-link class="btn btn-dark btn-lg btn-block" color="dark" to="/up">Se connecter</router-link> -->
<button type="submit" class="btn btn-dark btn-lg btn-block"  @click="goToRegister()">Se connecter</button>


    </div>
</template>
<script >
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
     methods:{
   goToRegister(){
   this.$router.push('/up'); 
      }
  }
}
</script>
<style>
/* img{
    /* background: url('./images(13).jpg') no-repeat  ; 
   width: 2000;
   height: 2000;
} */
.btn-block{
    background-color:#000000;
    position: center;
    width: 100;
    color: #ffff;
}


</style>
