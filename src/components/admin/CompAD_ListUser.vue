<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>List Knowledge</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/admin/users">List Knowledge</router-link>
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
            <loading :active.sync="isLoading"
                     :can-cancel="true"
                     :is-full-page="false"></loading>
            <div class="col-lg-10 mx-auto section_gap">
              <div class="card rounded shadow border-0">
                <div class="tableTl">User Table</div>
                <div class="card-body bg-white rounded">
                  <div class="table-responsive">
                    <div style="padding: 20px;">
                      <div class="justify-content-centermy-1 row">
                        <b-form-group horizontal label="Rows per page:" class="col-2">
                          <b-form-select size="sm"
                                         :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15},{text:20,value:20}]"
                                         v-model="perPage">
                          </b-form-select>
                        </b-form-group>

                        <b-form-group label="Search:" class="col-4 searchTab">
                          <b-input-group size="sm">
                            <b-form-input v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                          </b-input-group>
                        </b-form-group>

                        <b-form-group class="col-2">
                          <b-button variant="outline-primary" size="sm" class="addButton" v-on:click="addUser()">Add
                            User
                          </b-button>
                        </b-form-group>

                      </div>
                      <!-- Main table element -->
                      <b-table striped hover :items="items" :current-page="currentPage" show-empty
                               :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                               @filtered="onFiltered">
                        <template #cell(actions)="{item}">
                          <b-button variant="outline-primary" size="sm" v-on:click="editUser(item)"
                                    class="mr-1 actionBtn" :disabled="item.status">
                            Edit Account
                          </b-button>
                          <b-button variant="outline-primary" size="sm"
                                    v-on:click="deleteUser(item)" class="actionBtn" :disabled="item.status">
                            Delete Account
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
            <comp-left-sider/>
            <flash-message class="myCustomClass"></flash-message>
          </div>
        </div>
      </div>
    </section>

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
          key: 'username',
          label: 'Username',
          sortable: true
        },
        {
          key: 'role',
          label: 'Role',
          sortable: true
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ],
    }
  },
  methods: {
    editUser(item) {
      this.$router.push('/admin/user/' + item.id)
    },
    deleteUser(item) {
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Delete Account</b>" +
        "<br><br>Are you sure you want to delete this account?</p>";
      let options = {
        html: true,
        okText: 'Continue',
        cancelText: 'Close',
      };
      this.$dialog
        .confirm(message, options)
        .then(() => {
          item.status = true
          const axios = require('axios');
          axios
            .delete(process.env.VUE_APP_LOCAL + process.env.VUE_APP_DELETE_USER + item.id, {
              headers: {
                'Authorization': 'Bearer ' + this.$session.get("token")
              }
            })
            .then(response => {
              if (response.status === 200) {
                this.flash('Delete successfully', 'success', {
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
    addUser() {
      this.$router.push('/admin/add')
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },

  created() {
    const self = this
    const axios = require('axios');
    axios
      .get(process.env.VUE_APP_LOCAL + process.env.VUE_APP_LIST_USER, {
        headers: {
          'Authorization': 'Bearer ' + self.$session.get("token")
        }
      })
      .then(response => {
        if (response.status === 200) {
          response.data.forEach((value) => {
            let object = {
              id: value.id,
              role: value.role,
              username: value.username,
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
  font-size: 23px;
  margin-top: 30px;
  color: #2c3e50;
}

.searchTab {
  margin-left: 294px;
}

.addButton {
  background-color: #229aeb;
  margin-top: 28px;
  color: #FFFFFF;
  font-weight: bold;
}

.addButton:hover {
  background-color: #229bebad
}

.actionBtn {
  background-color: #95999c;
  color: #FFFFFF;
  font-weight: bold;
  border: none;
}

.actionBtn:hover {
  background-color: #229bebad
}
</style>
