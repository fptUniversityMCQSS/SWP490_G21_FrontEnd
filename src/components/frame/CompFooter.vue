<template>
  <!--================ start footer Area  =================-->
  <footer class="footer-area section_gap1">
    <div class="container">
      <div class="row">
        <div class="col-lg-3" style="margin-left: 30px">
          <img src="../../assets/img/logo/lg3.png"><br><br>
          A web application developed by SWP409_G21 team. With useful features of AI artificial intelligence technology,
          we hope to provide users great experiences when coming to the website.
          <div class="single-footer-widget">
          </div>
        </div>

        <!-- First column footer-->
        <div class="col-lg-3" style="margin-left: 80px">
          <div class="single-footer-widget">
            <h6 class="footer_title">Have Any Questions?</h6>
            <div>
              <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
              <span>FPT University, Hoa Lac, Ha Noi</span>
            </div>
            <div>
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
              <span>0365716284</span>
            </div>
            <div>
              <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
              <span>SWP409_G21@gmai.com</span>
            </div>
          </div>
        </div>
        <!-- Second column-->
        <div class="col-lg-2" style="margin-left: 50px">
          <div class="single-footer-widget">
            <h6 class="footer_title">Quick Links</h6>
            <div>
              <router-link class="fa fa-arrow-right" to="/home">&nbsp;Home</router-link>
            </div>
            <div>
              <router-link to="/about" class="fa fa-arrow-right">&nbsp;About</router-link>
            </div>
          </div>
        </div>

        <!-- Forth column-->
        <div class="col-lg-2" style="margin-left: 30px">
          <div class="single-footer-widget f_social_wd">
            <h6 class="footer_title">Connect With Us</h6>
            <div class="f_social">
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://plus.google.com/" target="_blank">
                <i class="fa fa-google-plus-square"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row footer-bottom d-flex justify-content-between align-items-center">
        <p class="col-lg-12 footer-text text-center">
          Copyright ©2021 DeepQuiz. All rights reserved | Powered by
          <router-link to="/about">SWP409_G21</router-link>
        </p>
      </div>
    </div>
  </footer>
  <!--================ End footer Area  =================-->
</template>

<script>
export default {
  name: "CompFooter"
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

a {
  color: #777777;
}
</style>
