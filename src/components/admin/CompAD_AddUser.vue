<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Create New Account</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/admin/qa">Create New Account</router-link>
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
              <div class="comment-form">
                <h4>Create New Account</h4>
                <form>
                  <div class="form-group col-lg-9">
                    <input type="text" class="form-control bd-r" name="username" placeholder="Username" required
                           v-model="username" v-validate="'required'"
                           :class="{ 'is-invalid': submitted && errors.has('username') }">
                    <div v-if="submitted && errors.has('username')" class="invalid-feedback">
                      {{ errors.first('username') }}
                    </div>
                  </div>
                  <div class="form-group bd-r col-lg-9">
                    <b-form-select class="b-select" v-model="role" required name="role" v-validate="'required'"
                                   :class="{ 'is-invalid': submitted && errors.has('role') }">
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled selected hidden>-- Choose account role --
                        </b-form-select-option>
                      </template>
                      <b-form-select-option value="user">User</b-form-select-option>
                      <b-form-select-option value="staff">Staff</b-form-select-option>
                      <b-form-select-option value="admin">Admin</b-form-select-option>
                    </b-form-select>
                    <div v-if="submitted && errors.has('role')" class="invalid-feedback" style="padding-right: 170px">
                      {{ errors.first('role') }}
                    </div>
                  </div>
                  <div class="form-group col-lg-9">
                    <input type="password" class="form-control bd-r" name="password" placeholder="Password" required
                           v-model="password" v-validate="{ required: true, min: 4}"
                           :class="{ 'is-invalid': submitted && errors.has('password') }" ref="password">
                    <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                      {{ errors.first('password') }}
                    </div>
                  </div>
                  <div class="form-group col-lg-9">
                    <input type="password" class="form-control bd-r" name="confirm" placeholder="Confirm Password"
                           required
                           v-model="confirmPassword" v-validate="'required|confirmed:password'"
                           :class="{ 'is-invalid': submitted && errors.has('confirm') }">
                    <div v-if="submitted && errors.has('confirm')" class="invalid-feedback">
                      {{ errors.first('confirm') }}
                    </div>
                  </div>
                  <b-button variant="outline-primary" class="btnUpload" v-on:click="addUser()">Add User</b-button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
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

  name: "CompAD_AddUser",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      role: null,
      submitted: false
    }
  },
  methods: {
    addUser() {
      const self = this;
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          const axios = require('axios');
          const FormData = require('form-data');
          const form = new FormData();
          form.append('username', this.username);
          form.append('password', this.password);
          form.append('role', this.role);
          axios.post('http://localhost:1323/admin/user', form, {
            headers: {
              'Authorization': 'Bearer ' + self.$session.get("token")
            }
          })
            .then(function (response) {
              if (response.status === 200) {
                alert("ADD SUCCESS!")
                self.$router.push('/admin/user');
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

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 600px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.btnUpload {
  width: 180px;
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
