<template>
  <div class="content">
<VmHeader></VmHeader>
<VmHero></VmHero>

    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Material Dashboard Heading</h4>
            <p class="category">Created using Roboto Font Family</p>
          </md-card-header>
          <md-card-content>
         <VmProductsList></VmProductsList>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import VmHeader from './../../components/product/header/Header';

import VmHero from './../../components/product/hero/Hero';

import VmProductsList from './../../components/product/products_list/ProductsListContainer';

export default {
   components: {
        VmHeader,
        
      VmHero,
   
      VmProductsList
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
