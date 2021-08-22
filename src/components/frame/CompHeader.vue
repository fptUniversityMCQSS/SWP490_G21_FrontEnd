<template>
  <!--================Header Menu Area =================-->
  <header class="header_area shadow">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <router-link to="/" class="navbar-brand logo_h col-lg-2" active-class="active">
            <img src="../../assets/img/AI/deepquiz.png" alt="">
          </router-link>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <div class="row w-100">
              <div class="col-lg-12 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link" active-class="active"><i style="font-size: 17px" class="fa fa-home"
                                                            aria-hidden="true"></i>&nbsp;&nbsp;Home
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link" exact-active-class="exact-active"><i style="font-size: 15px" class="fa fa-address-book"
                                                                 aria-hidden="true"></i>&nbsp;&nbsp;About
                    </router-link>
                  </li>
                  <li class="nav-item submenu dropdown" v-if="role !== ''">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"><i style="font-size: 15px" class="fa fa-user-circle"
                                                aria-hidden="true"></i>&nbsp;&nbsp;{{ currentUser }}</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/user" class="nav-link" href="login.html"><i class="fa fa-user-o"
                                                                                      aria-hidden="true"></i>&nbsp;&nbsp;My
                          Account
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <button v-on:click="logout()" class="header_btn1 nav-link"><i class="fa fa-sign-out"/>&nbsp;&nbsp;LOGOUT
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item" v-if="role === ''">
                    <router-link to="/login" class="nav-link" active-class="active">
                      <b-button variant="outline-primary" class="header_btn">LOGIN/REGISTER</b-button>
                    </router-link>
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
  name: "CompHeader",
  data() {
    return {
      role: '',
      currentUser: ''
    }
  },
  created() {
    if (this.$session.exists('user')) {
      this.role = this.$session.get('user').role
      this.currentUser = this.$session.get('user').fullName
    }
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

a.router-link-active,
a.router-link-exact-active {
}

/*.navbar .nav .nav-item:hover {*/
/*  font-size: 30px;*/
/*  background: #cdd3d9;*/
/*}*/

/*.header_area .navbar .nav .nav-item:hover .nav-link {*/
/*  color: #1641ff;*/
/*  background-color: #ff3e3f;*/
/*}*/

/*.header_area .navbar .nav .router-link-active .nav-link{*/
/*  color: #1641ff;*/
/*  background-color: #FFFFFF;*/
/*}*/

/*.header_area .navbar .nav .router-link-exact-active .nav-link{*/
/*  color: #1641ff;*/
/*  background-color: #FFFFFF;*/
/*}*/

.header_btn {
  font-size: 12px;
  font-weight: bold;
  width: 130px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 90px;
  background-color: #4d97e2;
  color: #FFFFFF;
}

.header_btn:hover {
  background-color: #1c6cbd
}

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
