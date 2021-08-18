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
              <div class="comment-form">
                <h4>Account profile</h4>
                <form>
                  <div class="form-group col-lg-9">
                    <input type="text" class="form-control bd-r" name="username"
                           v-model="username" readonly>
                  </div>
                  <div class="form-group col-lg-9">
                    <input type="password" class="form-control bd-r" name="password" placeholder="New Password" required
                           v-model="password" v-validate="{ required: true, min: 8, max: 24}"
                           :class="{ 'is-invalid': submitted && errors.has('password') }" ref="password">
                    <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                      {{ errors.first('password') }}
                    </div>
                  </div>
                  <div class="form-group col-lg-9">
                    <input type="password" class="form-control bd-r" name="confirm" placeholder="Confirm new Password"
                           required
                           v-model="confirmPassword" v-validate="'required|confirmed:password'"
                           :class="{ 'is-invalid': submitted && errors.has('confirm') }">
                    <div v-if="submitted && errors.has('confirm')" class="invalid-feedback">
                      {{ errors.first('confirm') }}
                    </div>
                  </div>
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

  name: "CompChangePassword",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      username: this.$session.get('username'),
      password: '',
      confirmPassword: '',
      submitted: false
    }
  },
  created() {
    const self = this;
    const axios = require('axios');
    axios.get(globalURL.host + process.env.VUE_APP_USER, {
      headers: {
        'Authorization': 'Bearer ' + self.$session.get("token")
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.username = response.data.username
          this.role = response.data.role
        }
      }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    editUser() {
      const self = this;
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          console.log('edit success')
          // const axios = require('axios');
          // const FormData = require('form-data');
          // const form = new FormData();
          // form.append('username', this.username);
          // form.append('password', this.password);
          // axios.patch(process.env.VUE_APP_LOCAL + process.env.VUE_APP_EDIT_USER + self.$route.params.id, form, {
          //   headers: {
          //     'Authorization': 'Bearer ' + self.$session.get("token")
          //   }
          // })
          //   .then(response => {
          //     if (response.status === 200) {
          //       this.flash('Edit account successfully', 'success', {
          //         timeout: 3000
          //       });
          //       self.$router.push('/admin/user');
          //     }
          //   }).catch(error => {
          //   console.log(error)
          // })
        }
      });
    }
  },
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
