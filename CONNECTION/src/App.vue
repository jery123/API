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
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://www.jangolo.com" target="_blank">
           <img src="./img.png"  alt="Cinque Terre" width="100px" height="50 px">
        </a>
        <p>
          
        </p>
        <ul class="nav navbar-nav flex-row float-right" >
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="">   Home    </router-link>
          </li>
           <li class="nav-item">
            
          </li>
          <li class="nav-item">
            <i data-v-c85deac2="" aria-hidden="true" class="v-icon notranslate mdi mdi-account-outline theme--dark"></i>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/up">Sign up</router-link>
          </li>
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="bi bi-person-circle"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="btn btn-outline-primary" href="#" to="/login">Sign in</a>
          <a class="btn btn-outline-primary"  href="#" to="/up">Sign up</a>
          <div class="dropdown-divider"></div>
         </div>
      </li>
        </ul>
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


<style>
   
</style>
