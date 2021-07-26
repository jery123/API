<template>
  <div class="submit-form">
    <div v-if="!submitted">
<!-- <img src="./images(13).jpg"  alt="Cinque Terre" width="1000" height="1000"> -->
        <!-- <div class="form-group">
        <label for="picture" class="label-file">Picture</label>
        <input
          type="file"
           class=" img-circle" 
          id="picture"  
          name="picture"
        /> -->
        <!-- <img src="./images0.jpg" class="rounded-circle" alt="Cinque Terre"> -->
      

<!--   pour inserer une image    -->

 <div id="app"></div>

<!--   end    -->

      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: "add-product",
  
  data() {
    return {
      product: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveProduct() {
      var data = {
        title: this.product.title,
        description: this.product.description
      };

      ProductDataService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};

</script>

<style>
* {
    box-sizing: border-box;
  }
  .label-file{
    cursor: pointer;
    color:#00b1ca;
    font-weight: bold;
  }
  .label-file:hover{
    columns: #25a5c4;
  }
  .input-file{
    display: none;
  }
  body {
    
    background: rgba(16, 114, 114, 0.315) !important;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
  }
  
  body,
  html,
  .App,
  .vue-tempalte,
  .vertical-center {
   
    width: 100%;
    height: 100%;
  }
  
  .navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }
  
  .vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;    
  }
  
  .inner-block {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
  
  .vertical-center .form-control:focus {
    border-color: #2554FF;
    box-shadow: none;
  }
  
  .vertical-center h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }
  
  label {
    font-weight: 500;
  }
  
  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7a7a7a;
    margin: 0;
  }
  
  .forgot-password a {
    color: #2554FF;
  }
  
  .social-icons {
    text-align: center;
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.5em;
    color: #222222;
  }
  
  .social-icons ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .social-icons ul li {
    display: inline-block;
    zoom: 1;
    width: 65px;
    vertical-align: middle;
    border: 1px solid #e3e8f9;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    margin-right: 5px;
    background: #f4f6ff;
  }
  
  .social-icons ul li a {
    display: block;
    font-size: 1.4em;
    margin: 0 5px;
    text-decoration: none;
  }
  .social-icons ul li a i {
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }
  
  .social-icons ul li a:focus i,
  .social-icons ul li a:active i {
    transition: none;
    color: #222222;
  }
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>