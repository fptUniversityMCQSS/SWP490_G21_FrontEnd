<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Create new account</h2>
            <div class="page_link">
              <router-link to="/index">Home</router-link>
              <router-link to="/register">Register</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Login Box Area =================-->
    <section class="login_box_area p_120">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="login_box_img">
              <img class="img-fluid" src="../../assets/img/product/login.jpg" alt="">
              <div class="hover">
                <h4>You already have an account?</h4>
                <p>Log in to your account and take advantage of the features <br>we have to offer</p>
                <router-link to="/login" class="main_btn">Login</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="login_form_inner reg_form">
              <h3>Create an Account</h3>
              <form class="row login_form" @submit.prevent="register()" method="post">
                <div class="col-md-12 form-group">
                  <input type="text" class="form-control" name="username" placeholder="Username" required
                         v-model="username" v-validate="'required'"
                         :class="{ 'is-invalid': submitted && errors.has('username') }">
                  <div v-if="submitted && errors.has('username')" class="invalid-feedback">
                    {{ errors.first('username') }}
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <input type="password" class="form-control" name="password" placeholder="Password" required
                         v-model="password" v-validate="{ required: true, min: 4}"
                         :class="{ 'is-invalid': submitted && errors.has('password') }" ref="password">
                  <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                    {{
                      errors.first('password')
                    }}
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <input type="password" class="form-control" placeholder="Confirm password" required
                         v-model="rePassword" v-validate="'required|confirmed:password'"
                         name="confirm" :class="{ 'is-invalid': submitted && errors.has('confirm') }">
                  <div v-if="submitted && errors.has('confirm')" class="invalid-feedback">
                    {{
                      errors.first('confirm')
                    }}
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <div class="creat_account">
                    <input type="checkbox" id="f-option2" name="selector">
                    <label for="f-option2">Keep me logged in</label>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <button type="submit" value="submit" class="btn submit_btn">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Login Box Area =================-->
    <comp-back-to-top/>
    <comp-footer/>
  </div>
</template>

<script>
import CompHeader from "../frame/CompHeader";
import CompFooter from "../frame/CompFooter";
import CompBackToTop from "../frame/CompBackToTop";

export default {
  name: "CompRegister",
  components: {CompFooter, CompHeader, CompBackToTop},
  data() {
    return {
      username: '',
      password: '',
      rePassword: '',
      submitted: false
    }
  },
  methods: {
    register() {
      const self = this;
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          const axios = require('axios');
          const FormData = require('form-data');
          const form = new FormData();
          form.append('username', this.username);
          form.append('password', this.password);
          form.append('re-password', this.rePassword);
          console.log(this.username, this.password)
          axios.post(process.env.VUE_APP_LOCAL + process.env.VUE_APP_REGISTER, form)
            .then(response => {
              if (response.status === 200) {
                self.$router.push('/login');
              }
            }).catch(error => {
            console.log(error)
          })
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
