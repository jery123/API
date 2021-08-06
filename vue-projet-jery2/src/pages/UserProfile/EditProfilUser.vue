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
              <md-input v-model="user.username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="user.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Password</label>
              <md-input v-model="user.mdp" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="user.nom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Prénom</label>
              <md-input v-model="user.prenom" type="text"></md-input>
            </md-field>
          </div>
         
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="user.address" type="text"></md-input>
            </md-field>
          </div> -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Ville</label>
              <md-input v-model="user.ville" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Télephone</label>
              <md-input v-model="user.telephone" type="number"></md-input>
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
              <md-textarea v-model="user.experience"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="saveUser" class="md-raised md-success">Modifier</md-button>
          </div>
         
        </div>
      </md-card-content>
    </md-card>
    </div>
     
        <div v-else>
      <h4>Votre profil a été modifier avec succès</h4>
      <md-button class="btn btn-success" @click="newUser">Add</md-button>
    </div>
  </form>

</template>
<script>
import FarmerDataService from "../../services/FarmerDataService";

export default {
  name: "edit-profil-user",
  
  data() {
    return {
      user: {
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
    saveUser() {
      var data = {
         nom:this.user.nom,
        prenom: this.user.prenom,
        username: this.user.username,
        email: this.user.email,
        mdp:this.user.mdp,
        experience:this.user.experience,
        ville:this.user.ville,
        telephone:this.user.telephone,
           };

      FarmerDataService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        
    },
    
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>
<style></style>
