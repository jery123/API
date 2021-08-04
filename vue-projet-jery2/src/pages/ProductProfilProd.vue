<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profil-prod data-background-color="green"> </edit-profil-prod>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <ProductInfo> </ProductInfo>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfilProd, ProductInfo } from "@/pages";

export default {
  components: {
    EditProfilProd,
    ProductInfo
  }
};
</script>
