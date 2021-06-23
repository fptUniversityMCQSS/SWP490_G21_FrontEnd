<template>
  <!--================Header Menu Area =================-->
  <header class="header_area">
    <div class="top_menu row m0">
      <div class="container-fluid">
        <div class="float-left">
          <p>Call Us: 012 44 5698 7456 896</p>
        </div>
      </div>
    </div>
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <router-link to="/" class="navbar-brand logo_h">
            <img src="../assets/img/logo.png" alt="">
          </router-link>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <div class="row w-100">
              <div class="col-lg-10 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">API Library</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">Blog</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">Pages</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">Contact</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login/Register</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!--================Header Menu Area =================-->
</template>

<script>

export default {
  name: "CompHeader"
}
</script>

<style scoped>
</style>
