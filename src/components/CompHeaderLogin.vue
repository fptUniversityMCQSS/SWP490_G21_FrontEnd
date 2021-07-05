<template>
  <!--================Header Menu Area =================-->
  <header class="header_area">
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
                    <router-link to="/home" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">API Library</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home" class="nav-link">{{ currentUser }}</router-link>
                  </li>
                  <li class="nav-item">
                    <b-button class="header_btn" v-on:click="logout()">LOGOUT</b-button>
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
.header_btn {
  margin-top: 20px;
  font-size: 12px;
  font-weight: bold;
  width: 130px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 90px;
  background-color: #229aeb;
}

.header_btn:hover {
  background-color: #229bebad
}
</style>
