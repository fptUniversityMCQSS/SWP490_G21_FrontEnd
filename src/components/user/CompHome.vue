<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section v-if="username !== ''" class="home_banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2 class="contentBannerH2">The new way to learn properly!</h2>
            <h2 class="contentBannerH3">Multiple choices question solving system</h2>
            <h2 class="contentBannerP">Join us to develop more convenient learning environment</h2>
            <b-button v-on:click="getStarted" class="btnUpload">Get Started</b-button>
          </div>
        </div>
      </div>
    </section>

    <section v-else-if="username === ''" class="home_banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2 class="contentBannerH2">The new way to learn properly!</h2>
            <h2 class="contentBannerH3">Multiple choices question solving system</h2>
            <h2 class="contentBannerP">Join us to develop more convenient learning environment</h2>
            <b-button v-on:click="getStarted" class="btnUpload">Get Started</b-button>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area homeContent">
      <div>
        <div class="row flex-row-reverse">
          <div class="col-lg-12 py-5">
            <div>

              <section class="site-section">
                <div class="container">
                  <div class="row justify-content-center" data-aos="fade-up">
                    <div class="col-lg-7 text-center heading-section mb-5">
                      <h2>Welcome to DeepQuiz</h2>
                      <p>We provide a more efficient and reliable solution of solving multiple-choice questions</p>
                    </div>
                  </div>

                  <div class="row hover-1-wrap mb-5 mb-lg-0">
                    <div class="col-12">
                      <div class="row">
                        <div class="mb-4 mb-lg-0 col-lg-6 order-lg-2" data-aos="fade-right">
                          <a href="#" class="hover-1">
                            <img src="../../assets/img/product/home_img3.jpg" alt="Image" class="img-fluid imgHome">
                          </a>
                        </div>
                        <div class="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1" data-aos="fade-left">
                          <h3>Question Answer</h3>
                          <p class="mb-4">Solves multiple-choices questions using our Deep Learning AI, enhances your
                            learning experiences.</p>
                          <p>
                            <b-button v-on:click="QA()" class="btnUpload">Feature Access</b-button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row hover-1-wrap mb-5 mb-lg-0">
                    <div class="col-12">
                      <div class="row">
                        <div class="mb-4 mb-lg-0 col-lg-6" data-aos="fade-left">
                          <a href="#" class="hover-1">
                            <img src="../../assets/img/product/home_img1.jpg" alt="Image" class="img-fluid imgHome">
                          </a>
                        </div>
                        <div class="col-lg-5 ml-auto align-self-center" data-aos="fade-right">
                          <h3>Knowledge</h3>
                          <p class="mb-4">View all the knowledge that our AI has studied.<br>
                            You can download them for your study, research purposes.</p>
                          <p>
                            <b-button v-on:click="knowledge" class="btnUpload">Feature Access</b-button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row hover-1-wrap">
                    <div class="col-12">
                      <div class="row">
                        <div class="mb-4 mb-lg-0 col-lg-6 order-lg-2" data-aos="fade-right">
                          <a href="#" class="hover-1">
                            <img src="../../assets/img/product/home_img2.jpg" alt="Image" class="img-fluid imgHome">
                          </a>
                        </div>
                        <div class="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1" data-aos="fade-left">
                          <h3>History</h3>
                          <p class="mb-4">View the history of answered questions<br> you have asked in the past.</p>
                          <p>
                            <b-button v-on:click="history" class="btnUpload">Feature Access</b-button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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
import CompHeader from "../frame/CompHeader";
import CompFooter from "../frame/CompFooter";
import CompBackToTop from "../frame/CompBackToTop";
import CompLeftSider from "../frame/CompLeftSider";

export default {
  name: "CompHome",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      username: ''
    }
  },
  methods: {
    //click getStarted button
    getStarted() {
      if (this.username !== '') {
        this.$router.push('/qa')
      } else this.$router.push('/login')
    },
    //click QA button
    QA() {
      if (this.username !== '') {
        this.$router.push('/qa')
      } else this.$router.push('/login')
    },
    //click knowledge button
    knowledge() {
      if (this.username !== '') {
        this.$router.push('/knowledge')
      } else this.$router.push('/login')
    },
    //click history button
    history() {
      if (this.username !== '') {
        this.$router.push('/history')
      } else this.$router.push('/login')
    }
  },
  created() {
    if (this.$session.exists('user'))
      this.username = this.$session.get('user').username
  }
}
</script>

<style scoped>
.imgHome {
  border-radius: 50px;
}

.hover-1-wrap .hover-1 {
  position: relative;
  margin-bottom: 0;
  display: block;
}

.hover-1-wrap .hover-1:after {
  z-index: -1;
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  background: #92c3f9;
  border-radius: 50px;
  -webkit-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out;
}

.hover-1-wrap:hover .hover-1:after {
  right: -10px;
  bottom: -10px;
  position: absolute;
}

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 700px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.contentBannerH2 {
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
}

.contentBannerH3 {
  color: #fff;
  font-weight: bold;
  font-size: 35px;
  font-family: "Roboto", sans-serif;
}

.contentBannerP {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}

.btnUpload {
  width: 130px;
  height: 45px;
  background-color: #4d97e2;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #1c6cbd;
  color: #fff;
}

.homeContent {
  font-family: "Roboto", sans-serif;
  font-size: 17px;
}
</style>
