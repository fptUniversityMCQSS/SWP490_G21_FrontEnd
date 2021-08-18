<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Edit Account</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/admin/edit">Edit Account</router-link>
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
            <div class="col-lg-7 mx-auto section_gap">
              <div class="comment-form">
                <h4>Edit Account</h4>
                <form>
                  <div class="form-group bd-r col-lg-9">
                    <p class="inline">Username:</p>
                    <input type="text" class="form-control col-lg-8 inline" name="username"
                           v-model="username" readonly>
                  </div>
                  <div class="form-group bd-r col-lg-9">
                    <p class="inline" style="margin-right: 2em">Full name:&nbsp;&nbsp;</p>
                    <input type="text" class="form-control col-lg-8 inline" name="Full Name" placeholder="Full Name"
                           v-model="fullName" v-validate="{ required: true, min: 8, max: 50, regex: /^(.)+$/ }"
                           :class="{ 'is-invalid': submitted && errors.has('Full Name') }">
                    <div v-if="submitted && errors.has('Full Name')" class="invalid-feedback">
                      {{ errors.first('Full Name') }}
                    </div>
                  </div>
                  <div class="form-group bd-r col-lg-9">
                    <p class="inline" style="margin-right: 5em">Role:</p>
                    <b-form-select style="border-radius: 50px" class="b-select inline col-lg-8" v-model="role"
                                   name="Role" v-validate="'required'"
                                   :class="{ 'is-invalid': submitted && errors.has('Role') }">
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled selected hidden>-- Choose account role --
                        </b-form-select-option>
                      </template>
                      <b-form-select-option value="user">User</b-form-select-option>
                      <b-form-select-option value="staff">Staff</b-form-select-option>
                      <b-form-select-option value="admin">Admin</b-form-select-option>
                    </b-form-select>
                    <div v-if="submitted && errors.has('Role')" class="invalid-feedback" style="padding-right: 170px">
                      {{ errors.first('Role') }}
                    </div>
                  </div>
                  <div class="form-group bd-r col-lg-9">
                    <p class="inline" style="margin-right: 4em">Email:&nbsp;</p>
                    <input type="text" class="form-control inline col-lg-8" name="Email" placeholder="Email"
                           v-model="email" v-validate:email="'required|email'"
                           :class="{ 'is-invalid': submitted && errors.has('Email') }">
                    <div v-if="submitted && errors.has('Email')" class="invalid-feedback">
                      {{ errors.first('Email') }}
                    </div>
                  </div>
                  <div class="form-group bd-r col-lg-9">
                    <p class="inline" style="margin-right: 4em">Phone:</p>
                    <input type="text" class="form-control inline col-lg-8" name="Phone Number"
                           placeholder="Phone Number"
                           v-model="phone" v-validate="{ required: true, length: 10, regex: /[0-9]+/ }"
                           :class="{ 'is-invalid': submitted && errors.has('Phone Number') }">
                    <div v-if="submitted && errors.has('Phone Number')" class="invalid-feedback">
                      {{ errors.first('Phone Number') }}
                    </div>
                  </div>
                  <div class="form-group col-lg-11">
                    <b-col lg="8" class="my-1">
                      <b-form-group label="Enable change password:" label-cols-sm="9" label-align-sm="right"
                                    class="mb-0">
                        <b-form-checkbox-group class="mt-2">
                          <input type="checkbox" value="enable" v-model="checked"/>
                        </b-form-checkbox-group>
                      </b-form-group>
                    </b-col>
                  </div>
                  <div class="form-group bd-r col-lg-9">
                    <p class="inline" style="margin-right: 2em">Password:&nbsp;&nbsp;</p>
                    <input type="password" class="form-control col-lg-8 inline" name="Password" placeholder="Password"
                           v-model="password" v-validate="{ required: true, min: 8, max:24}"
                           :class="{ 'is-invalid': submitted && errors.has('Password') }" ref="Password"
                           :disabled="!changePW">
                    <div v-if="submitted && errors.has('Password')" class="invalid-feedback">
                      {{ errors.first('Password') }}
                    </div>
                  </div>
                  <div class="form-group bd-r col-lg-9">
                    <p class="inline" style="margin-right: 1em">Re-Password:</p>
                    <input type="password" class="form-control col-lg-8 inline" name="Confirm Password"
                           placeholder="Confirm Password"
                           v-validate="'required|confirmed:Password'"
                           :class="{ 'is-invalid': submitted && errors.has('Confirm Password') }"
                           :disabled="!changePW">
                    <div v-if="submitted && errors.has('Confirm Password')" class="invalid-feedback">
                      {{ errors.first('Confirm Password') }}
                    </div>
                  </div>
                  <b-button class="btnUpload" v-on:click="cancelEdit()">Cancel</b-button>
                  <b-button class="btnUpload" v-on:click="editUser()">Submit</b-button>
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

  name: "CompAD_EditUser",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      fullName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      role: '',
      changePW: true,
      submitted: false
    }
  },
  created() {
    const self = this;
    const axios = require('axios');
    axios.get(globalURL.host + process.env.VUE_APP_ADMIN_USER + "/" + self.$route.params.id, {
      headers: {
        'Authorization': 'Bearer ' + self.$session.get("token")
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.username = response.data.username
          this.fullName = response.data.fullName
          this.email = response.data.email
          this.phone = response.data.phone
          this.role = response.data.role
        }
      }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    cancelEdit() {
      this.$router.push('/admin/user')
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
          form.append('fullName', this.fullName);
          form.append('email', this.email);
          form.append('phone', this.phone);
          form.append('role', this.role);
          form.append('change_password', this.checked);
          axios.patch(globalURL.host + process.env.VUE_APP_ADMIN_USER + "/" + self.$route.params.id, form, {
            headers: {
              'Authorization': 'Bearer ' + self.$session.get("token")
            }
          })
            .then(response => {
              if (response.status === 200) {
                this.flash('Edit account successfully', 'success', {
                  timeout: 3000
                });
                self.$router.push('/admin/user');
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

.inline {
  display: inline-block;
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
  margin-right: 30px;
  margin-left: 30px;
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
  margin-top: 10px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #229bebad
}

.bd-r {
  border-radius: 5px;
  margin-left: 70px;
}

.b-select {
  border: none;
  padding-left: 22px;
  color: #6c757d;
}
</style>
