<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>API Library</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/user">API Library</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area">
      <div>
        <div class="row flex-row-reverse">
          <div :class="[username === '' ? 'col-lg-12' : 'col-lg-10']">
            <div class="col-lg-8 mx-auto section_gap py-5 about">
              <h3>API Library</h3>

              <h4 style="margin-top: 50px">User:</h4>
              <!--LoginResponse-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="LoginResponse = !LoginResponse">Login <span class="api">POST /api/login &nbsp;
                  <i class="fa" :class="[LoginResponse ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--RegisterResponse-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="RegisterResponse = !RegisterResponse">Register<span class="api">POST /api/register &nbsp;
                  <i class="fa" :class="[RegisterResponse ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>


              <!--GetUserInfo-->
              <div class="top">
                <a href="#" onclick="return false" @click="GetUserInfo = !GetUserInfo">Get Profile
                  <span class="api">GET /api/user &nbsp;
                  <i class="fa" :class="[GetUserInfo ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--ChangeProfile-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="ChangeProfile = !ChangeProfile">Change Profile<span class="api">PATCH /api/user &nbsp;
                  <i class="fa" :class="[ChangeProfile ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--QAResponse-->
              <div class="top">
                <a href="#" onclick="return false" @click="QAResponse = !QAResponse">
                  Question Answer<span class="api">PUT /api/qa &nbsp;
                  <i class="fa" :class="[QAResponse ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--History Exam-->
              <div class="top">
                <a href="#" onclick="return false" @click="History = !History">History Exam<span class="api">GET /api/history &nbsp;
                  <i class="fa" :class="[History ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--GetExamById-->
              <div class="top">
                <a href="#" onclick="return false" @click="GetExamById = !GetExamById">Get Exam
                  <span class="api">GET /api/history/:id &nbsp;
                  <i class="fa" :class="[GetExamById ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--DownloadExam-->
              <div class="top">
                <a href="#" onclick="return false" @click="DownloadExam = !DownloadExam">Download Exam
                  <span class="api">GET /api/history/:id/download &nbsp;
                  <i class="fa" :class="[DownloadExam ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--List Knowledge-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="KnowledgeList = !KnowledgeList">List Knowledge<span class="api">GET /api/knowledge &nbsp;
                  <i class="fa" :class="[KnowledgeList ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>


              <!--Download Knowledge-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="KnowledgeDownload = !KnowledgeDownload">Download Knowledge<span class="api">GET /api/knowledge/:id &nbsp;
                  <i class="fa" :class="[KnowledgeDownload ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>


              <h4 style="margin-top: 50px">Staff:</h4>

              <!--Knowledge Upload-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="KnowledgeUpload = !KnowledgeUpload">Upload Knowledge<span class="api">PUT /api/knowledge &nbsp;
                  <i class="fa" :class="[KnowledgeUpload ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>


              <!--Delete Knowledge-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="KnowledgeDelete = !KnowledgeDelete">Delete Knowledge<span class="api">DELETE /api/knowledge/:id &nbsp;
                  <i class="fa" :class="[KnowledgeDelete ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>


              <h4 style="margin-top: 50px">Admin:</h4>

              <!--ListUser-->
              <div class="top">
                <a href="#" onclick="return false" @click="ListUser = !ListUser">List User
                  <span class="api">GET /api/admin/user &nbsp;
                  <i class="fa" :class="[ListUser ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--AdminAddUser-->
              <div class="top">
                <a href="#" onclick="return false" class="leftCol changePassword" @click="AdminAdd = !AdminAdd">Add User
                  <span class="api">POST /api/admin/user &nbsp;
                  <i class="fa" :class="[AdminAdd ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--GetUserById-->
              <div class="top">
                <a href="#" onclick="return false" @click="GetUserById = !GetUserById">Get User
                  <span class="api">GET /api/admin/user/:id &nbsp;
                  <i class="fa" :class="[GetExamById ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--DeleteUserById-->
              <div class="top">
                <a href="#" onclick="return false"
                   @click="DeleteUserById = !DeleteUserById">Delete User<span class="api">DELETE /api/admin/user/:id &nbsp;
                  <i class="fa" :class="[DeleteUserById ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>

              <!--UpdateUser-->
              <div class="top">
                <a href="#" onclick="return false" @click="UpdateUser = !UpdateUser">Update User<span class="api">PATCH /api/admin/user/:id &nbsp;
                  <i class="fa" :class="[UpdateUser ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>




            </div>
          </div>
          <div v-if="username !== ''" class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
          </div>
        </div>
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

export default {
  name: "CompAPILibrary",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      username: '',
      LoginResponse: false,
      RegisterResponse: false,
      QAResponse: false,
      KnowledgeList: false,
      KnowledgeUpload: false,
      KnowledgeDownload: false,
      KnowledgeDelete: false,
      History: false,
      GetExamById: false,
      DownloadExam: false,
      ListUser: false,
      AdminAdd: false,
      GetUserById: false,
      DeleteUserById: false,
      UpdateUser: false,
      ChangeProfile: false,
      GetUserInfo: false,
    }
  },
  created() {
    this.username = this.$session.get('user').username
  }
}
</script>

<style scoped>
.about {
  color: black;
  margin-bottom: 80px;
}

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 600px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.top {
  margin-top: 20px;
  height: auto;
  width: 90%;
  padding: 10px 30px;
  background-color: #c0dcf6;
  color: black;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important
}

.top a {
  color: black;
  font-weight: bold;
  font-size: 17px;
}

.api {
  float: right;
  padding-right: 10px
}
</style>
