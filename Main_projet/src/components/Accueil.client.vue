<template>
  



      <div class="slideshow-container">
<div>
<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="./22.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="./images0.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="./images(13).jpg" style="width:100%">
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
</div>




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
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card" >
      <img src="" class="card-img-top" alt="Product picture">
      <div class="card-body">
        <h5 class="card-title">Product name</h5>
        <p class="card-text">This is place of product description.</p>
        <a href="#" class="card-link">add Product</a>
        <a href="#" class="card-link">for sale:YES/NO</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="Product picture">
      <div class="card-body">
        <h5 class="card-title">Product name</h5>
        <p class="card-text">This is place of product description.</p>
       <a href="#" class="card-link">add Product</a>
    <a href="#" class="card-link">for sale:YES/NO</a>
     </div>
    </div>
  </div>
  </div>
  

  </div> <!-- <div class="img_search">
      <input type="text" class="form-control" placeholder="Search by title" v-model="title">

      <img src="./images(13).jpg" width="2000px" position="right top" class="darker">

      <div class="input-group-append">
        <button class="img-circle" type="button" @click="searchTitle">Search</button>
      </div>
    </div> -->
  
</template>
<script>

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
<style >
* {
    box-sizing: border-box
    }
body {
    font-family: Verdana, sans-serif; 
    margin:0
    }
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {
      font-size: 11px
         }
}
</style>
