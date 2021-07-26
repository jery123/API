<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <ProdMap data-background-color="green"> </ProdMap>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <prod-card> </prod-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ProdMap, ProdrCard } from "@/pages";

export default {
  components: {
    ProdMap,
    ProdCard
  }
};
</script>
