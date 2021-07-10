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
    <section class="cat_product_area section_gap">
      <div class="container-fluid">
        <div class="row flex-row-reverse">
          <div class="col-lg-10 py-5">
            <div class="col-lg-11 mx-auto">
              <div class="wrappers textColor">
                <p>Details about your multiple choice test</p>
                <div v-for="item in items.Questions" :key="item.id">
                  <p class="text-justify h5 pb-2 font-weight-bold">{{ item.Content }}</p>
                  <div class="options py-3">
                    <label class="rounded p-2 option" v-for="option in item.Options">{{ option.OptionKey }}.
                      {{ option.OptionContent }}</label>
                    <b>Correct Answer</b>
                    <p class="mt-2 mb-4 pl-2 text-justify">{{ item.Answer.OptionKey }}.
                      {{ item.Answer.OptionContent }}</p>
                  </div>
                </div>
                <router-link to="/history">
                  <b-button class="btnUpload">Finish Review</b-button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-2 py-5">
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
  data() {
    return {
      items: [],
      historyId: 2,
      abc: null
    }
  },
  methods: {
    getData(dt) {
      this.abc = dt
      this.historyId = dt
    },
  },
  created() {
    this.$bus.$on('passID', this.getData)
    console.log(this.abc)
    console.log(this.historyId)
    const axios = require('axios');
    axios
      .get('http://localhost:1323/history/' + this.historyId, {
        headers: {
          'Authorization': 'Bearer ' + this.$session.get("token")
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

.textColor {
  color: #2c3e50;
}

.wrappers {
  max-width: 700px;
  margin: 10px auto;
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
