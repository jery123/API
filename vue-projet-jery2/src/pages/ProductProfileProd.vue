<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <prodinfo_card> </prodinfo_card>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, prodinfo_card } from "@/pages/";

export default {
  components: {
    EditProfileForm,
    prodinfo_card
  }
};
</script>
