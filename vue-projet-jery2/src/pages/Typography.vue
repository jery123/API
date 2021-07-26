<template>
  <div class="content">



   <div class="file-upload"> 
      <label for="fileupload">
        Browse file !
   <!-- <img class="img" :src="cardUserImage" /> -->
</label>
<span >
<input type="file" id="fileupload">
</span>
</div>




  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
<style>
/*.file-upload > input{
display: none;
}*/
label.file-upload{
  width:120px;
  height: 40px;
  overflow: hidden;
  position: relative;
  background-color: #ccc;
}

label span input{
  z-index: 999;
  line-height: 0;
  font-size:50px;
  position:absolute;
  top: -2px;
  left: -700px;
  opacity: 0;
  filter: alpha(opacity = 0);
  -ms-filter: "apha(opacity=0)" ;
  cursor: pointer;
  margin: 0;
  padding: 0;
}
</style>