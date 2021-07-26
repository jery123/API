<template>
    <div class="vue-tempalte">
        <form>
            <h3>Forgot Password</h3>

             <div class="form-group">
                <label>New Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
             <div class="form-group">
                <label>Confirme Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

        </form>
<button type="submit" class="btn btn-dark btn-lg btn-block" @click="goToLogin()">Reset password</button>


    </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.css";
    export default {
       methods:{
           goToLogin(){
               this.$router.push('/login');
           }
       },
        data() {
            return {}
        }
    }
</script>
