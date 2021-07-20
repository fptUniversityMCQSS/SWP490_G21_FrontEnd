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

                        <b-form-group label="Search:" class="col-4 searchTab">
                          <b-input-group size="sm">
                            <b-form-input v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                          </b-input-group>
                        </b-form-group>

                      </div>
                      <!-- Main table element -->
                      <b-table striped hover :items="items" :current-page="currentPage" stacked="md"
                               show-empty
                               :per-page="perPage" :filter="filter" :fields="fields" id="my-table"
                               @filtered="onFiltered">
                        <template #cell(knowledgeDate)="row">
                         {{formatDate(row.value)}}
                        </template>
                        <template #cell(actions)="{item}">
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
      currentPage: 1,
      perPage: 5,
      filter: "",
      totalRows: 1,
      isLoading: true,
      fields: [
        {
          key: 'knowledgeName',
          label: 'Name',
          sortable: true
        },
        {
          key: 'knowledgeDate',
          label: 'Date',
          sortable: true
        },
        {
          key: 'Username',
          label: 'Username',
          sortable: true,
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ],
    }
  },
  methods: {
    formatDate(date) {
      let dateFormat = require('dateformat');
      let newDate = new Date(date);
      return dateFormat(newDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    },
    downloadKnowledge(item) {
      window.location.href = "http://localhost:1323/knowledge/" + item.knowledgeId
    },
    deleteKnowledge(item) {
      const axios = require('axios');
      axios
        .delete('http://localhost:1323/knowledge/' + item.knowledgeId)
        .then(() => {
          alert("DELETE SUCCESS!")
          let index = this.items.indexOf(item)
          this.items.splice(index, 1)
          this.totalRows--
        })
        .catch(error => {
          console.log(error)
        })
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  created() {
    const axios = require('axios');
    axios
      .get('http://localhost:1323/knowledge')
      .then(response => {
        this.items = response.data
        this.totalRows = response.data.length
        this.isLoading = false;
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
  margin-left: 390px;
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
