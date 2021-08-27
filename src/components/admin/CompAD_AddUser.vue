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
              <router-link to="/">Home</router-link>
              <router-link to="/admin/add">Create New Account</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area center">
      <div>
        <div class="row flex-row-reverse">
          <div class="col-lg-10">
            <div class="col-lg-8 mx-auto section_gap">
              <div class="comment-form shadow">
                <h4>Create New Account</h4>
                <form>
                  <!--input username-->
                  <div class="form-group bd-r col-lg-9">
                    <p class="leftCol">Username:</p>
                    <div class=" col-lg-9 rightCol">
                      <input type="text" class="form-control textBox" name="Username" placeholder="Username"
                             v-model="username" v-validate="{ required: true, min: 8, max: 30, regex: /^\w+$/ }"
                             :class="{ 'is-invalid': submitted && errors.has('Username') }">
                      <div v-if="submitted && errors.has('Username')" class="invalid-feedback">
                        {{ errors.first('Username') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <!--input role-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Role:</p>
                    <div class="col-lg-9 rightCol">
                      <b-form-select style="border-radius: 50px" class="b-select textBox" v-model="role"
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
                      <div v-if="submitted && errors.has('Role')" class="invalid-feedback">
                        {{ errors.first('Role') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <!--input fullName-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Full name:&nbsp;&nbsp;</p>
                    <div class=" col-lg-9 rightCol">
                      <input type="text" class="form-control textBox" name="Full Name" placeholder="Full Name"
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
                    <p class="leftCol">Email:&nbsp;</p>
                    <div class=" col-lg-9 rightCol">
                      <input type="text" class="form-control textBox" name="Email" placeholder="Email"
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
                      <input type="text" class="form-control textBox" name="Phone Number"
                             placeholder="Phone Number"
                             v-model="phone" v-validate="{ required: true, length: 10, regex: /[0-9]+/ }"
                             :class="{ 'is-invalid': submitted && errors.has('Phone Number') }">
                      <div v-if="submitted && errors.has('Phone Number')" class="invalid-feedback">
                        {{ errors.first('Phone Number') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <!--input password-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input type="password" class="form-control textBox" name="Password" placeholder="Password"
                             v-model="password" v-validate="{ required: true, min: 8, max:24}"
                             :class="{ 'is-invalid': submitted && errors.has('Password') }" ref="Password">
                      <div v-if="submitted && errors.has('Password')" class="invalid-feedback">
                        {{ errors.first('Password') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <!--confirm password-->
                  <div class="form-group bd-r col-lg-9 cell">
                    <p class="leftCol">Re-Password:</p>
                    <div class=" col-lg-9 rightCol">
                      <input type="password" class="form-control textBox" name="Confirm Password"
                             placeholder="Confirm Password"
                             v-validate="'required|confirmed:Password'"
                             :class="{ 'is-invalid': submitted && errors.has('Confirm Password') }">
                      <div v-if="submitted && errors.has('Confirm Password')" class="invalid-feedback">
                        {{ errors.first('Confirm Password') }}
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="form-group col-lg-12 cell">
                    <b-button class="btnUpload" style="margin-right: 49px;" v-on:click="addUser()">Add</b-button>
                    <b-button class="btnUpload" v-on:click="cancelAdd()">Cancel</b-button>
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
export default {
  name: "CompAD_AddUser",
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
      role: null,
      submitted: false,
      err: ''
    }
  },
  methods: {
    // method cancel add user
    cancelAdd() {
      this.$router.push('/admin/user');
      this.err = ''
    },
    // method add user
    addUser() {
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
          form.append('role', this.role);
          axios.post(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_ADMIN_USER, form, {
            headers: {
              'Authorization': 'Bearer ' + self.$session.get("user").token
            }
          })
            .then(response => {
              if (response.status === 200) {
                this.flash('Add account successfully!', 'success', {
                  timeout: 3000
                });
                self.$router.push('/admin/user');
                this.err = ''
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

.center {
  margin: auto;
  display: block;
}

.errNotice {
  color: red;
  font-weight: bold;
  font-size: 15px;
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
