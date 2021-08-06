<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle"> Search</button>
        </div>
      </div>
    </div>
    <div class="card">
      <h4>Produits List</h4>
      <!-- <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="list-group-item"   :class="{ active: index == currentIndex }"
          v-for="(produit, index) in produits"
          :key="index"
          @click="setActiveProduit(Produit, index)">
           <div class="card-body">
        <h5 class="card-title"> {{ Produit.title }}</h5>
        <p class="card-text">  </p>
      </div>
    </div>
  </div>
  </div> -->
      <ul class="list-group">
        <li class="list-group-item"   :class="{ active: index == currentIndex }"
          v-for="(produit, index) in produits"
          :key="index"
          @click="setActiveProduit(Produit, index)"
        >
             {{ Produit.title }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProduits">
        Remove All
      </button>
    </div>
    <!-- END of list -->

    <div class="col-md-6">
      <div v-if="currentProduit">
        <h4>Produit</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentProduit.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentProduit.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentProduit.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/Produits/' + currentProduit.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Produit...</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import ProduitDataService from "../services/ProduitDataService";
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: "products-list",
  data() {
    return {
      produits: [],
      currentProduit: null,
      currentIndex: -1,
      title: ""
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
      ProduitDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      ProduitDataService.findByTitle(this.title)
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

<style>
.col-md-8{
  background: url("./hd4.jpeg") no-repeat;
  background-size: contain;
  width: 1000;
  height: 500;
 /* overflow: scroll;*/
}
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}


</style>