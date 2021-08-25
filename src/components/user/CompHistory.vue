<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Question Answer History</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/history">Question Answer History</router-link>
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
              <div class="card rounded shadow border-0" style="background-color: #f9f9ff">
                <div class="tableTl">History Table</div>
                <div class="card-body rounded">
                  <div class="table-responsive">
                    <div style="padding: 20px;">
                      <div class="justify-content-centermy-1 row">
                        <!--select row per page-->
                        <b-form-group horizontal label="Rows per page:" class="col-lg-8">
                          <b-form-select size="sm" class="col-lg-3"
                                         :options="[{text:5,value:5},{text:10,value:10},
                                         {text:15,value:15},{text:20,value:20}]"
                                         v-model="perPage">
                          </b-form-select>
                        </b-form-group>
                        <!--search tab-->
                        <b-form-group label="Search:" class="col-lg-4">
                          <b-input-group size="sm">
                            <b-form-input v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                              <b-button variant="outline-primary" @click="filter = ''" class="actionBtn">Clear
                              </b-button>
                            </b-input-group-append>
                          </b-input-group>
                        </b-form-group>
                      </div>
                      <!--table history-->>
                      <b-table class="bgTable" :bordered="true" :borderless="true"
                               :items="items.slice().reverse()" :current-page="currentPage" stacked="md"
                               show-empty
                               :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                               @filtered="onFiltered">
                        <template #cell(historyName)="row">
                          <div>{{ row.value }}</div>
                        </template>
                        <template #cell(historyDate)="row">
                          <div>{{ formatDate(row.value) }}</div>
                        </template>
                        <template #cell(action)="{item}">
                          <b-button variant="outline-primary" size="sm" v-on:click="sendData(item)"
                                    class="mr-1">
                            <i class="fa fa-share-square-o" aria-hidden="true"></i>
                          </b-button>
                          <b-button variant="outline-primary" size="sm" v-on:click="downloadHistory(item)"
                                    class="mr-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                          </b-button>
                          <b-button variant="outline-primary" size="sm" v-on:click="deleteHistory(item)"
                                    class="mr-1 btnDelete">
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
            <flash-message class="myCustomClass"></flash-message>
            <comp-left-sider/>
          </div>
        </div>
      </div>
    </section>
    <!--================End content Area =================-->
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
  name: "CompHistory",
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
          key: 'historyName',
          label: 'Name',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black'},
          thClass: 'text-center'
        },
        {
          key: 'historyDate',
          label: 'Date',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black', width: '190px'},
          thClass: 'text-center'
        },
        {
          key: 'subject',
          label: 'Subject',
          sortable: true,
          thStyle: {background: '#92c3f9', color: 'black', width: '150px'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'status',
          label: 'Status',
          thStyle: {background: '#92c3f9', color: 'black', width: '100px'},
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          key: 'action',
          label: 'Action',
          thStyle: {background: '#92c3f9', color: 'black', width: '150px'},
          thClass: 'text-center',
          tdClass: 'text-center'
        }
      ]
    }
  },
  methods: {
    //method delete history
    deleteHistory(item) {
      const self = this
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Delete Question Answer Test</b>" +
        "<br><br>Are you sure you want to delete this test?</p>";
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
            .delete(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_HISTORY + "/" + item.id,
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
                this.totalRows--
              } else {
              }
            })
            .catch(error => {
              console.log(error)
            })
        })
    },
    // method format date
    formatDate(date) {
      let dateFormat = require('dateformat');
      let newDate = new Date(date);
      return dateFormat(newDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    },
    // method  redirect to history detail
    sendData(item) {
      this.$router.push('/history/' + item.id)
    },
    // method download history
    downloadHistory(item) {
      const self = this
      let api = process.env.VUE_APP_HISTORY_DOWNLOAD.replace(/%\w+%/g, function (all) {
        return {"%id%": item.id}[all] || all;
      });
      const axios = require('axios');
      axios
        .get(process.env.VUE_APP_BACKEND_SERVER + api,
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
          link.setAttribute('download', item.historyName);
          document.body.appendChild(link);
          link.click();
        })
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
      .get(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_HISTORY, {
        headers: {
          'Authorization': 'Bearer ' + self.$session.get("user").token
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          this.items = response.data
          this.totalRows = response.data.length
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
.btnDelete {
  border-color: red;
  color: red;
}

.btnDelete:hover {
  background-color: red;
  color: #fff;
}

.bgTable {
  background-color: white;
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
  font-size: 20px;
  margin-top: 30px;
  color: #2c3e50;
}

.searchTab {
  margin-left: 390px;
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
</style>
