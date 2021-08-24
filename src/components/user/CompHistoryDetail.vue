<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>History Detail</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/history">History Detail</router-link>
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
          <div class="col-lg-1 py-5 tblAns">
            <!-- table overview all answers-->
            <b-table v-if="!isLoading" striped hover :items="items.Questions" :fields="fields" class="scrollbar">
              <template #cell(Number)="{item}">
                {{ item.Number }}
              </template>
              <template #cell(Answer)="{item}">
                {{ item.Answer }}
              </template>
            </b-table>
          </div>

          <!-- detail question answer-->
          <div class="col-lg-7 py-5">
            <div class="detailAns">
              <h3>{{ items.Name }}</h3>
              <p>{{ formatDate(items.Date) }}&nbsp;&nbsp;&nbsp;&nbsp;
                <b-button v-if="!isLoading" variant="outline-primary" size="sm" v-on:click="downloadDetail"
                          class="mr-1 actionBtn">
                  Download <i class="fa fa-download" aria-hidden="true"></i>
                </b-button>
              <div v-for="item in items.Questions" :key="item.id">
                <p class="text-justify h5 pb-2 font-weight-bold" style="white-space: pre-line">
                  {{ item.Number + '. ' + item.Content }}</p>
                <div class="options py-3">
                  <label class="rounded p-2 option" v-for="option in item.Options">{{ option.OptionKey }}.
                    {{ option.OptionContent }}</label>
                  <b>Correct Answer</b>
                  <p v-if="item.Answer === ''" class="mt-2 mb-4 pl-2 text-justify">Thinking...</p>
                  <p v-else class="mt-2 mb-4 pl-2 text-justify">{{
                      item.Answer.toUpperCase() + ". " + item.AnswerContent
                    }}</p>
                </div>
              </div>
              <router-link to="/history" v-if="!isLoading">
                <b-button variant="outline-primary" class="btnUpload">Finish View</b-button>
              </router-link>
            </div>
          </div>
          <loading :active.sync="isLoading"
                   :can-cancel="true"
                   :is-full-page="false"></loading>
          <div class="col-lg-2 fixed-sidebar">
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
import CompHeader from "../frame/CompHeader";
import CompFooter from "../frame/CompFooter";
import CompBackToTop from "../frame/CompBackToTop";
import CompLeftSider from "../frame/CompLeftSider";
import Loading from 'vue-loading-overlay'
import Vue from "vue";

Vue.use(Loading)

export default {
  name: "CompHistoryDetail",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider, Loading
  },
  methods: {
    // method format date
    formatDate(date) {
      let dateFormat = require('dateformat');
      let newDate = new Date(date);
      try {
        return dateFormat(newDate, "dddd, mmmm dS, yyyy, hh:MM:ss TT");
      } catch (e) {
      }
      return ""
    },
    //method download history detail
    downloadDetail() {
      let id = this.$route.params.id
      let api = process.env.VUE_APP_HISTORY_DOWNLOAD.replace(/%\w+%/g, function (all) {
        return {"%id%": id}[all] || all;
      });
      const axios = require('axios');
      axios
        .get(globalURL.host + api,
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
          link.setAttribute('download', this.items.Name);
          document.body.appendChild(link);
          link.click();
        })
    }
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
          key: 'Number',
          label: 'Question',
          thStyle: {background: '#7386D5', color: '#ffffff'}
        },
        {
          key: 'Answer',
          label: 'Answer',
          thStyle: {background: '#7386D5', color: '#ffffff'}
        }
      ],
    }
  },
  created() {
    const self = this;
    const axios = require('axios');
    axios
      .get(globalURL.host + process.env.VUE_APP_HISTORY + "/" + self.$route.params.id, {
        headers: {
          'Authorization': 'Bearer ' + self.$session.get("user").token
        }
      })
      .then(response => {
        if (response.status === 200) {
          let historyDetail = {
            Date: response.data.Date,
            Id: response.data.Id,
            Name: response.data.Name,
            NumberOfQuestions: response.data.NumberOfQuestions,
            Questions: [],
            Subject: response.data.Subject,
            User: response.data.User
          }
          response.data.Questions.forEach((value) => {
            let question = {
              Answer: value.Answer,
              Content: value.Content,
              Number: value.Number,
              Options: value.Options,
              AnswerContent: ''
            }
            question.Options.forEach((value1) => {
              if (value1.OptionKey === question.Answer.toUpperCase()) {
                question.AnswerContent = value1.OptionContent
              }
            })
            historyDetail.Questions.push(question)
          })
          this.items = historyDetail
        }
        this.isLoading = false;
      })
      .catch(error => {
        console.log(error)
      })
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

.tblAns {
  position: -webkit-sticky;
  position: sticky;
  height: 600px;
  color: #fff;
  top: 60px;
  z-index: 999;
  padding-left: 70px;
  margin-right: auto;
}

.scrollbar {
  position: relative;
  height: 510px;
  width: 170px;
  overflow: auto;
  display: block;
}

.detailAns {
  color: #2c3e50;
  padding-left: 100px;
}

.wrappers {
  max-width: 700px;
  margin: auto;
  font-size: 15px;
}

b {
  font-size: 15px;
  font-weight: bolder
}

.option {
  display: block;
  height: 50px;
  background-color: #f4f4f4;
  position: relative;
  width: 100%
}

.option:hover {
  background-color: #e8e8e8;
  cursor: pointer
}

.option input {
  position: absolute;
  opacity: 0;
  cursor: pointer
}

p.mb-4 {
  border-left: 3px solid green
}

.btnUpload {
  width: 200px;
  height: 50px;
  background-color: #229aeb;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  margin-left: 30%;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #229bebad
}
</style>
