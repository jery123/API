<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h4 class="category text-gray">Nom du produit </h4>

      <h6 class="card-description">"Description du produit"</h6>
<!--      
      <p class="card-description">
        Don't be scared of the truth because we need to restart the human
        foundation in truth And I love you like Kanye loves Kanye I love Rick
        Owens’ bed design but the back is...
      </p> -->
      <md-button class="md-round md-danger">Supprimer</md-button>
    
      <md-button class="md-round md-success">Ajouter</md-button> <md-button class="md-round md-danger">Supprimer</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "prodinfo_card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
