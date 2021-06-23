<template>
  <div>
    <comp-header-login/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>List Knowledges</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/knowledge">List Knowledges</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--    <table class="table">-->
    <!--      <thead>-->
    <!--      <tr>-->
    <!--        <th scope="col">Name</th>-->
    <!--        <th scope="col">Date</th>-->
    <!--        <th scope="col">Username</th>-->
    <!--      </tr>-->
    <!--      </thead>-->
    <!--      <tbody>-->
    <!--      <tr v-for="data in info" :key="data.id">-->
    <!--        <td>{{ data.Name}}</td>-->
    <!--        <td>{{ data.Date}}</td>-->
    <!--        <td>{{ data.Username}}</td>-->
    <!--      </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->
    <!--    <b-table striped hover :items="info"></b-table>-->

    <div class="container py-5">
      <div class="row py-5">
        <div class="col-lg-10 mx-auto">
          <div class="card rounded shadow border-0">
            <div class="ttable">Table List Knowledges</div>
            <div class="card-body p-5 bg-white rounded">
              <div class="table-responsive">
                <table id="example" style="width:100%" class="table table-striped table-bordered">
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
    </div>

    <comp-footer/>
  </div>
</template>

<script>
import CompHeaderLogin from "./CompHeaderLogin";
import CompFooter from "./CompFooter";

export default {
  name: 'CompListKnowledges',
  components: {
    CompHeaderLogin, CompFooter
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
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data
        // this.info = JSON.parse(this.info)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.ttable {
  text-align: center;
  font-weight: bold;
  font-size: 23px;
  margin-top: 30px;
  color: #2c3e50;
}
</style>
