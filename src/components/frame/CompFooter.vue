<template>
  <!--================ start footer Area  =================-->
  <footer class="footer-area section_gap1">
    <div class="container">
      <div class="row">
        <!--col1-->
        <div class="col-lg-4" style="margin-left: 30px">
          <img src="../../assets/img/AI/deepquiz.png">
          <p><br>is a state-of-the-art AI (NLP) system built on Transformer architecture and Attention algorithm to help
            you solve all your multiple-choice exams.</p>
          <div class="single-footer-widget">
          </div>
        </div>
        <!-- col2-->
        <div class="col-lg-4" style="margin-left: 80px">
          <div class="single-footer-widget">
            <h6 class="footer_title">Have Any Questions?</h6>
            <div>
              <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
              <span>FPT University, Hoa Lac, Ha Noi</span>
            </div>
            <div>
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
              <span>(024) 7300 5588</span>
            </div>
            <div>
              <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
              <span>fptquestionanswering@gmail.com</span>
            </div>
          </div>
        </div>

        <!--col4-->
        <div class="col-lg-2 text-center" style="margin-left: 30px">
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
          Powered by
          <router-link to="/">SWP409_G21</router-link>
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
