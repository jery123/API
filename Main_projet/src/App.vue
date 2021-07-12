<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link> |
      <router-link to="/up">Signup</router-link>|
      <router-link to="/forgotPassword">ForgotPassword</router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>-->





<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar navbar-dark bg-dark" height="100">
  <div class="container-fluid">
                <a class="navbar-brand float-left" href="https://www.jangolo.com" target="_blank">
          <img src="./img.png" class=" img-circle"  alt="Cinque Terre" width="100" height="50">
        </a>
        <ul class="nav navbar-nav flex-row float-right" position="Top Right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link pr-3" to="/accueil">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/accueil-c">accueil client</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/accueil-f">accueil farmer</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/up">Sign up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/">mes produits</router-link>
          </li>
          <li class="nav-item">
          
          </li>
        </ul>
      <!-- <div class="dropdown">
              <button class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Connexion</button>
            <div class="dropdown-menu">
<button class="dropdown-item" href="#">login</button>
<button class="dropdown-item" href="#">logout</button>
<button class="dropdown-item" href="#">deconnect</button>
            </div>
            </div> -->
  </div>
</nav>
   
    
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  
}
</script>

<style>
 

* {
    box-sizing: border-box;
  }
  /* .label-file{
    cursor: pointer;
    color:#00b1ca;
    font-weight: bold;
  }
  .label-file:hover{
    columns: #25a5c4;
  } */
  /* .input-file{
    display: none;
  } */
  /* body {
    background: rgba(46, 92, 92, 0.315) !important;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
  } */
  
  /* body,
  html,
  .App,
  .vue-tempalte,
  .vertical-center {
    width: 100%;
    height: 100%;
  }
   */
  .navbar {
    background-color: #83bb3b;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }
  
  /* .vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;    
  } */
/*   
  .inner-block {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  } */
  
  /* .vertical-center .form-control:focus {
    border-color: #2554FF;
    box-shadow: none;
  } */
  
  /* .vertical-center h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  } */
  
  /* label {
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
} */

</style>

