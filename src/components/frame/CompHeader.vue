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
                    <router-link to="/" class="nav-link" active-class="active">
                      <i class="fa fa-home fontHeader" aria-hidden="true"></i>&nbsp;&nbsp;Home
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="username !== ''">
                    <router-link to="/qa" class="nav-link">
                      <i class="fa fa-tasks fontHeader" aria-hidden="true"></i>&nbsp;&nbsp;Feature
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="username === ''">
                    <router-link to="/login" class="nav-link">
                      <i class="fa fa-tasks fontHeader" aria-hidden="true"></i>&nbsp;&nbsp;Feature
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/library" class="nav-link">
                      <i class="fa fa-folder-open" aria-hidden="true"></i>&nbsp;&nbsp;API Library
                    </router-link>
                  </li>
                  <li class="nav-item submenu dropdown" v-if="username !== ''">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"><i class="fa fa-user-circle"
                                                aria-hidden="true"></i>&nbsp;&nbsp;{{ currentUser }}</a>
                    <ul class="dropdown-menu" style="left: -40px">
                      <li class="nav-item">
                        <router-link to="/user" class="nav-link">
                          <i class="fa fa-user-o" aria-hidden="true"></i> Profile
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <button v-on:click="logout()" class="header_btn1 nav-link"><i class="fa fa-sign-out"/>&nbsp;&nbsp;LOGOUT
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item" v-if="username === ''">
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
      username: '',
      currentUser: ''
    }
  },
  created() {
    if (this.$session.exists('user')) {
      this.username = this.$session.get('user').username
      this.currentUser = this.$session.get('user').fullName
    }
  },
  methods: {
    // method logout
    logout() {
      this.$session.clear();
      this.$KnowledgeData.nextId = 0
      this.$KnowledgeData.list = []
      this.$QAData.nextId = 0
      this.$QAData.list = []
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
a.router-link-active,
a.router-link-exact-active {
}

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

.fontHeader {
  font-size: 15px;
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
