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
              <div class="col-lg-11 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">API Library</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">Blog</router-link>
                  </li>
                  <li class="nav-item submenu dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                       aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/knowledge/upload" class="nav-link">Upload Knowledges</router-link></li>
                      <li class="nav-item">
                        <router-link to="/knowledge" class="nav-link">List Knowledges</router-link></li>
                      <li class="nav-item">
                        <router-link to="/qa" class="nav-link">Question and Answer</router-link></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">Contact</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link"><i class="fa fa-user"/>&nbsp;My Account</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Logout</router-link>
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
  name: "CompHeaderLogin"
}
</script>

<style scoped>

</style>
