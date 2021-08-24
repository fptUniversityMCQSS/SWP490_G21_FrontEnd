<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Account profile</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/user">Account profile</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area">
      <div>
        <div class="row flex-row-reverse">
          <div class="col-lg-10">
            <div class="col-lg-8 mx-auto section_gap">
              <div class="comment-form shadow">
                <h4>Account Profile</h4>
                <form>
                  <div class="form-group bd-r col-lg-9">
                    <p class="leftCol">Username:</p>
                    <div class="col-lg-9 rightCol">
                      <input type="text" class="form-control textBox" name="username"
                             v-model="username" readonly>
                    </div>
                  </div>
                  <br>
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Full name:</p>
                    <div class=" col-lg-9 rightCol">
                      <input v-on:input="change()" type="text" class="form-control textBox" name="Full Name"
                             placeholder="Full Name"
                             v-model="fullName" v-validate="{ required: true, min: 8, max: 50, regex: /^(.)+$/ }"
                             :class="{ 'is-invalid': submitted && errors.has('Full Name') }">
                      <div v-if="submitted && errors.has('Full Name')" class="invalid-feedback">
                        {{ errors.first('Full Name') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Email:</p>
                    <div class=" col-lg-9 rightCol">
                      <input v-on:input="change()" type="text" class="form-control textBox" name="Email"
                             placeholder="Email"
                             v-model="email" v-validate:email="'required|email'"
                             :class="{ 'is-invalid': submitted && errors.has('Email') }">
                      <div v-if="submitted && errors.has('Email')" class="invalid-feedback">
                        {{ errors.first('Email') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Phone:</p>
                    <div class=" col-lg-9 rightCol">
                      <input v-on:input="change()" type="text" class="form-control textBox" name="Phone Number"
                             placeholder="Phone Number"
                             v-model="phone" v-validate="{ required: true, length: 10, regex: /[0-9]+/ }"
                             :class="{ 'is-invalid': submitted && errors.has('Phone Number') }">
                      <div v-if="submitted && errors.has('Phone Number')" class="invalid-feedback">
                        {{ errors.first('Phone Number') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="form-group bd-r col-lg-9 cell">
                    <a href="#" onclick="return false" class="leftCol changePassword" @click="enablePassword">Enable
                      change password&nbsp;
                      <i class="fa" :class="[checked ? 'fa-angle-up' : 'fa-angle-down']" aria-hidden="true"></i></a>
                  </div>
                  <br v-if="checked">
                  <div v-if="checked" class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Current Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input v-on:input="change()" type="password" class="form-control textBox" name="Current Password"
                             placeholder="Current Password"
                             v-model="password" v-validate="'required'"
                             :class="{ 'is-invalid': submitted && errors.has('Current Password') }">
                      <div v-if="submitted && errors.has('Current Password')" class="invalid-feedback">
                        {{ errors.first('Current Password') }}
                      </div>
                    </div>
                  </div>
                  <br v-if="checked">
                  <div v-if="checked" class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input v-on:input="change()" type="password" class="form-control textBox" name="Password"
                             placeholder="Password"
                             v-model="newPassword" v-validate="{ required: true, min: 8, max:24}"
                             :class="{ 'is-invalid': submitted && errors.has('Password') }" ref="Password">
                      <div v-if="submitted && errors.has('Password')" class="invalid-feedback">
                        {{ errors.first('Password') }}
                      </div>
                    </div>
                  </div>
                  <br v-if="checked">
                  <div v-if="checked" class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Re-Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input v-on:input="change()" type="password" class="form-control textBox" name="Confirm Password"
                             placeholder="Confirm Password" v-model="reNewPassword"
                             v-validate="'required|confirmed:Password'"
                             :class="{ 'is-invalid': submitted && errors.has('Confirm Password') }">
                      <div v-if="submitted && errors.has('Confirm Password')" class="invalid-feedback">
                        {{ errors.first('Confirm Password') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="form-group col-lg-12 cell">
                    <b-button v-if="inputChange" class="btnUpload" style="margin-right: 49px;"
                              v-on:click="cancelEdit()">Cancel
                    </b-button>
                    <b-button v-if="inputChange" class="btnUpload" v-on:click="editUser()">Save</b-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
            <flash-message class="myCustomClass"></flash-message>
          </div>
        </div>
        <!-- code paging here--->
      </div>
    </section>
    <!--================End Content Area =================-->

    <comp-back-to-top/>
    <comp-footer/>
  </div>
</template>

<script>

import CompHeader from "../frame/CompHeader";
import CompFooter from "../frame/CompFooter";
import CompBackToTop from "../frame/CompBackToTop";
import CompLeftSider from "../frame/CompLeftSider";

export default {

  name: "CompChangePassword",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      user: '',
      inputChange: false,
      username: '',
      password: '',
      newPassword: '',
      reNewPassword: '',
      fullName: '',
      email: '',
      phone: '',
      submitted: false,
      checked: false,
    }
  },
  created() {
    const self = this;
    const axios = require('axios');
    axios.get(globalURL.host + process.env.VUE_APP_USER, {
      headers: {
        'Authorization': 'Bearer ' + self.$session.get("user").token
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.username = response.data.username
          this.role = response.data.role
          this.fullName = response.data.fullName
          this.email = response.data.email
          this.phone = response.data.phone
          this.user = response.data
        }
      }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    enablePassword(){
      this.checked = !this.checked
    },
    change() {
      this.inputChange = true
    },
    cancelEdit() {
      this.inputChange = false
      this.checked = false
      this.username = this.user.username
      this.role = this.user.role
      this.fullName = this.user.fullName
      this.email = this.user.email
      this.phone = this.user.phone
      this.password = ''
      this.newPassword = ''
      this.reNewPassword = ''
    },
    editUser() {
      const self = this;
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          const axios = require('axios');
          const FormData = require('form-data');
          const form = new FormData();
          form.append('username', this.username);
          form.append('password', this.password);
          form.append('email', this.email);
          form.append('phone', this.phone);
          form.append('password', this.password);
          form.append('fullName', this.fullName);
          form.append('newPassword', this.newPassword);
          form.append('change_password', this.checked);
          axios.patch(globalURL.host + process.env.VUE_APP_USER, form, {
            headers: {
              'Authorization': 'Bearer ' + self.$session.get("user").token
            }
          })
            .then(response => {
              if (response.status === 200) {
                let updateAccount = {
                  email: this.email,
                  fullName: this.fullName,
                  phone: this.phone,
                  role: self.$session.get('user').role,
                  token: self.$session.get('user').token,
                  username: this.username
                }
                self.$session.set('user', updateAccount)
                this.flash('Change profile successfully!', 'success', {
                  timeout: 3000
                });
              }
            }).catch(error => {
            console.log(error)
          })
        }
      });
    }
  },
}
</script>

<style scoped>

.changePassword {
  color: black;
}

.changePassword:hover {
  color: #006cfd;
}

.textBox {
  border-radius: 50px;
}

.cell {
  margin-top: 25px;
}

.leftCol {
  display: inline;
  float: left;
  margin-top: 7px;
}

.rightCol {
  display: inline;
  float: right;
}

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 600px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.btnUpload {
  width: 130px;
  height: 45px;
  background-color: #229aeb;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #229bebad
}

.bd-r {
  border-radius: 50px;
  margin-left: 85px;
}

.b-select {
  border: none;
  padding-left: 22px;
  color: #6c757d;
}
</style>
