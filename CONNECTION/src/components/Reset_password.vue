<template>
    <div class="vue-tempalte">
        <form>
            <h3>Forgot Password</h3>

              <div class="form-group">
                <label>New password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
              <div class="form-group">
                <label>Confirm password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <!-- <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button> -->
            <router-link class="btn btn-outline-primary" to="/message">Validate</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        
        data() {
            return {}
        }
    }
</script>
