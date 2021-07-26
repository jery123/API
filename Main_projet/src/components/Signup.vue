<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
        </form>

<div class="form-group">
            <button type="submit" class="btn btn-dark btn-lg btn-block" @click="goToAccueilClient()">Sign Up</button>
  </div>
            <p class="forgot-password text-right">
                Already registered    
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>

    </div>
</template>

<script>

import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.css";
    export default {
        methods:{
          goToAccueilClient(){
            this.$router.push('/accueil-c')
          }
        },
        data() {
            return {}
        }
    }
</script>
