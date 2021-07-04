<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="home_banner_area">
      <div class="overlay"></div>
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content row">
            <div class="offset-lg-2 col-lg-8">
              <h2 class="h2css">Do you have a high school exam? <br>
                Allow our AI assistant to help you in finding a solution</h2>
              <router-link to="/login" class="white_bg_btn" href="#">Get Started</router-link>
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

              <!-- code home here-->

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
import CompHeader from "./CompHeader";
import CompFooter from "./CompFooter";
import CompBackToTop from "./CompBackToTop";

export default {
  name: "CompIndex",
  components: {CompFooter, CompHeader, CompBackToTop}
}
</script>

<style scoped>
.h2css {
  font-family: Courier;
  font-weight: bold;
  color: white;
  font-size: 30px
}
</style>
