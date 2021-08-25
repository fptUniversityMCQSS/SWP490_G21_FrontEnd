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
              <router-link to="/">Home</router-link>
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
            <!--left poster-->
            <div class="login_box_img">
              <img class="img-fluid" src="../../assets/img/product/login.jpg" alt="">
              <div class="hover">
                <h4>You already have an account?</h4>
                <p>Log in to your account and take advantage of the features <br>we have to offer</p>
                <router-link to="/login" class="main_btn">Login</router-link>
              </div>
            </div>
          </div>

          <!--form register-->
          <div class="col-lg-6">
            <div class="login_form_inner reg_form">
              <h3>Create an Account</h3>
              <form class="row login_form" @submit.prevent="register()" method="post">
                <!--input fullName-->
                <div class="col-md-12 form-group">
                  <input type="text" class="form-control" name="Full Name" placeholder="Full Name"
                         v-model="fullName" v-validate="{ required: true, min: 8, max: 50, regex: /^(.)+$/ }"
                         :class="{ 'is-invalid': submitted && errors.has('Full Name') }">
                  <div v-if="submitted && errors.has('Full Name')" class="invalid-feedback">
                    {{ errors.first('Full Name') }}
                  </div>
                </div>
                <!--input username-->
                <div class="col-md-12 form-group">
                  <input type="text" class="form-control" name="Username" placeholder="Username"
                         v-model="username" v-validate="{ required: true, min: 8, max: 30, regex: /^\w+$/ }"
                         :class="{ 'is-invalid': submitted && errors.has('Username') }">
                  <div v-if="submitted && errors.has('Username')" class="invalid-feedback">
                    {{ errors.first('Username') }}
                  </div>
                </div>
                <!--input email-->
                <div class="col-md-12 form-group">
                  <input type="text" class="form-control" name="Email" placeholder="Email"
                         v-model="email" v-validate:email="'required|email'"
                         :class="{ 'is-invalid': submitted && errors.has('Email') }">
                  <div v-if="submitted && errors.has('Email')" class="invalid-feedback">
                    {{ errors.first('Email') }}
                  </div>
                </div>
                <!--input phone-->
                <div class="col-md-12 form-group">
                  <input type="text" class="form-control" name="Phone Number" placeholder="Phone Number"
                         v-model="phone" v-validate="{ required: true, length: 10, regex: /[0-9]+/ }"
                         :class="{ 'is-invalid': submitted && errors.has('Phone Number') }">
                  <div v-if="submitted && errors.has('Phone Number')" class="invalid-feedback">
                    {{ errors.first('Phone Number') }}
                  </div>
                </div>
                <!--input password-->
                <div class="col-md-12 form-group">
                  <input type="password" class="form-control" name="Password" placeholder="Password"
                         v-model="password" v-validate="{ required: true, min: 8, max:30, regex: /^\S*$/}"
                         :class="{ 'is-invalid': submitted && errors.has('Password') }" ref="Password">
                  <div v-if="submitted && errors.has('Password')" class="invalid-feedback">
                    {{
                      errors.first('Password')
                    }}
                  </div>
                </div>
                <!--confirm password-->
                <div class="col-md-12 form-group">
                  <input type="password" class="form-control" placeholder="Confirm Password"
                         v-validate="'required|confirmed:Password'"
                         name="Confirm Password" :class="{ 'is-invalid': submitted && errors.has('Confirm Password') }">
                  <div v-if="submitted && errors.has('Confirm Password')" class="invalid-feedback">
                    {{
                      errors.first('Confirm Password')
                    }}
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <div class="creat_account">
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <button type="submit" value="submit" class="btn submit_btn">Register</button>
                </div>
                <div class="errNotice">{{ err }}</div>
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
      fullName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      err: '',
      submitted: false
    }
  },
  methods: {
    // method register
    register() {
      const self = this;
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          const axios = require('axios');
          const FormData = require('form-data');
          const form = new FormData();
          form.append('fullName', this.fullName);
          form.append('email', this.email);
          form.append('phone', this.phone);
          form.append('username', this.username);
          form.append('password', this.password);
          axios.post(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_REGISTER, form)
            .then(response => {
              if (response.status === 200) {
                alert("Register Successfully!")
                self.$router.push('/login');
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
