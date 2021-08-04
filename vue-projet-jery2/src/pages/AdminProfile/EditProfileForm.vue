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
              <label>Jangolo </label>
              <md-input v-model="disabled" disabled=""></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nom d'utilisateur</label>
              <md-input v-model="admin.adminname" type="text"></md-input>
            </md-field>
          </div> -->
        
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="admin.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Password</label>
              <md-input v-model="admin.mdp" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="admin.nom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Prénom</label>
              <md-input v-model="admin.prenom" type="text"></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="admin.address" type="text"></md-input>
            </md-field>
          </div> -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Ville</label>
              <md-input v-model="admin.ville" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Télephone</label>
              <md-input v-model="admin.telephone" type="number"></md-input>
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
              <md-textarea v-model="admin.experience"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="saveadmin" class="md-raised md-success">Modifier</md-button>
          </div>
         
        </div>
      </md-card-content>
    </md-card>
     </div> 
        <div v-else>
      <h4>Votre profil a été modifier avec succès</h4>
      <md-button class="md-primary md-round" @click="newdminA">Add</md-button>
    </div>
  </form>
</template>
<script>
import AdminDataService from "../../services/AdminDataService";
export default {
  name: "edit-profile-form",


 
  data() {
    return {
      admin: {
        id: null,
        nom: "",
        prenom: "",
        email: "",
        mdp:"",
        aboutMe:"",
       telephone:"",
        is_delete: false,
        status: false
      },
      submitted: false
    };

  },
  methods: {
    saveAdmin() {
      var data = {
         nom:this.admin.nom,
        prenom: this.admin.prenom,
        // adminName: this.admin.adminName,
        email: this.admin.email,
        mdp:this.admin.mdp,
        aboutMe:this.admin.aboutMe,
        // ville:this.admin.ville,
        telephone:this.admin.telephone,
           };

      AdminDataService.create(data)
        .then(response => {
          this.admin.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        
    },
    
    neAdminw() {
      this.submitted = false;
      this.admin = {};
    }
  },


























  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
    }
  };

</script>
<style></style>
