<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profil-user data-background-color="green"> </edit-profil-user>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> <v-btn
  color="primary"
  elevation="18"
  x-large
  x-small
></v-btn></user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfilUser, UserCard } from "@/pages";

export default {
  components: {
    EditProfilUser,
    UserCard
  }
};
</script>
