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
     <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
    <div class="card">
      <h4>Products List</h4>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="list-group-item"   :class="{ active: index == currentIndex }"
          v-for="(product, index) in products"
          :key="index"
          @click="setActiveProduct(Product, index)">
      <img src="" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> {{ Product.title }}</h5>
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
         {{ Product.picture }}
          {{ Product.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
        Remove All
      </button>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct">
        <h4>Product</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentProduct.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentProduct.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentProduct.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/Products/' + currentProduct.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Product...</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: "products-list",
  data() {
    return {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      title: ""
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
      ProductDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      ProductDataService.findByTitle(this.title)
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