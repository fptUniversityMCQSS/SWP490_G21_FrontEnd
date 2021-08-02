<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="home_banner_area">
<!--      <div style="color: #4ABF60" class="banner_inner d-flex align-items-center" v-if="this.$session.get('token') !== null">-->
<!--        <div class="container">-->
<!--          <div class="banner_content row">-->
<!--            <div class="offset-lg-2 col-lg-8">-->
<!--              <h2 style="padding-bottom: 50px">Do you have a high school exam test?<br>-->
<!--                Let our AI assistant help you find the solution</h2>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <comp-slider-image/>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area">
      <div>
        <div class="row flex-row-reverse">
          <div class="col-lg-10 py-5" style="padding-left: 30px">
            <div class="col-lg-11 mx-auto">

              <!-- code home here-->

            </div>
          </div>
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
import CompSliderImage from "../frame/CompSliderImage";

export default {
  name: "CompHome",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider, CompSliderImage
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

h2 {
  color: #FFFFFF;
  font-weight: bold;
  font-size: 30px;
  font-family: Courier;
}
</style>
