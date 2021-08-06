<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Notifications des commandes</h4>
            <p class="category">
             Consultez vos notifications chaque jour<i class="fa fa-heart heart"></i>
            </p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
            
              <div class="md-layout-item md-medium-size-100">
               
              
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="list-group-item"   :class="{ active: index == currentIndex }"
          v-for="(produit, index) in produits"
          :key="index"
          @click="setActiveProduit(Produit, index)">
           <div class="card-body">
        <h5 class="card-title"> {{ Produit.nom }}</h5>
        <p class="card-text">  </p>
      </div>
    </div>
  </div>
  </div>
      <ul class="list-group">
        <li class="list-group-item"   :class="{ active: index == currentIndex }"
          v-for="(produit, index) in produits"
          :key="index"
          @click="setActiveProduit(Produit, index)"
        >
             {{ Produit.nom }}
        </li>
      </ul>

      
      <!-- <button class="md-round md-danger" @click="removeAllProduits">
        Remove All
      </button> -->
    </div>
    <!-- END of list -->

    <div class="col-md-6">
      <div v-if="currentProduit">
        <h4>Produit</h4>
        <div>
          <label><strong>Nom:</strong></label> {{ currentProduit.nom }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentProduit.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentProduit.published ? "Published" : "Pending" }}
        </div>

        <a class="md-primary md-round"
          :href="'/Produits/' + currentProduit.id"
        >
          Edit
        </a>
        <md-button class="md-round md-danger" @click="removeAllProduits" >Supprimer</md-button>
      </div>
      <div v-else>
        <br />
        <p>S'il vous plait cliquer sur un Produit...</p>
        
      </div>

              
              </div>

              <div class="md-layout-item md-size-100">
                <div class="places-buttons text-center">
              
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProduitDataService from "../services/ProduitDataService";
export default {
 
  data() {
    return {
      produits: [],
      currentProduit: null,
      currentIndex: -1,
      nom: ""
    };
  },
  methods: {
    retrieveProduits() {
      ProduitDataService.getAll()
        .then(response => {
          this.produits = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProduits();
      this.currentProduit = null;
      this.currentIndex = -1;
    },

    setActiveProduit(produit, index) {
      this.currentProduit = produit;
      this.currentIndex = index;
    },

    removeAllProduits() {
      ProduitDataService.delete()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchNom() {
      ProduitDataService.findByNom(this.nom)
        .then(response => {
          this.produits = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProduits();
  }
};
</script>
