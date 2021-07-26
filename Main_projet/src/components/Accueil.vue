<template>
   
<div class="slideshow-container">
<!-- <div>
<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="./wp1886344.jpg" alt="" width="100%" height="600" style="width:100%">
  <div class="text">Caption Text</div>
</div>

</div> -->
<img class="img-fluid" src="./wp1886344.jpg" alt="" width="100%" height="600">
 
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
