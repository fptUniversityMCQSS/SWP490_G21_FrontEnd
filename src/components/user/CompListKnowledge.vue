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
              <router-link to="/knowledge">List Knowledge</router-link>
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
              <div class="card rounded shadow border-0 bgFormTable">
                <div class="tableTl">Knowledge Table</div>
                <div class="card-body rounded">
                  <div class="table-responsive">
                    <div style="padding: 20px">
                      <div class="justify-content-centermy-1 row">

                        <b-form-group label="Rows per page:" :class="[role === 'staff' ? 'col-lg-2' : 'col-lg-8']">
                          <b-form-select size="sm" :class="[role === 'staff' ? 'col-lg-12' : 'col-lg-3']"
                                         :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15},{text:20,value:20}]"
                                         v-model="perPage">
                          </b-form-select>
                        </b-form-group>
                        <b-form-group v-if="role === 'staff'" label="Knowledge view mode:"
                                      class="col-lg-6">
                          <b-form-select size="sm" v-on:change="changeMode" class="col-lg-6"
                                         :options="[{text:'Knowledge of current account',value:'current'},{text:'All knowledge',value:'all'}]"
                                         v-model="optionView">
                          </b-form-select>
                        </b-form-group>

                        <b-form-group label="Search:" class="col-lg-4">
                          <b-input-group size="sm">
                            <b-form-input v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                              <b-button @click="filter = ''" variant="outline-primary" class="actionBtn">Clear
                              </b-button>
                            </b-input-group-append>
                          </b-input-group>
                        </b-form-group>
                      </div>

                      <div v-if="role === 'staff'">
                        <!-- Main table current -->
                        <b-table v-if="optionView === 'current'" class="bgTable" :bordered="true" :borderless="true"
                                  :items="items"
                                 :current-page="currentPage"
                                 stacked="md"
                                 show-empty
                                 :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                                 @filtered="onFiltered">

                          <template #cell(knowledgeName)="row">
                            <div>{{ row.value }}</div>
                          </template>

                          <template #cell(knowledgeDate)="row">
                            <div> {{ formatDate(row.value) }}</div>
                          </template>
                          <template #cell(actions)="{item}">
                            <col :style="{ width: '50px' }">
                            <b-button variant="outline-primary" size="sm" v-on:click="downloadKnowledge(item)"
                                      class="mr-1 actionBtn">
                              Download <i class="fa fa-download" aria-hidden="true"></i>
                            </b-button>
                            <b-button variant="outline-primary" size="sm" v-on:click="deleteKnowledge(item)"
                                      class="actionBtn">
                              Delete&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>
                            </b-button>
                          </template>
                        </b-table>
                        <!--Main table all -->
                        <b-table v-if="optionView ==='all'" class="bgTable" :bordered="true" :borderless="true"
                                 :items="itemAll" :current-page="currentPage"
                                 stacked="md"
                                 show-empty
                                 :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                                 @filtered="onFiltered">
                          <template #cell(knowledgeName)="row">
                            <div>{{ row.value }}</div>
                          </template>

                          <template #cell(knowledgeDate)="row">
                            <div> {{ formatDate(row.value) }}</div>
                          </template>
                          <template #cell(actions)="{item}">
                            <b-button variant="outline-primary" size="sm" v-on:click="downloadKnowledge(item)"
                                      class="mr-1 actionBtn">
                              Download <i class="fa fa-download" aria-hidden="true"></i>
                            </b-button>
                          </template>
                        </b-table>
                      </div>
                      <div v-else>
                        <b-table class="bgTable" :bordered="true" :borderless="true" :items="itemAll"
                                 :current-page="currentPage"
                                 stacked="md"
                                 show-empty
                                 :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                                 @filtered="onFiltered">

                          <template #cell(knowledgeName)="row">
                            <div>{{ row.value }}</div>
                          </template>

                          <template #cell(knowledgeDate)="row">
                            <div> {{ formatDate(row.value) }}</div>
                          </template>
                          <template #cell(actions)="{item}">
                            <b-button variant="outline-primary" size="sm" v-on:click="downloadKnowledge(item)"
                                      class="mr-1">
                              Download <i class="fa fa-download" aria-hidden="true"></i>
                            </b-button>
                            <b-button v-if="role === 'admin'" variant="outline-primary" size="sm"
                                      v-on:click="deleteKnowledge(item)"
                                      class="btnDelete">
                              Delete&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>
                            </b-button>
                          </template>
                        </b-table>
                      </div>
                      <div style="padding-top: 20px;">
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

          </div>
        </div>
      </div>
    </section>
    <flash-message class="flash__message"></flash-message>
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
  name: 'CompListKnowledge',
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider, Loading
  },
  data() {
    return {
      items: [],
      itemAll: [],
      currentPage: 1,
      perPage: 5,
      filter: "",
      totalRows: 1,
      role: '',
      isLoading: true,
      optionView: 'current',
      fields: [
        {
          key: 'knowledgeName',
          label: 'Name',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black', width: '290px'},
          thClass: 'text-center'
        },
        {
          key: 'knowledgeDate',
          label: 'Date',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black', width: '200px'},
          thClass: 'text-center'
        },
        {
          key: 'status',
          label: 'Status',
          thStyle: {background: '#92c3f9', color: 'black', width: '100px'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'actions',
          label: 'Actions',
          thStyle: {background: '#92c3f9', color: 'black'},
          thClass: 'text-center',
          tdClass: 'text-center'
        }
      ],
    }
  },
  methods: {
    changeMode() {
      this.currentPage = 1
      if (this.optionView === 'current') {
        this.totalRows = this.items.length
      } else {
        this.totalRows = this.itemAll.length
      }
    },
    formatDate(date) {
      let dateFormat = require('dateformat');
      let newDate = new Date(date);
      return dateFormat(newDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    },
    downloadKnowledge(item) {
      const self = this
      const axios = require('axios');
      axios
        .get(globalURL.host + process.env.VUE_APP_KNOWLEDGE + "/" + item.knowledgeId,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer ' + self.$session.get("user").token
            }, responseType: 'blob'
          })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', item.knowledgeName);
          document.body.appendChild(link);
          link.click();
        })
    },
    deleteKnowledge(item) {
      const self = this
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Delete Knowledge</b>" +
        "<br><br>Are you sure you want to delete this knowledge?</p>";
      let options = {
        html: true,
        okText: 'Continue',
        cancelText: 'Close',
      };
      this.$dialog
        .confirm(message, options)
        .then(() => {
          const axios = require('axios');
          axios
            .delete(globalURL.host + process.env.VUE_APP_KNOWLEDGE + "/" + item.knowledgeId,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + self.$session.get("user").token
                }
              })
            .then(response => {
              if (response.status === 200) {
                this.flash('Delete successfully!', 'success', {
                  timeout: 3000
                });
                let indexCurrent = this.items.indexOf(item)
                this.items.splice(indexCurrent, 1)
                this.itemAll.forEach((value) => {
                  if (value.knowledgeId === item.knowledgeId) {
                    let indexAll = this.itemAll.indexOf(value)
                    this.itemAll.splice(indexAll, 1)
                  }
                })
                this.totalRows--
              } else {

              }
            })
            .catch(error => {
              console.log(error)
            })
        })
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  created() {
    const self = this;
    const axios = require('axios');
    this.role = self.$session.get('user').role
    axios
      .get(globalURL.host + process.env.VUE_APP_KNOWLEDGE,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + self.$session.get("user").token
          }
        })
      .then(response => {
        if (response.status === 200) {
          response.data.forEach((value) => {
            if (this.$session.get('username') === value.Username) {
              let object = {
                username: value.Username,
                knowledgeDate: value.knowledgeDate,
                knowledgeId: value.knowledgeId,
                knowledgeName: value.knowledgeName
              }
              this.items.push(object)
            }
          });
          this.itemAll = response.data
          if (self.$session.get('user').role === 'admin' || self.$session.get('user').role === 'user') {
            this.totalRows = this.itemAll.length
          } else {
            this.totalRows = this.items.length
          }
          this.isLoading = false;
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

table.table {
  table-layout: fixed;
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

.btnDelete{
  border-color: red;
  color: red;
}
.btnDelete:hover{
  background-color: red;
  color: #fff;
}

.bgFormTable{
  background-color: #f9f9ff
}

.bgTable {
  background-color: white;
}

</style>
