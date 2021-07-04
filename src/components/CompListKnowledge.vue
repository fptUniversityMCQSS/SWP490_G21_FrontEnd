<template>
  <div>
    <comp-header-login/>
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
    <section class="cat_product_area section_gap">
      <div class="container-fluid">
        <div class="row flex-row-reverse">
          <div class="col-lg-10 py-5" style="padding-left: 30px">
            <div class="col-lg-11 mx-auto">
              <div class="card rounded shadow border-0">
                <div class="tableTl">Knowledges Table</div>
                <div class="card-body p-5 bg-white rounded">
                  <div class="table-responsive">
                    <table id="tableData" style="width:100%" class="table table-striped table-bordered">
                      <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Username</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in info" :key="data.id">
                        <td>{{ data.knowledgeName }}</td>
                        <td>{{ data.knowledgeDate }}</td>
                        <td>{{ data.Username }}</td>
                      </tr>
                      </tbody>
                    </table>
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
    <!--================End Content Area =================-->

    <comp-back-to-top/>
    <comp-footer/>
  </div>
</template>

<script>
import CompHeaderLogin from "./CompHeaderLogin";
import CompFooter from "./CompFooter";
import CompBackToTop from "./CompBackToTop";
import CompLeftSider from "./CompLeftSider";

export default {
  name: 'CompListKnowledge',
  components: {
    CompHeaderLogin, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      info: null,
    }
  },
  created() {
    const axios = require('axios');
    axios
      .get('http://localhost:1323/knowledge')
      .then(response => {
        this.info = response.data
        this.exampleItems = response.data
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
</style>
