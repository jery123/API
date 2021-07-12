<template>
    <div>

<img src="./images(13).jpg" alt="" width="500" height="500">
 
<!-- <router-link class="btn btn-dark btn-lg btn-block" color="dark" to="/up">Se connecter</router-link> -->
<button type="submit" class="btn btn-dark btn-lg btn-block"  @click="goToRegister()">Se connecter</button>


    </div>
</template>
<script>
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
