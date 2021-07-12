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
    <section class="cat_product_area section_gap">
      <div class="container-fluid">
        <div class="row flex-row-reverse">
          <div class="col-lg-10 py-5">
            <div class="col-lg-11 mx-auto">
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
                          <b-button variant="outline-primary" size="sm" class="addButton" v-on:click="addUser()">Add User</b-button>
                        </b-form-group>

                      </div>
                      <!-- Main table element -->
                      <b-table striped hover :items="items" :current-page="currentPage" show-empty
                               :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                               @filtered="onFiltered">
                        <template #cell(username)="row">
                          {{ row.value }}
                        </template>
                        <template #cell(role)="row">
                          {{ row.value }}
                        </template>
                        <template #cell(actions)="{item}">
                          <b-button variant="outline-primary" size="sm" v-on:click="editUser(item)" class="mr-1 actionBtn">
                            Edit User
                          </b-button>
                          <b-button variant="outline-primary" size="sm" v-on:click="deleteUser(item)" class="actionBtn">
                            Delete User
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
          <div class="col-lg-2 py-5">
            <comp-left-sider/>
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
import store from "../../store";

export default {
  name: 'CompAD_ListUser',
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
      filter: "",
      totalRows: 1,
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
      store.commit('getUserId', item)
      this.$router.push('/admin/edit')
    },
    deleteUser(item) {
      const self = this
      if (confirm('Do you really want to delete this account? You will not be able to restore this data again!"')) {
        const axios = require('axios');
        axios
          .delete('http://localhost:1323/admin/user/' + item.id, {
            headers: {
              'Authorization': 'Bearer ' + self.$session.get("token")
            }
          })
          .then(() => {
            alert("Delete Successfully !")
            let index = this.items.indexOf(item)
            this.items.splice(index, 1)
            this.totalRows--
          })
          .catch(error => {
            console.log(error)
          })
      }
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
      .get('http://localhost:1323/admin/user', {
        headers: {
          'Authorization': 'Bearer ' + self.$session.get("token")
        }
      })
      .then(response => {
        this.items = response.data
        this.totalRows = response.data.length
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
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
