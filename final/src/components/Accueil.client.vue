<template>
  



      <div class="slideshow-container">
 <div>
 <img src="./hd4.jpeg"  height="500" width="100%" fluid  alt="...">
       <div style="position:absolute;top:360px; width:600px; height:400px; z-index:2;font-size:200%">

<div><input type="text" class="form-control" placeholder="Search by title" v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle"> Search</button>
        </div>
        </div>

      <center><b></b></center>
   
      </div>

 


        <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./hd4.jpeg" width="100%" height="50%" fluid  alt="...">
       <div class="carousel-caption d-none d-md-block">
          <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </div>
    </div>
    
   
  </div> -->

</div>
<!-- <div>
<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="./hd4.jpeg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="./hd5.jpeg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="./hd3.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div> -->




<!--Affichage de mes produits-->  
 <!-- <div class="list-group-item"   :class="{ active: index == currentIndex }" v-for="(product, index) in products" :key="index"  @click="setActiveProduct(Product, index)"> -->
<!-- <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> -->
<!-- <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card" >
      <img src="" class="card-img-top" alt="Product picture">
      <div class="card-body">
        <h5 class="card-title">Product name</h5>
        <p class="card-text">This is place of product description.</p>
  <button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        <span><a href="#" class="card-link">for sale:YES/NO</a></span>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="Product picture">
      <div class="card-body">
        <h5 class="card-title">Product name</h5>
        <p class="card-text">This is place of product description.</p>
      <button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
    <a href="#" class="card-link">for sale:YES/NO</a>
     </div>
    </div>
  </div>
  </div> -->
  











  </div> <!-- <div class="img_search">
      <input type="text" class="form-control" placeholder="Search by title" v-model="title">

      <img src="./images(13).jpg" width="2000px" position="right top" class="darker">

      <div class="input-group-append">
        <button class="img-circle" type="button" @click="searchTitle">Search</button>
      </div>
    </div> -->
  
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: "#slideshow-container",
    data(){
        var slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
         var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
    }
};
</Script>
