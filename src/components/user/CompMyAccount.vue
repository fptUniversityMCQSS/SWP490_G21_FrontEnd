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
              <router-link to="/">Home</router-link>
              <router-link to="/user">Account profile</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area center">
      <div class="vld-parent">
        <div class="row flex-row-reverse">
          <div class="col-lg-10">
            <loading class="loading" :active.sync="isLoading"
                     :can-cancel="true"
                     :is-full-page="false"></loading>
            <div class="col-lg-8 mx-auto section_gap">
              <div class="comment-form shadow">
                <h4>Account Profile</h4>
                <form>
                  <!--input username-->
                  <div class="form-group bd-r col-lg-9">
                    <p class="leftCol">Username:</p>
                    <div class="col-lg-9 rightCol">
                      <input type="text" class="form-control textBox" name="username"
                             v-model="username" readonly style="background-color: rgba(2,4,5,0.05)">
                    </div>
                  </div>
                  <br>
                  <!--input fullName-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Full name:</p>
                    <div class=" col-lg-9 rightCol">
                      <input :disabled="disable" v-on:input="change()" type="text" class="form-control textBox"
                             name="Full Name"
                             placeholder="Full Name"
                             v-model="fullName" v-validate="{ required: true, min: 8, max: 50, regex: /^(.)+$/ }"
                             :class="{ 'is-invalid': submitted && errors.has('Full Name') }">
                      <div v-if="submitted && errors.has('Full Name')" class="invalid-feedback">
                        {{ errors.first('Full Name') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <!--input email-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Email:</p>
                    <div class=" col-lg-9 rightCol">
                      <input :disabled="disable" v-on:input="change()" type="text" class="form-control textBox"
                             name="Email"
                             placeholder="Email"
                             v-model="email" v-validate:email="'required|email'"
                             :class="{ 'is-invalid': submitted && errors.has('Email') }">
                      <div v-if="submitted && errors.has('Email')" class="invalid-feedback">
                        {{ errors.first('Email') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <!--input phone-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Phone:</p>
                    <div class=" col-lg-9 rightCol">
                      <input :disabled="disable" v-on:input="change()" type="text" class="form-control textBox"
                             name="Phone Number"
                             placeholder="Phone Number"
                             v-model="phone" v-validate="{ required: true, length: 10, regex: /[0-9]+/ }"
                             :class="{ 'is-invalid': submitted && errors.has('Phone Number') }">
                      <div v-if="submitted && errors.has('Phone Number')" class="invalid-feedback">
                        {{ errors.first('Phone Number') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <!--check enable password-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <a href="#" onclick="return false" class="leftCol changePassword" @click="enablePassword">Enable
                      change password&nbsp;
                      <i class="fa" :class="[checked ? 'fa-angle-up' : 'fa-angle-down']" aria-hidden="true"></i></a>
                  </div>
                  <br v-if="checked">
                  <!--input old password-->
                  <div v-if="checked" class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Current Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input :disabled="disable" v-on:input="change()" type="password" class="form-control textBox"
                             name="Current Password"
                             placeholder="Current Password"
                             v-model="password" v-validate="'required'"
                             :class="{ 'is-invalid': submitted && errors.has('Current Password') }">
                      <div v-if="submitted && errors.has('Current Password')" class="invalid-feedback">
                        {{ errors.first('Current Password') }}
                      </div>
                    </div>
                  </div>
                  <br v-if="checked">
                  <!--input new password-->
                  <div v-if="checked" class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input :disabled="disable" v-on:input="change()" type="password" class="form-control textBox"
                             name="Password"
                             placeholder="Password"
                             v-model="newPassword" v-validate="{ required: true, min: 8, max:24}"
                             :class="{ 'is-invalid': submitted && errors.has('Password') }" ref="Password">
                      <div v-if="submitted && errors.has('Password')" class="invalid-feedback">
                        {{ errors.first('Password') }}
                      </div>
                    </div>
                  </div>
                  <br v-if="checked">
                  <!--confirm new password-->
                  <div v-if="checked" class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Re-Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input :disabled="disable" v-on:input="change()" type="password" class="form-control textBox"
                             name="Confirm Password"
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
                    <b-button v-if="disable" class="btnUpload"
                              @click="disable = !disable">Edit
                    </b-button>
                    <b-button v-if="!disable" class="btnUpload" style="margin-right: 50px;" v-on:click="editUser()">Save</b-button>
                    <b-button v-if="!disable" class="btnUpload" v-on:click="cancelEdit()">Cancel
                    </b-button>
                  </div>
                  <div class="errNotice">{{ err }}</div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
            <flash-message class="messageNotice"></flash-message>
          </div>
        </div>
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
import Loading from "vue-loading-overlay";

export default {
  name: "CompChangePassword",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider, Loading
  },
  data() {
    return {
      err: '',
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
      disable: true,
      isLoading: true,
    }
  },
  created() {
    const self = this;
    const axios = require('axios');
    axios.get(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_USER, {
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
          this.isLoading = false;
        }
      }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    // method enable change password
    enablePassword() {
      this.checked = !this.checked
    },
    // method check change
    change() {
      this.inputChange = true
    },
    // method cancel change
    cancelEdit() {
      this.disable = true;
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
      this.err = ''
    },
    // method change profile
    editUser() {
      const self = this;
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          const axios = require('axios');
          const FormData = require('form-data');
          const form = new FormData();
          form.append('password', this.password);
          form.append('email', this.email);
          form.append('phone', this.phone);
          form.append('fullName', this.fullName);
          form.append('newPassword', this.newPassword);
          form.append('change_password', this.checked);
          axios.patch(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_USER, form, {
            headers: {
              'Authorization': 'Bearer ' + self.$session.get("user").token
            }
          })
            .then(response => {
              if (response.status === 200) {
                this.disable = true
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
                this.err = ''
              }
            }).catch(error => {
            this.err = error.response.data.message
          })
        }
      });
    }
  },
}
</script>

<style scoped>
.messageNotice{
  position: fixed;
  z-index: 1001;
  text-align: center;
  max-width: 300px;
  bottom: 10px;
  left: 20px;
  float: left;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.loading {
  z-index: 999;
  background-color: rgba(149, 153, 156, 0.36);
}

.errNotice {
  color: red;
  font-weight: bold;
  font-size: 15px;
}

.center {
  margin: auto;
  display: block;
}

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
  height: 700px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.btnUpload {
  width: 130px;
  height: 45px;
  background-color: #92c3f9;
  border: none;
  outline: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #0088ff;
  color: #fff;
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
