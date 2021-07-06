<template>
  <!--================Header Menu Area =================-->
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <router-link to="/" class="navbar-brand logo_h">
            <img src="../../assets/img/logo.png" alt="">
          </router-link>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <div class="row w-100">
              <div class="col-lg-10 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">API Library</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item submenu dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Welcome, {{ currentUser }}</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/home" class="nav-link" href="login.html"><i class="fa fa-user"/>&nbsp;&nbsp;My
                          Account
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <button v-on:click="logout()" class="header_btn1 nav-link"><i class="fa fa-sign-out"/>&nbsp;&nbsp;LOGOUT
                        </button>
                      </li>
                    </ul>
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
  name: "CompHeaderLogin",
  data() {
    return {
      currentUser: this.$session.get('user')
    }
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push('/login');
    },
  }
}
</script>

<style scoped>
.header_btn1 {
  font-size: 14px;
  font-weight: bold;
  border: none;
  background-color: #FFFFFF;
  color: #222222;
  width: 200px;
}

.header_btn1:hover {
  background-color: #229aeb;
  color: #fff;
}
</style>
