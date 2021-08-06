<template>
  <div v-if="currentProduit" class="edit-form">
    <h4>Produit</h4>
                                          <form>
                                             <md-card>
                                                  <md-card-header :data-background-color="dataBackgroundColor">
                                                         <h4 class="title">Ajout d'un produit </h4>
                                                   </md-card-header>
                                                  <md-card-content>
                                                     <div class="md-layout"> 
                                                        <div class="md-layout-item md-small-size-100 md-size-50">
                                                          <md-field>
                                                             <label>Nom</label>
                                                             <md-input v-model="currentProduit.nom" type="text"></md-input>
                                                          </md-field>
                                                        </div>
                                                                                                             
                                                          <div class="md-layout-item md-small-size-100 md-size-50">
                                                            <md-field>
                                                              <label>Quantité</label>
                                                              <md-input v-model="currentProduit.quantité" type="number"></md-input>
                                                            </md-field>
                                                          </div> 
                                                          <div class="md-layout-item md-small-size-100 md-size-50">
                                                            <md-field>
                                                              <label>Prix Unitaire</label>
                                                              <md-input v-model="currentProduit.prixUnitaire" type="number"></md-input>
                                                            </md-field>
                                                          </div> 
                                                            <div class="md-layout-item md-small-size-100 md-size-50">
                                                             <md-field>
                                                              <label>Unité de mesure</label>
                                                              <v-select :options="['Kg', 'Litre', 'Cageot', 'Sacs']" v-model="currentProduit.uniteDeMesure"></v-select>
                                                              <!-- <md-input v-model="currentProduit.uniteDeMesure" type="text"></md-input> -->
                                                             </md-field>
                                                            </div> 
                                                          
                                                          <div class="md-layout-item md-small-size-100 md-size-50">
                                                            <md-field>
                                                             <label><strong>Status:</strong></label>
                                                               {{ currentProduit.published ? "Published" : "Pending" }}
                                                               </md-field>
                                                          </div>
                                                       </div>
                                                    </md-card-content>
                                                  </md-card>        
                                              </form>

    <md-button class="badge badge-primary mr-2"
      v-if="currentProduit.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </md-button>
    <md-button v-else class="md-primary"
      @click="updatePublished(true)"
    >
      Publish
    </md-button>

    <md-button class="md-danger"
      @click="deleteProduit"
    >
      Delete
    </md-button>

    <md-button type="submit" class="md-success"
      @click="updateProduit"
    >
      Update
    </md-button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Produit...</p>
  </div>
</template>

<script>
import ProduitDataService from "../../services/ProduitDataService";

export default {
  name: "produit",
  data() {
    return {
      currentProduit: null,
      message: ''
    };
  },
  methods: {
    getProduit(id) {
      ProduitDataService.get(id)
        .then(response => {
          this.currentProduit = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
         //  prodId:this.currentProduit.prodId,
        // imgId: this.currentProduit.imgId,
         id: this.currentProduit.id,
        nom:this.currentProduit.nom,
        description: this.currentProduit.description,
        quantité: this.currentProduit.quantité,
        prixUnitaire: this.currentProduit.prixUnitaire,
        uniteDeMesure:this.currentProduit.uniteDeMesure,
        published: status
      };

      ProduitDataService.update(this.currentProduit.id, data)
        .then(response => {
          this.currentProduit.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateProduit() {
      ProduitDataService.update(this.currentProduit.id, this.currentProduit)
        .then(response => {
          console.log(response.data);
          this.message = 'The Produit was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteProduit() {
      ProduitDataService.delete(this.currentProduit.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "produits" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getProduit(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>