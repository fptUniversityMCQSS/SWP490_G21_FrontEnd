<template>
  <div>
    <comp-header/>

    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>login to your account</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/login">Login</router-link>
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
                <h4>Create an account</h4>
                <p>The new way to learn properly!
                  Join us to develop <br>more convenient learning environment</p>
                <router-link to="/register" class="main_btn">Create an Account</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="login_form_inner">
              <h3>Login form</h3>
              <div class="errNotice">{{ err }}</div>
              <form class="row login_form" @submit.prevent="loginData()" method="post">
                <div class="col-md-12 form-group">
                  <input type="text" class="form-control" name="Username" placeholder="Username"
                         v-model="username" v-validate="'required'"
                         :class="{ 'is-invalid': submitted && errors.has('Username') }">
                  <div v-if="submitted && errors.has('Username')" class="invalid-feedback">
                    {{ errors.first('Username') }}
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <input v-bind:type="[showPassword ? 'text' : 'password']" class="form-control" name="Password"
                         placeholder="Password"
                         v-model="password" v-validate="'required'"
                         :class="{ 'is-invalid': submitted && errors.has('Password') }">
                  <div class="input-group-append">
                    <span class="input-group-text" @click="showPassword = !showPassword" style="margin-left: 315px">
                        <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div v-if="submitted && errors.has('Password')" class="invalid-feedback">
                    {{ errors.first('Password') }}
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <div class="creat_account">
<!--                    <input type="checkbox" id="f-option2" name="selector">-->
<!--                    <label for="f-option2">Keep me logged in</label>-->
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <button type="submit" value="submit" class="btn submit_btn">LOGIN</button>
<!--                  <a href="#">Forgot Password?</a>-->
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
  name: "CompLogin",
  components: {CompFooter, CompHeader, CompBackToTop},
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      submitted: false,
      err: ''
    }
  },
  methods: {
    loginData() {
      const self = this;
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          const axios = require('axios');
          const FormData = require('form-data');
          const form = new FormData();
          form.append('username', this.username);
          form.append('password', this.password);

          axios.post(globalURL.host + process.env.VUE_APP_LOGIN, form)
            .then(response => {
              if (response.status === 200) {
                // self.$session.start()
                self.$session.set('user', response.data)
                // sessionStorage.setItem('user', JSON.stringify(response.data))
                self.$router.push('/');

              }
            }).catch(error => {
            this.err = error.response.data.message
          })
        }
      });
    }
  }
}
</script>

<style scoped>
.errNotice {
  color: red;
  font-weight: bold;
  font-size: 15px;
}
</style>
