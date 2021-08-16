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
              <div class="card rounded shadow border-0">
                <div class="tableTl">Knowledge Table</div>
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

                        <b-form-group v-if="this.$session.get('role') === 'staff'" label="Knowledge view mode:"
                                      class="col-3">
                          <b-form-select size="sm" v-on:change="changeMode"
                                         :options="[{text:'Knowledge of current account',value:'current'},{text:'All knowledge',value:'all'}]"
                                         v-model="optionView">
                          </b-form-select>
                        </b-form-group>

                        <b-form-group v-if="this.$session.get('role') === 'staff'" label="Search:"
                                      class="col-4 searchTab">
                          <b-input-group size="sm">
                            <b-form-input v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                              <b-button  @click="filter = ''" variant="outline-primary" class="actionBtn">Clear</b-button>
                            </b-input-group-append>
                          </b-input-group>
                        </b-form-group>

                        <b-form-group
                          v-if="this.$session.get('role') === 'admin' || this.$session.get('role') === 'user'"
                          label="Search:" class="col-4 searchTab1">
                          <b-input-group size="sm">
                            <b-form-input v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                              <b-button  @click="filter = ''" variant="outline-primary" class="actionBtn">Clear</b-button>
                            </b-input-group-append>
                          </b-input-group>
                        </b-form-group>
                      </div>


                      <div v-if="checkRole === 'staff'">
                        <!-- Main table current -->
                        <b-table v-if="optionView === 'current'" :bordered="true" :borderless="true" :items="items"
                                 :current-page="currentPage"
                                 stacked="md"
                                 show-empty
                                 :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                                 @filtered="onFiltered">

                          <template #cell(knowledgeName)="row">
                            <div class="w-100 truncate">{{ row.value }}</div>
                          </template>

                          <template #cell(knowledgeDate)="row">
                            <div class="w-100 truncate"> {{ formatDate(row.value) }}</div>
                          </template>
                          <template #cell(actions)="{item}">
                            <col :style="{ width: '50px' }">
                            <b-button variant="outline-primary" size="sm" v-on:click="downloadKnowledge(item)"
                                      class="mr-1 actionBtn">
                              Download
                            </b-button>
                            <b-button variant="outline-primary" size="sm" v-on:click="deleteKnowledge(item)"
                                      class="actionBtn">
                              Delete
                            </b-button>
                          </template>
                        </b-table>
                        <!--Main table all -->
                        <b-table v-if="optionView ==='all'" striped hover :items="itemAll" :current-page="currentPage"
                                 stacked="md"
                                 show-empty
                                 :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                                 @filtered="onFiltered">
                          <template #cell(knowledgeName)="row">
                            <div class="w-100 truncate">{{ row.value }}</div>
                          </template>

                          <template #cell(knowledgeDate)="row">
                            <div class="w-100 truncate"> {{ formatDate(row.value) }}</div>
                          </template>
                          <template #cell(actions)="{item}">
                            <b-button variant="outline-primary" size="sm" v-on:click="downloadKnowledge(item)"
                                      class="mr-1 actionBtn">
                              Download
                            </b-button>
                          </template>
                        </b-table>
                      </div>
                      <div v-else>
                        <b-table :bordered="true" :borderless="true" :items="itemAll" :current-page="currentPage"
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
                              Download
                            </b-button>
                            <b-button v-if="checkRole === 'admin'" variant="outline-primary" size="sm" v-on:click="deleteKnowledge(item)"
                                      class="actionBtn">
                              Delete
                            </b-button>
                          </template>
                        </b-table>
                      </div>

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
  name: 'CompListKnowledge',
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider, Loading
  },
  data() {
    return {
      items: [],
      itemAll: [],
      checkRole: this.$session.get('role'),
      currentPage: 1,
      perPage: 5,
      filter: "",
      totalRows: 1,
      isLoading: true,
      optionView: 'current',
      fields: [
        {
          key: 'knowledgeName',
          label: 'Name',
          sortable: true,
          thStyle: {background: '#87CEFA', color: 'black'}
        },
        {
          key: 'knowledgeDate',
          label: 'Date',
          sortable: true,
          thStyle: {background: '#87CEFA', color: 'black'}
        },
        {
          key: 'status',
          label: 'Status',
          thStyle: {background: '#87CEFA', color: 'black'}
        },
        {
          key: 'actions',
          label: 'Actions',
          thStyle: {background: '#87CEFA', color: 'black'}
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
      const axios = require('axios');
      axios
        .get(globalURL.host + process.env.VUE_APP_DOWNLOAD_KNOWLEDGE + item.knowledgeId,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer ' + this.$session.get("token"),
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
            .delete(globalURL.host + process.env.VUE_APP_DELETE_KNOWLEDGE + item.knowledgeId,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + this.$session.get("token"),
                }
              })
            .then(response => {
              if (response.status === 200) {
                this.flash('Delete successfully', 'success', {
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
              }
              else{

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
    const axios = require('axios');
    let self = this;
    axios
      .get(globalURL.host + process.env.VUE_APP_LIST_KNOWLEDGE,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + this.$session.get("token"),
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
          if (self.$session.get('role') === 'admin' || self.$session.get('role') === 'user') {
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
.btnClear {
  background-color: #87CEFA;
  color: black;
  font-weight: bold;
}

.btnClear:hover {
  background-color: #00BFFF;
}

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
  font-size: 23px;
  margin-top: 30px;
  color: #2c3e50;
}

.searchTab {
  margin-left: 200px;
}

.searchTab1 {
  margin-left: 390px;
}

.actionBtn {
  background-color: #87CEFA;
  color: black;
  font-weight: bold;
  border: none;
}

.actionBtn:hover {
  background-color: #00BFFF
}
</style>
