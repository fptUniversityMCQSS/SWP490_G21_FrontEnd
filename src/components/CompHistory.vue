<template>
  <div>
    <comp-header-login/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>History Question & Answer</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/history">History Question & Answer</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <div class="container py-5">
      <div class="row py-5">
        <div class="col-lg-10 mx-auto">
          <div class="card rounded shadow border-0">
            <div class="tableTl">Table List history</div>
            <div class="card-body p-5 bg-white rounded">
              <div class="table-responsive">
                <table id="example" style="width:100%" class="table table-striped table-bordered">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in items" :key="item.title">
                    <td>
                      <router-link to="/history/detail">{{ item.title }}</router-link>
                    </td>
                    <td>{{ item.date }}</td>
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
  name: "CompHistory",
  components: {
    CompHeaderLogin, CompFooter
  },
  data() {
    return {
      items: [
        {
          title: 'History 1',
          date: '10/06/2021'
        },
        {
          title: 'History 2',
          date: '11/06/2021'
        },
        {
          title: 'History 3',
          date: '12/06/2021'
        },
        {
          title: 'History 4',
          date: '13/06/2021'
        },
        {
          title: 'History 5',
          date: '14/06/2021'
        }
      ]
    }
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
