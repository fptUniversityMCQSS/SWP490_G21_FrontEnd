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
              <router-link to="/home">Home</router-link>
              <router-link to="/history">History Detail</router-link>
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
          <div class="col-lg-1 py-5 left">
            <b-table striped hover :items="items.Questions" :fields="fields">
              <template #cell(Number)="{item}">
                {{ item.Number }}
              </template>
              <template #cell(Answer)="{item}">
                {{ item.Answer }}
              </template>
            </b-table>
          </div>
          <div class="col-lg-8 py-5">
            <div class="wrappers textColor">
              <h3>{{ items.Name }}</h3>
              <p>{{ formatDate(items.Date) }}&nbsp;&nbsp;&nbsp;&nbsp;
                <b-button variant="outline-primary" size="sm" v-on:click="downloadDetail"
                          class="mr-1 actionBtn">
                  Download
                </b-button>
              <div v-for="item in items.Questions" :key="item.id">
                <p class="text-justify h5 pb-2 font-weight-bold" style="white-space: pre-line">
                  {{ item.Number + '. ' + item.Content }}</p>
                <div class="options py-3">
                  <label class="rounded p-2 option" v-for="option in item.Options">{{ option.OptionKey }}.
                    {{ option.OptionContent }}</label>
                  <b>Correct Answer</b>
                  <p class="mt-2 mb-4 pl-2 text-justify">{{ item.Answer }}</p>
                </div>
              </div>
              <router-link to="/history">
                <b-button variant="outline-primary" class="btnUpload">Finish Review</b-button>
              </router-link>
            </div>
          </div>
          <div class="col-lg-2  fixed-sidebar">
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

export default {
  name: "CompHistoryDetail",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  methods: {
    formatDate(date) {
      let dateFormat = require('dateformat');
      let newDate = new Date(date);
      return dateFormat(newDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    },
    downloadDetail() {
      let api = process.env.VUE_APP_HISTORY_DOWNLOAD.slice(0, 9) + this.$route.params.id + process.env.VUE_APP_HISTORY_DOWNLOAD.slice(12)
      window.location.href = process.env.VUE_APP_LOCAL + api
    }
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
          key: 'Number',
          label: 'Question'
        },
        {
          key: 'Answer',
          label: 'Answer'
        }
      ],
    }
  },
  created() {
    const self = this;
    const axios = require('axios');
    axios
      .get(process.env.VUE_APP_LOCAL + process.env.VUE_APP_HISTORY_DETAIL + self.$route.params.id, {
        headers: {
          'Authorization': 'Bearer ' + self.$session.get("token")
        }
      })
      .then(response => {
        this.items = response.data
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

.textColor {
  color: #2c3e50;
}

.wrappers {
  max-width: 700px;
  margin: auto;
  font-size: 15px;
}

.left {
  width: 100%;
  padding-right: 50px;
  margin-right: auto;
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
