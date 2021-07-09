<template>
  <div>
    <comp-header-login/>
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
    <section class="cat_product_area section_gap">
      <div class="container-fluid">
        <div class="row flex-row-reverse">
          <div class="col-lg-10">
            <div class="col-lg-8 mx-auto">
              <div class="comment-form">
                <h4>Edit Account</h4>
                <form>
                  <div class="form-group col-lg-9">
                    <input type="text" class="form-control bd-r" name="username"
                           v-model="username" readonly>
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
                  <div class="form-group col-lg-12">
                    <b-col lg="7" class="my-1">
                      <b-form-group label="Enable change password:" label-cols-sm="9" label-align-sm="right"
                                    class="mb-0">
                        <b-form-checkbox-group class="mt-2">
                          <input type="checkbox" value="enable" v-model="checked"/>
                        </b-form-checkbox-group>
                      </b-form-group>
                    </b-col>
                  </div>
                  <div class="form-group col-lg-9">
                    <input type="password" class="form-control bd-r" name="password" placeholder="Password" required
                           v-model="password" v-validate="{ required: true, min: 4}"
                           :class="{ 'is-invalid': submitted && errors.has('password') }" ref="password"
                           :disabled="!checked">
                    <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                      {{ errors.first('password') }}
                    </div>
                  </div>
                  <div class="form-group col-lg-9">
                    <input type="password" class="form-control bd-r" name="confirm" placeholder="Confirm Password"
                           required
                           v-model="confirmPassword" v-validate="'required|confirmed:password'"
                           :class="{ 'is-invalid': submitted && errors.has('confirm') }"
                           :disabled="!checked">
                    <div v-if="submitted && errors.has('confirm')" class="invalid-feedback">
                      {{ errors.first('confirm') }}
                    </div>
                  </div>
                  <b-button class="btnUpload" v-on:click="editUser()">Submit</b-button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 py-5">
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

import CompHeaderLogin from "../frame/CompHeaderLogin";
import CompFooter from "../frame/CompFooter";
import CompBackToTop from "../frame/CompBackToTop";
import CompLeftSider from "../frame/CompLeftSider";

export default {

  name: "CompAD_EditUser",
  components: {
    CompHeaderLogin, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      role: null,
      checked: false,
      submitted: false
    }
  },
  methods: {
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
          form.append('re-password', this.confirmPassword);
          form.append('role', this.role);
          axios.post('http://localhost:1323/register', form)
            .then(function (response) {
              if (response.status === 200) {
                self.$router.push('/admin/users');
                console.log(form)
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
