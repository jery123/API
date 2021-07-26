<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
        </form>

  <button type="submit" class="btn btn-dark btn-lg btn-block" @click="goToAccueilFarmer()">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/add">AddProduct</router-link>
                </p>
                <p>
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

    </div>
</template>

<script>

import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.css";
    export default {
       name: "login",
         methods:{
         goToAccueilFarmer(){
           this.$router.push('/accueil-f')
         }
         },
        data() {
            return {}
        }
    }
</script>
