<template>
  <form>
      <div v-if="!submitted">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Ajouter un Produit </h4>
        <!-- <p class="category">Complete your profile</p> -->
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Jangolo </label>
              <md-input v-model="disabled" disabled=""></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nom d'utilisateur</label>
              <md-input v-model="productname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div> -->
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="nom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Quantité</label>
              <md-input v-model="product.quantité" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Prix Unitaire</label>
              <md-input v-model="product.prixUnitaire" type="number"></md-input>
            </md-field>
          </div>
          <!-- <md-select ng-model="items" placeholder="Unité de Mesure " style="min-width: 200px;">
                  <md-select-label>Unité de Mesure </md-select-label>
                  <md-option ng-value="uniteDeMesure" ng-repeat="uniteDeMesure in uniteDeMesure">{{ uniteDeMesure }}</md-option>
                </md-select> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Prénom</label>
              <md-input v-model="prénom" type="text"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Prix Unitaire</label>
              <md-input v-model="product.prixUnitaire" type="number"></md-input>
            </md-field>
          </div> -->
          
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
              <label>Description</label>
              <md-textarea v-model="product.description"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button  @click="saveProduct" class="md-primary md-round">Ajouter</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
      </div>
        <div v-else>
      <h4>Votre profil a été modifier avec succès</h4>
      <md-button class="btn btn-success" @click="newProduct">Add</md-button>
    </div>
  </form>
</template>
<script>
import ProductDataService from "../../services/ProductDataService";

export default {
  name: "edit-profil-prod",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
   
  data() {
    return {
      product: {
        nom: "",
        description: "",
        published: "",
        quantité: "",
        prixUnitaire: "",
        uniteDeMesure: ['Kg','Litre','Cageot', 'Sacs'],
      },
       submitted: false
};

    },
     methods: {
    saveProduct() {
      var data = {
        nom:this.product.nom,
        description: this.product.description,
        quantité: this.product.quantité,
        uniteDeMesure: this.product.uniteDeMesure,
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
<style></style>
