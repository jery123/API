<template>
<div>
    <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <!-- <a class="hero-brand" href="index.html" title="Home"><img alt="Bell Logo" src="assets/img/logo.png"></a> -->
        </div>
      </div>

      <div class="col-md-12">
        <h1>
          Bienvenue sur la page commerciale de Jangolo !
        </h1>

        <p class="tagline">
         Jangolo vous remercie pour la totale confiance que vous lui accordez
        </p>
        <a class="btn btn-full scrollto" href="#vous_etes">Debuter</a>
      </div>
    </div>

  </section><!-- End Hero -->

<!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center">


      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">Nos services</a></li>
          <li><a class="nav-link scrollto" href="#vous_etes">Se lancer</a></li>
          <li><a class="nav-link scrollto" href="https://jangolo.cm/contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
 </div>
  </header><!-- End Header -->


<!-- ======= About Section ======= -->
    <section class="about" id="about">
 <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-100">
              <div class="places-buttons text-center">
                <h5 class="text-center" >Nos services
                  <!-- <p class="category">Click to view notifications</p> -->
                </h5>
                <md-button @click="notifyVue('top','left')" href="https://jangolo.cm/ambassador"><img src="../../assets/fullhd/ambassador.jpg" alt="" height="500px"></md-button>
                <md-button @click="notifyVue('top','center')" href=" https://jangolo.cm/business"><img src="../../assets/fullhd/images.jpg" alt=""></md-button>
                <md-button @click="notifyVue('top','right')" href="https://jangolo.cm"><img src="../../assets/fullhd/téléchargé.jpg" alt=""></md-button>
                <md-button class="md-success" @click="notifyVue('bottom','center')" href="https://jangolo.cm/farmer"><img src="../../assets/fullhd/téléchargé (1).jpg" alt=""></md-button>
                <!-- <md-button class="md-primary" @click="notifyVue('bottom','center')">Bottom Center</md-button>
                <md-button class="md-primary" @click="notifyVue('bottom','right')">Bottom Right</md-button> -->
              </div>
            </div>
          </div>
        </md-card-content>
    </section><!-- End About Section -->

     
<div id="vous_etes">
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
              <div class="places-buttons text-center">
                  <h2> Vous êtes ?</h2>

                    <!--===================enregistrement du client================== -->
                   <md-button data-toggle="modal"  data-target="#client"  ><h3>CLIENT</h3></md-button>
                     <div class="modal fade" id="client" tabindex="-1" role="dialog" aria-hidden="true">
                           <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                 <div class="modal-header">
                                    <h5 class="modal-title" id="prodRegis">Enregistrement</h5>
                                              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                                  </div>
                                   <div class="modal-body">
                                       <form>
                                          <!-- <div  v-if="!submitted"> -->
                                               <md-card>
                                                  <md-card-header :data-background-color="dataBackgroundColor">
                                                         <h4 class="title">Veuillez entrer vos information s'il vous plait !</h4>
                                                   </md-card-header>
                                                   <md-card-content>
                                                     <div class="md-layout"> 
                                                       <!-- <div class="md-layout-item md-small-size-100 md-size-33">
                                                           <md-field>
                                                             <label>Nom d'utilisateur</label>
                                                                 <md-input v-model="client.username" type="text"></md-input>
                                                            </md-field>
                                                        </div> -->
                                                        <div class="md-layout-item md-small-size-100 md-size-50">
                                                          <md-field>
                                                             <label>Nom</label>
                                                             <md-input v-model="client.nom" type="text"></md-input>
                                                          </md-field>
                                                        </div>
                                                        <div class="md-layout-item md-small-size-100 md-size-50">
                                                          <md-field>
                                                              <label>Prénom</label>
                                                              <md-input v-model="client.prenom" type="text"></md-input>
                                                          </md-field>
                                                         </div>
                                                        <div class="md-layout-item md-small-size-100 md-size-50">
                                                          <md-field>
                                                             <label>Email Address</label>
                                                             <md-input v-model="client.email" type="email"></md-input>
                                                           </md-field>
                                                        </div>
                                                        <div class="md-layout-item md-small-size-100 md-size-50">
                                                           <md-field>
                                                              <label>Password</label>
                                                              <md-input v-model="client.mdp" type="password"></md-input>
                                                            </md-field>
                                                        </div>                                                        
                                                         <div class="md-layout-item md-small-size-100 md-size-33">
                                                           <md-field>
                                                             <label>Ville</label>
                                                             <md-input v-model="client.ville" type="text"></md-input>
                                                           </md-field>
                                                          </div>
                                                          <div class="md-layout-item md-small-size-100 md-size-50">
                                                            <md-field>
                                                              <label>Télephone</label>
                                                              <md-input v-model="client.telephone" type="number"></md-input>
                                                            </md-field>
                                                          </div> 
                                                          <div class="md-layout-item md-size-100 text-right">
                                                               <md-button class="md-danger" @click="notifyVue('top','left')"  data-dismiss="modal">Fermer</md-button>
                                                               <md-button class="md-success" @click="saveClient" data-toggle="modal"  data-target="#cOK"  >Enregistrer </md-button>
                                                               
                                                               
                                                                     <div class="modal fade" id="cOK" tabindex="-1" role="dialog" aria-hidden="true">
                                                                            <div class="modal-dialog" role="document">
                                                                                     <div class="modal-content">
                                                                                          <div class="modal-header">
                                                                                                 <h5 class="modal-title" id="regisProd" color="black">Validation !</h5>
                                                                                                 <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button> -->
                                                                                           </div>
                                                                                           <div class="modal-body">

                                                                                               <h4>Vous vous etes fait enregistrer avec succès ! </h4>
            
                                                                                            </div>
                                                                                            <div class="modal-footer">
                                                                                               <md-button class="md-info" @click="newClient" :href="'/client'" >OK</md-button>                
                                                                                            </div>
                                                                                      </div>
                                                                              </div>
                                                                       </div>
                                                                        </div> 
                                                                      </div>
         
                                                           
                                                        </md-card-content>
                                                      </md-card>
                                                      <!-- </div> -->
                                            
                                        </form>
                                </div>                              
                           </div>
                    </div>
      </div>
      <!--====================END=====================-->
              
                  <!--===================enregistrement du producteur================== -->
                   <md-button class="md-warning" data-toggle="modal"  data-target="#modal" ><h3>PRODUCTEUR</h3></md-button>
                    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-hidden="true">
                           <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                 <div class="modal-header">
                                    <h5 class="modal-title" id="prodRegis">Enregistrement</h5>
                                              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                                  </div>
                                   <div class="modal-body">
                                       <form>
                                          <!-- <div v-if="!submitted"> -->
                                               <md-card>
                                                  <md-card-header :data-background-color="dataBackgroundColor">
                                                         <h4 class="title">Veuillez entrer vos information s'il vous plait !</h4>
                                                   </md-card-header>
                                                   <md-card-content>
                                                     <div class="md-layout"> 
                                                       <div class="md-layout-item md-small-size-100 md-size-50">
                                                          <md-field>
                                                             <label>Nom</label>
                                                             <md-input v-model="farmer.nom" type="text"></md-input>
                                                          </md-field>
                                                        </div>
                                                        <div class="md-layout-item md-small-size-100 md-size-50">
                                                          <md-field>
                                                              <label>Prénom</label>
                                                              <md-input v-model="farmer.prenom" type="text"></md-input>
                                                          </md-field>
                                                         </div>
                                                       <div class="md-layout-item md-small-size-100 md-size-50">
                                                          <md-field>
                                                             <label>Email Address</label>
                                                             <md-input v-model="farmer.email" type="email"></md-input>
                                                           </md-field>
                                                        </div>
                                                        <div class="md-layout-item md-small-size-100 md-size-50">
                                                           <md-field>
                                                              <label>Password</label>
                                                              <md-input v-model="farmer.mdp" type="password"></md-input>
                                                            </md-field>
                                                        </div>
                                                        <div class="md-layout-item md-small-size-100 md-size-33">
                                                           <md-field>
                                                             <label>Nom d'utilisateur</label>
                                                                 <md-input v-model="farmer.username" type="text"></md-input>
                                                            </md-field>
                                                        </div>
                                                        
                                                         <div class="md-layout-item md-small-size-100 md-size-33">
                                                           <md-field>
                                                             <label>Ville</label>
                                                             <md-input v-model="farmer.ville" type="text"></md-input>
                                                           </md-field>
                                                          </div>
                                                          <div class="md-layout-item md-small-size-100 md-size-33">
                                                            <md-field>
                                                              <label>Télephone</label>
                                                              <md-input v-model="farmer.telephone" type="number"></md-input>
                                                            </md-field>
                                                          </div> 
                                                            <div class="md-layout-item md-size-100">
                                                              <md-field maxlength="5">
                                                                <label>Experience</label>
                                                                <md-textarea v-model="farmer.experience"></md-textarea>
                                                              </md-field>
                                                            </div>
                                                            <div class="md-layout-item md-size-100 text-right">
                                                               <md-button class="md-danger" @click="notifyVue('top','left')"  data-dismiss="modal">Fermer</md-button>
                                                               <md-button class="md-success" @click="saveFarmer"  data-toggle="modal"  data-target="#fOK" >Enregistrer </md-button> 
                                                                 <div class="modal fade" id="fOK" tabindex="-1" role="dialog" aria-hidden="true">
                                                                            <div class="modal-dialog" role="document">
                                                                                     <div class="modal-content">
                                                                                          <div class="modal-header">
                                                                                                 <h5 class="modal-title" id="regisProd" color="black">Validation !</h5>
                                                                                                 <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button> -->
                                                                                           </div>
                                                                                           <div class="modal-body">

                                                                                               <h4>Vous vous etes fait enregistrer avec succès ! </h4>
            
                                                                                            </div>
                                                                                            <div class="modal-footer">
                                                                                               <md-button class="md-info" @click="newFarmer" :href="'/dashboard-producteur'">OK</md-button>                
                                                                                            </div>
                                                                                      </div>
                                                                              </div>
                                                                       </div>
                                                              <!-- <md-button @click="saveUser" class="md-raised md-success">Modifier</md-button> -->
                                                            </div>
         
                                                          </div>
                                                        </md-card-content>
                                                      </md-card>
                                                      <!-- </div> -->
                                            
                                        </form>
                                </div>                              
                           </div>
                    </div>
      </div>
                  <!-- ====================END=========================== -->
              </div>
            </div>
        </div>

</div>


            <!-- ======= Footer ======= -->
                                         <footer class="site-footer">
                                           <div class="bottom">
                                             <div class="container">
                                               <div class="row">

                                                 <div class="col-lg-6 col-xs-12 text-lg-start text-center">
                                                   <p class="copyright-text">
                                                     &copy; Jangolo | <strong>Farmer</strong> au ❤ de l'agriBusiness au cameroun
                                                   </p>
                                                   <div class="credits">
                                                    
                                                    Ah oui c'est <a href="https://https://www.jangolo.cm/farmer/">JangoloFarmer</a>
                                                   </div>
                                                 </div>

                                                 <div class="col-lg-6 col-xs-12 text-lg-right text-center">
                                                             Nous rejoindre sur:
                                                   <ul class="list-inline">
                                                     <li class="list-inline-item">
                                                        
                                                     </li>
                                       
                                                     <li class="list-inline-item">
                                                      <a href="https://fr-fr.facebook.com/jangolofarm/" class="icon">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                       </svg>
                                                   </a>
                                                     </li>

                                                     <li class="list-inline-item">
                                                                                               <a href="https://twitter.com/jangolofarm/status/755813358507593729?lang=ca" class="icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                         <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                       </svg>
                                                   </a>  
                                                     </li>

                                                     <li class="list-inline-item">
                                                         <a href=" http://localhost:8080/" class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                         <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                       </svg>
                                                   </a>
                                                         </li>
                                                   </ul>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </footer><!-- End Footer -->
    </div>
</template>
 




<script>
import FarmerDataService from "../../services/FarmerDataService";

import ClientDataService from "../../services/ClientDataService";

export default {
  name: "bienvenue",
  
  data() {
    return {
      farmer: {
        id: null,
        nom: "",
        prenom: "",
        username: "",
        email: "",
        mdp:"",
        experience:"",
        ville:"",
        telephone:"",
        is_delete: false,
        role: false
      },
 client: {
        id: null,
        nom: "",
        prenom: "",
        email: "",
        mdp:"",
        ville:"",
        telephone:"",
        is_delete: false,
        role: false
      },
// submitted: false
    };

  },
  methods: {
    saveFarmer() {
      var data = {
        nom:this.farmer.nom,
        prenom: this.farmer.prenom,
        username: this.farmer.username,
        email: this.farmer.email,
        mdp:this.farmer.mdp,
        experience:this.farmer.experience,
        ville:this.farmer.ville,
        telephone:this.farmer.telephone,
           };

      FarmerDataService.create(data)
        .then(response => {
          this.farmer.id = response.data.id;
          console.log(response.data);
          // this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });//================end====================//
    },

        //================client===============//
        saveClient() {
      var data = {
        nom:this.client.nom,
        prenom: this.client.prenom,
        email: this.client.email,
        mdp:this.client.mdp,
        ville:this.client.ville,
        telephone:this.client.telephone,
           };

      ClientDataService.create(data)
        .then(response => {
          this.client.id = response.data.id;
          console.log(response.data);
          // this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        
    },
    
    newClient() {
      // this.submitted = false;
      this.client = {};
    },

     newFarmer() {
      // this.submitted = false;
      this.farmer = {};
    }
  }
};
</script>









<style>
#prodRegis , form{
  color: #000;
  font-family: 'Times New Roman', Times, serif;
}

.header{
    background: url('../../assets/fullhd/5.jpg') no-repeat;
    background-size: cover;
   width: 100%;
   height: 400px;
   border: 2px solid;
   color: rgb(7, 6, 6);
   resize: both;
    }
    /* h1{
          animation: clignote 1s linear infinite;  
       text-decoration: blink;  
           animation: Test 2s infinite;  
        text-align:center ;
        height:50px;
        color: rgb(255, 255, 255);
        position: center;
        font-family: 'Times New Roman', Times, serif;
        font-size: 150px;
    } */
    @keyframes Test{
    0%{opacity: 1;}
    50%{opacity: 0;}
    100%{opacity: 1;}
}
     /* h2{
          font-size:80px;
         
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-weight: bold; 
    }*/
    /* h3{
      font-family: 'Times New Roman', Times, serif; 
    } */
   
h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
}

p {
  line-height: 1.55;
  color: #333;
  font-size: 400;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 62px;
}

h2 {
  font-size: 30px;
  margin-bottom: 65px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
a {
  transition: 0.5s;
  text-decoration: none;
  color: #199EB8;
}

a:hover {
  color: #23c2e1;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #199EB8;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #1ebddc;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/* ==================================================
  Elements
  ================================================== */
.btn {
  background-color: #199EB8;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 800;
  color: #fff;
  padding: 15px 45px;
  border-radius: 50px;
}

.btn:hover {
  background-color: #E04F00;
  color: #fff;
}

.btn:focus {
  color: #fff;
}

.btn-ghost {
  border: 3px solid #fff;
  background-color: transparent;
}

.btn-ghost:hover {
  background-color: #fff;
  color: #199EB8;
}

section {
  padding: 85px 0;
}

.card {
  position: relative;
  padding: 0;
  border: 0;
  border-radius: 0;
  margin: 0;
  overflow: hidden;
}

a:hover {
  text-decoration: none !important;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  background: #199EB8;
  height: 70px;
}

#header #logo h1 {
  font-size: 32px;
  margin: 0;
  line-height: 0;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#header #logo h1 a,
#header #logo h1 a:hover {
  color: #fff;
}

#header #logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

.scrolled-offset {
  margin-top: 70px;
}

/*--------------------------------------------------------------
# Header Social Links
--------------------------------------------------------------*/
.header-social-links {
  margin: 0 0 0 30px;
}

.header-social-links a {
  color: rgba(255, 255, 255, 0.8);
  padding-left: 8px;
  display: inline-block;
  line-height: 0px;
  transition: 0.3s;
}

.header-social-links a i {
  line-height: 0;
  font-size: 24px;
}

.header-social-links a:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .header-social-links {
    margin: 0 15px 0 0;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #fff;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 30px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  color: #555;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #199EB8;
}

.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }
  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(34, 34, 34, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a {
  padding: 10px 20px;
  font-size: 15px;
  color: #555;
}

.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #199EB8;
}

.navbar-mobile .getstarted {
  margin: 15px;
}

.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
  color: #199EB8;
}

.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  display: table;
  position: relative;
  background-image: url(../../assets/fullhd/5.jpg);
  background-size: cover;
  padding: 150px 0;
  color: #fff;
  width: 100%;
  height: 100vh;
}

.hero:after {
  content: '';
  z-index: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.hero .container {
  position: relative;
  z-index: 1;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}

.hero-brand {
  margin-bottom: 75px;
  display: inline-block;
}

.hero-brand:hover {
  opacity: .75;
}

.tagline {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 26px;
  margin: 45px 0 75px 0;
  color: #fff;
}

/*--------------------------------------------------------------
# Stats
--------------------------------------------------------------*/
.stats-row {
  margin-top: 65px;
}

.stats-col .circle {
  display: inline-block;
  width: 160px;
  height: 160px;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #666;
  border: 6px solid #199EB8;
  border-radius: 50%;
  padding: 55px 25px 0 25px;
  position: relative;
}

.stats-col .circle .stats-no {
  color: #fff;
  width: 70px;
  height: 70px;
  line-height: 70px;
  top: -25px;
  right: -15px;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: #E04F00;
  position: absolute;
  border-radius: 50%;
  font-weight: 700;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 20px 0;
  background-color: #fafafa;
  min-height: 40px;
}

.breadcrumbs h2 {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
}

@media (max-width: 992px) {
  .breadcrumbs h2 {
    margin: 0 0 10px 0;
  }
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #6c757d;
  content: "/";
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }
  .breadcrumbs ol {
    display: block;
  }
  .breadcrumbs ol li {
    display: inline-block;
  }
}

/* ==================================================
  Welcome Styling
  ================================================== */
#vous_etes {
  color: #fff;
  height: 490px;
  overflow: hidden;
  padding-top: 85px;
  background: url("../../assets/fullhd/parallax-bg.jpg") center top no-repeat;
}

#vous_etes h2 {
     animation: Test 2s infinite;
  text-transform: uppercase;
  margin-bottom: 15px;
}

#vous_etes p {
  color: #fff;
  margin-bottom: 45px;
}

/* ==================================================
  Features Styling
  ================================================== */
.features {
  padding-bottom: 45px;
}

.features h2 {
  color: #199EB8;
}

.feature-col {
  display: table;
  padding-bottom: 45px;
}

.feature-col > div > div {
  display: table-cell;
  vertical-align: middle;
}

.feature-col > div > div:last-child {
  padding-left: 20px;
}

.feature-col .feature-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
  background: #199EB8;
  color: #fff;
  font-size: 24px;
  text-align: center;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.feature-col h3 {
  color: #199EB8;
}

.feature-col p {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #999;
}

/* ==================================================
  Call-to-action Styling
  ================================================== */
.cta {
  background-color: #199EB8;
  padding: 25px 0;
}

.cta h2 {
  margin-bottom: 5px;
}

.cta h2,
.cta p {
  color: #fff;
}

.cta p {
  margin-bottom: 0;
  opacity: .75;
}

.cta .btn-ghost {
  position: relative;
  top: 13px;
}

/* ==================================================
  Portfolio Styling
  ================================================== */
.portfolio {
  background-color: #edf6ff;
  padding-bottom: 0;
}

.portfolio h2 {
  color: #199EB8;
  margin-bottom: 25px;
}

.portfolio-grid {
  margin-top: 65px;
}

.portfolio-grid .row {
  margin: 0;
}

.portfolio-grid .row > div {
  padding: 0;
}

.portfolio-grid .row > div .card img {
  width: 100%;
}

.portfolio-grid .row > div .card .portfolio-over {
  position: absolute;
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.portfolio-grid .row > div .card .portfolio-over > div {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.portfolio-grid .row > div .card .portfolio-over .card-title {
  color: #fff;
  font-size: 30px;
}

.portfolio-grid .row > div .card .portfolio-over .card-text {
  color: #fff;
  opacity: .75;
  padding: 0 45px;
}

.portfolio-grid .row > div .card:hover .portfolio-over {
  opacity: 1;
  visibility: visible;
}

/* ==================================================
  Team Styling
  ================================================== */
.team h2 {
  color: #199EB8;
}

.team .col-sm-3 {
  padding: 0;
}

.team .card > a {
  display: block;
}

.team .card img {
  width: 100%;
}

.team .card h4 {
  color: #fff;
  text-transform: uppercase;
}

.team .card p {
  font-size: 11px;
  color: #fff;
  opacity: .75;
  margin: 0;
  padding: 0 35px;
}

.team .card .social-nav {
  margin-bottom: 45px;
}

.team .card .social-nav a {
  color: #fff;
  font-size: 16px;
  margin: 0 4px;
}

.team .card .social-nav a:hover {
  opacity: .75;
}

.team .card:hover .team-over {
  opacity: 1;
  visibility: visible;
}

.team .card:hover .card-title-wrap {
  background-color: #199EB8;
}

.team .card:hover .card-title-wrap .card-title,
.team .card:hover .card-title-wrap .card-text {
  color: #fff;
}

.team .team-over {
  padding-top: 45px;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.team .card-title-wrap {
  padding: 15px 25px;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.team .card-title-wrap .card-title,
.team .card-title-wrap .card-text {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  display: block;
  margin: 0;
}

.team .card-title-wrap .card-title {
  font-size: 24px;
  color: #333;
}

.team .card-title-wrap .card-text {
  font-size: 18px;
  color: #999;
}

/* ==================================================
  Contact Section
  ================================================== */
#contact {
  background: #f7f7f7;
  padding: 80px 0;
}

#contact h2 {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  color: #199EB8;
}

#contact .info i {
  font-size: 32px;
  color: #199EB8;
  float: left;
  line-height: 0;
}

#contact .info p {
  padding: 0 0 10px 50px;
  line-height: 24px;
}

#contact .php-email-form .validate {
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}

#contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

#contact .php-email-form .error-message br + br {
  margin-top: 25px;
}

#contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

#contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

#contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

#contact .php-email-form input, #contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
}

#contact .php-email-form input::focus, #contact .php-email-form textarea::focus {
  background-color: #199EB8;
}

#contact .php-email-form button[type="submit"] {
  background: #199EB8;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}

#contact .php-email-form button[type="submit"]:hover {
  background: #23c2e1;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.site-footer {
  background-color: #111;
  padding: 0;
}

.site-footer h2,
.site-footer p {
  color: #fff;
}

.site-footer p {
  opacity: .75;
  line-height: 2.0925;
}

.site-footer h2,
.site-footer .btn {
  margin-bottom: 25px;
}

.site-footer .social-nav a {
  color: #fff;
  opacity: .25;
}

.site-footer .social-nav a:hover {
  opacity: 1;
}

.site-footer .bottom {
  background-color: #000;
  padding: 20px 0;
}

.site-footer .bottom .list-inline,
.site-footer .bottom p {
  margin: 0;
}

.site-footer .bottom .list-inline {
  position: relative;
  top: 5px;
}

.site-footer .bottom .list-inline a {
  color: #fff;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  margin-right: 15px;
}

.site-footer .bottom .list-inline a:hover {
  color: #199EB8;
}

.site-footer .credits {
  color: #ddd;
}

.site-footer .credits a {
  color: #199EB8;
}

/* ==================================================
  Responsive Styling
  ================================================== */
@media (max-width: 61.9em) {
  section,
  .block,
  .cta {
    padding: 35px 0;
  }
  .features {
    padding-bottom: 5px;
  }
  p,
  .block p {
    margin: 0;
  }
  .hero-brand {
    margin-bottom: 35px;
  }
  .tagline {
    margin: 35px 0;
  }
  h1 {
    font-size: 32px;
    margin: 0;
  }
  h2,
  .tagline {
    font-size: 24px;
  }
  h2 {
    margin-bottom: 25px;
  }
  h3 {
    font-size: 14px;
  }
  .hero {
    padding: 75px 0;
  }
  .stats-col {
    margin-bottom: 25px;
  }
  .block {
    height: auto;
  }
  .feature-col {
    padding-bottom: 30px;
  }
  .portfolio-grid .card h3.card-title {
    font-size: 18px !important;
  }
  .portfolio-grid .card .card-text {
    font-size: 13px;
  }
  .team .team-over {
    padding-top: 20px;
  }
  .team .card .social-nav {
    margin-bottom: 15px;
    padding: 0;
  }
  .site-footer .social-nav {
    margin-bottom: 35px;
  }
  .site-footer .list-inline {
    text-align: center;
    padding-bottom: 15px;
  }
  .site-footer .list-inline li {
    display: inline-block;
  }
}

@media (max-width: 767px) {
  .block {
    padding-left: 30px;
    padding-right: 30px;
  }
}






</style>
