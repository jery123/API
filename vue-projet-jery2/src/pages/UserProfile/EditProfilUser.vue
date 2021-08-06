<template>

  <form>
    <div v-if="!submitted">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Modifiez votre Profile</h4>
        <!-- <p class="category">Complete your profile</p> -->
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
        
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nom d'utilisateur</label>
              <md-input v-model="farmer.username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="farmer.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Password</label>
              <md-input v-model="farmer.mdp" type="password"></md-input>
            </md-field>
          </div>
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
         
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="farmer.address" type="text"></md-input>
            </md-field>
          </div> -->
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
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div> -->
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Experience</label>
              <md-textarea v-model="farmer.experience"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="saveFarmer" class="md-raised md-success">Modifier</md-button>
          </div>
         
        </div>
      </md-card-content>
    </md-card>
    </div>
     
        <div v-else>
      <h4>Votre profil a été modifier avec succès</h4>
      <md-button class="btn btn-success" @click="newFarmer">Add</md-button>
    </div>
  </form>

</template>
<script>
import FarmerDataService from "../../services/FarmerDataService";

export default {
  name: "edit-profil-user",
  
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
      submitted: false
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
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        
    },
    
    newFarmer() {
      this.submitted = false;
      this.farmer = {};
    }
  }
};
</script>
<style></style>
