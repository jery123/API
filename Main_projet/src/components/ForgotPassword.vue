<template>
    <div class="vue-tempalte">
        <form>
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

          
        </form>
          <button type="submit" class="btn btn-dark btn-lg btn-block" @click="goToRset()" >Reset password</button>

    </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.css";
    export default {
        
        methods:{
           goToRset(){
   this.$router.push('/resart-password'); 
      
  }
        }
    }
</script>