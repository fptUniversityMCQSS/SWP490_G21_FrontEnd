<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>About us</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/user">About us</router-link>
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
          <div :class="[role === '' ? 'col-lg-12' : 'col-lg-10']">
            <div class="col-lg-8 mx-auto section_gap py-5 about">

              <h3>About us</h3>
              <p class="py-5"> Toogl promotes their core value of remote working throughout their website and their
                About Us page is a
                great example of how you can promote your core values too. As a core value to their business, their
                About
                Us page is focused around this global team and the productivity that they bring to the company. Not only
                do they put their team front and center, but they share how the team works so that someone interested in
                applying for a position with the company can be sure they will enjoy working for the company before they
                start.
                Toogl promotes their core value of remote working throughout their website and their About Us page is a
                great example of how you can promote your core values too. As a core value to their business, their
                About
                Us page is focused around this global team and the productivity that they bring to the company. Not only
                do they put their team front and center, but they share how the team works so that someone interested in
                applying for a position with the company can be sure they will enjoy working for the company before they
                start.
              </p>
              <div class="flex-row-reverse">
                <div class="col-lg-5" style="float: left">
                  <div>
                    <i class="fa fa-map-marker" aria-hidden="true" style="color: #2faae6"></i>&nbsp;
                    <span>FPT University, Hoa Lac, Ha Noi</span>
                  </div>
                  <div>
                    <i class="fa fa-phone" aria-hidden="true" style="color: #2faae6"></i>&nbsp;
                    <span>0364716284</span>
                  </div>
                  <div>
                    <i class="fa fa-envelope" aria-hidden="true" style="color: #2faae6"></i>&nbsp;
                    <span>fptquestionanswering@gmail.com</span>
                  </div>
                </div>

                <div class="col-lg-4" style="float: left">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fa fa-facebook" style="font-size:24px;color:#007fff"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a href="https://plus.google.com/" target="_blank">
                    <i class="fa fa-google-plus-square" style="font-size:25px;color:#ff3e3f"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a href="https://twitter.com/" target="_blank">
                    <i class="fa fa-twitter" style="font-size:30px;color:#2faae6"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a href="https://www.youtube.com/" target="_blank">
                    <i class="fa fa-youtube-play" style="font-size:30px;color:#e43434"></i>
                  </a>
                </div>
              </div>


            </div>
          </div>
          <div v-if="role !== ''" class="col-lg-2 fixed-sidebar">
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

  name: "CompAbout",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      role: ''
    }
  },
  created() {
    this.role = this.$session.get('user').role
  }
}
</script>

<style scoped>

.about {
  color: black;
  margin-bottom: 80px;
}

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 600px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.btnUpload {
  width: 180px;
  height: 45px;
  background-color: #229aeb;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #229bebad
}

.bd-r {
  border-radius: 5px;
  margin-left: 70px;
}

.b-select {
  border: none;
  padding-left: 22px;
  color: #6c757d;
}
</style>
