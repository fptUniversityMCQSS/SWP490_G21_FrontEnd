<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>List User</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/admin/users">List User</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area">
      <div class="vld-parent">
        <div class="row flex-row-reverse">
          <div class="col-lg-10 py-5">
            <loading class="loading" :active.sync="isLoading"
                     :can-cancel="true"
                     :is-full-page="false"></loading>
            <div class="col-lg-10 mx-auto section_gap">
              <div class="card rounded shadow border-0 bgFormTable">
                <div class="tableTl">User Table</div>
                <div class="card-body rounded">
                  <div class="table-responsive">
                    <div style="padding: 20px;">
                      <div class="justify-content-centermy-1 row">
                        <!--select row per page-->
                        <b-form-group horizontal label="Rows per page:" class="col-2">
                          <b-form-select size="sm"
                                         :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15},{text:20,value:20}]"
                                         v-model="perPage">
                          </b-form-select>
                        </b-form-group>
                        <!--button add user-->
                        <b-form-group class="col-lg-6">
                          <b-button variant="outline-primary" size="sm" class="addBtn" v-on:click="addUser()">
                            Add User&nbsp;<i class="fa fa-user-plus spaceMenu" aria-hidden="true"/>
                          </b-button>
                        </b-form-group>
                        <!--search tab-->
                        <b-form-group label="Search:" class="col-4 searchTab">
                          <b-input-group size="sm">
                            <b-form-input v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                              <b-button class="actionBtn" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                          </b-input-group>
                        </b-form-group>
                      </div>

                      <!-- table list user -->
                      <b-table class="bgTable" :bordered="true" :borderless="true" :items="items"
                               :current-page="currentPage" show-empty
                               :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                               @filtered="onFiltered">
                        <template #cell(actions)="{item}">
                          <b-button variant="outline-primary" size="sm" v-on:click="editUser(item)"
                                    class="mr-1" :disabled="item.status">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                          </b-button>
                          <b-button variant="outline-primary" size="sm"
                                    v-on:click="deleteUser(item)" class="btnDelete" :disabled="item.status">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </b-button>
                        </template>
                      </b-table>
                      <div style="padding-top: 20px">
                        <b-pagination size="md" :total-rows="totalRows" :per-page="perPage"
                                      v-model="currentPage" aria-controls="my-table"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 fixed-sidebar">
            <flash-message class="messageNotice"></flash-message>
            <comp-left-sider/>
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
import Loading from 'vue-loading-overlay'
import Vue from "vue";
Vue.use(Loading)

export default {
  name: 'CompAD_ListUser',
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider, Loading
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
      filter: "",
      totalRows: 1,
      isLoading: true,
      fields: [
        {
          key: 'fullName',
          label: 'Full Name',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'username',
          label: 'Username',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'phone',
          label: 'Phone',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black', width: '150px'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'role',
          label: 'Role',
          thStyle: {background: '#92c3f9', color: 'black', width: '70px'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'actions',
          label: 'Actions',
          thStyle: {background: '#92c3f9', color: 'black', width: '120px'},
          thClass: 'text-center',
          tdClass: 'text-center'
        }
      ],
    }
  },
  methods: {
    // method edit user
    editUser(item) {
      this.$router.push('/admin/user/' + item.id)
    },
    // method delete user
    deleteUser(item) {
      const self = this
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Delete Account</b>" +
        "<br><br>Do you want to delete this account?</p>";
      let options = {
        html: true,
        okText: 'Yes',
        cancelText: 'No',
      };
      this.$dialog
        .confirm(message, options)
        .then(() => {
          item.status = true
          const axios = require('axios');
          axios
            .delete(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_ADMIN_USER + "/" + item.id, {
              headers: {
                'Authorization': 'Bearer ' + self.$session.get("user").token
              }
            })
            .then(response => {
              if (response.status === 200) {
                this.flash('Delete successfully!', 'success', {
                  timeout: 3000
                });
                let index = this.items.indexOf(item)
                this.items.splice(index, 1)
                this.totalRows--
              }
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(function () {
          console.log('Clicked on cancel');
        })
    },
    // method add user
    addUser() {
      this.$router.push('/admin/add')
    },
    // method search
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  created() {
    const self = this
    const axios = require('axios');
    axios
      .get(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_ADMIN_USER, {
        headers: {
          'Authorization': 'Bearer ' + self.$session.get("user").token
        }
      })
      .then(response => {
        if (response.status === 200) {
          response.data.forEach((value) => {
            let object = {
              id: value.id,
              role: value.role,
              username: value.username,
              fullName: value.fullName,
              email: value.email,
              phone: value.phone,
              status: false
            }
            this.items.push(object)
          });
          this.totalRows = response.data.length
          this.isLoading = false
        }
      })
      .catch(error => {
        console.log(error)
      })
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

.loading {
  z-index: 999;
  background-color: rgba(149, 153, 156, 0.36);
}

.btnDelete {
  border-color: red;
  color: red;
}

.btnDelete:hover {
  background-color: red;
  color: #fff;
}

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 600px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.tableTl {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
  color: #2c3e50;
}

.bgFormTable {
  background-color: #f9f9ff
}

.bgTable {
  background-color: white;
}

.actionBtn {
  background-color: #92c3f9;
  color: black;
  font-weight: bold;
  border: none;
}

.actionBtn:hover {
  background-color: #0088ff;
  color: #fff;
}

.addBtn {
  margin-top: 30px;
}
</style>
