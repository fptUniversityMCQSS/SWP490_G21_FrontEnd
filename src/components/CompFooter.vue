<template>
  <!--================ start footer Area  =================-->
  <footer class="footer-area section_gap1">
    <div class="container">
      <div class="row">
        <!-- First column footer-->
        <div class="col-lg-3  col-md-6 col-sm-6" style="margin-left: 30px">
          <div class="single-footer-widget">
            <h6 class="footer_title">Contact</h6>
            <div>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>FPT University, Hoa Lac, Ha Noi</span>
            </div>
            <div>
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>19001568</span>
            </div>
            <div>
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>0904886095</span>
            </div>
            <div>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>SWP409_G21@gmai.com</span>
            </div>
          </div>
        </div>
        <!-- Second column-->
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6 class="footer_title">Site Links</h6>
            <div>
              <router-link to="/home">Home</router-link>
            </div>
            <div>
              <router-link to="/home">API Library</router-link>
            </div>
            <div>
              <router-link to="/home">About</router-link>
            </div>
          </div>
        </div>
        <!-- Third column-->
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6 class="footer_title">Newsletter</h6>
            <p>Sign up for our newsletter</p>
            <div id="mc_embed_signup">
              <form target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get" class="subscribe_form relative">
                <div class="input-group d-flex flex-row">
                  <input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''"
                         onblur="this.placeholder = 'Email Address '"
                         required="" type="email">
                  <button class="btn sub-btn">
                    <span class="lnr lnr-arrow-right"></span>
                  </button>
                </div>
                <div class="mt-10 info"></div>
              </form>
            </div>
          </div>
        </div>
        <!-- Forth column-->
        <div class="col-lg-2 col-md-6 col-sm-6" style="margin-left: 50px">
          <div class="single-footer-widget f_social_wd">
            <h6 class="footer_title">Connect With Us</h6>
            <div class="f_social">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row footer-bottom d-flex justify-content-between align-items-center">
        <p class="col-lg-12 footer-text text-center">
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright All rights reserved | This template is made by
          <a href="https://colorlib.com" target="_blank">SWP409_G2</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
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
