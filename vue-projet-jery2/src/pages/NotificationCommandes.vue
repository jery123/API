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
          v-for="(product, index) in products"
          :key="index"
          @click="setActiveProduct(Product, index)">
           <div class="card-body">
        <h5 class="card-title"> {{ Product.nom }}</h5>
        <p class="card-text">  </p>
      </div>
    </div>
  </div>
  </div>
      <ul class="list-group">
        <li class="list-group-item"   :class="{ active: index == currentIndex }"
          v-for="(product, index) in products"
          :key="index"
          @click="setActiveProduct(Product, index)"
        >
             {{ Product.nom }}
        </li>
      </ul>

      
      <!-- <button class="md-round md-danger" @click="removeAllProducts">
        Remove All
      </button> -->
    </div>
    <!-- END of list -->

    <div class="col-md-6">
      <div v-if="currentProduct">
        <h4>Product</h4>
        <div>
          <label><strong>Nom:</strong></label> {{ currentProduct.nom }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentProduct.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentProduct.published ? "Published" : "Pending" }}
        </div>

        <a class="md-primary md-round"
          :href="'/Products/' + currentProduct.id"
        >
          Edit
        </a>
        <md-button class="md-round md-danger" @click="removeAllProducts" >Supprimer</md-button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Product...</p>
        
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
import ProductDataService from "../services/ProductDataService";
export default {
 
  data() {
    return {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      nom: ""
    };
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    },

    setActiveProduct(product, index) {
      this.currentProduct = product;
      this.currentIndex = index;
    },

    removeAllProducts() {
      ProductDataService.delete()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchNom() {
      ProductDataService.findByNom(this.nom)
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProducts();
  }
};
</script>
