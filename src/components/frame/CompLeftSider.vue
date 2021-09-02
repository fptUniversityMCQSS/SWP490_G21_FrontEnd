<template>
  <nav class="sticky shadow">
    <div class="sidebar-header">
      <h3>DeepQuiz Feature</h3>
    </div>
    <ul class="list-unstyled">

      <li>
        <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false"
           @click="dropDown = !dropDown">
          <i class="fa fa-cogs space" aria-hidden="true"/>Question Answer
          <i class="fa"
             :class="[dropDown ? 'fa-sort-asc' : 'fa-sort-desc']"
             aria-hidden="true"></i></a>
        <ul class="collapse list-unstyled" id="pageSubmenu1">
          <li>
            <router-link to="/qa">
              <i class="fa fa-upload spaceMenu" aria-hidden="true"></i>Upload Exam
            </router-link>
          </li>
          <li>
            <router-link to="/generate">
              <i class="fa fa-pencil-square-o spaceMenu" aria-hidden="true"></i>Create Exam
            </router-link>
          </li>
        </ul>
      </li>

      <li v-if="role === 'admin' || role === 'staff'">
        <router-link to="/knowledge/upload" exact-active-class="exact-active">
          <i class="fa fa-graduation-cap space1" aria-hidden="true"></i>Upload
          Knowledge
        </router-link>
      </li>
      <li>
        <router-link to="/knowledge" active-class="active">
          <i class="fa fa-book spaceMenu" aria-hidden="true"></i>List Knowledges
        </router-link>
      </li>
      <li>
        <router-link to="/history">
          <i class="fa fa-history spaceMenu" aria-hidden="true"></i>Question
          Answer History
        </router-link>
      </li>
      <li v-if="role === 'admin'">
        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
           @click="dropDown = !dropDown">
          <i class="fa fa-cog spaceMenu" aria-hidden="true"></i>Account Management
          <i class="fa"
             :class="[dropDown ? 'fa-sort-asc' : 'fa-sort-desc']"
             aria-hidden="true"></i></a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <router-link to="/admin/user">
              <i class="fa fa-users spaceMenu" aria-hidden="true"></i>List Users
            </router-link>
          </li>
          <li>
            <router-link to="/admin/add">
              <i class="fa fa-user-plus spaceMenu" aria-hidden="true"></i>Create
              Account
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "CompLeftSider",
  data() {
    return {
      role: '',
      dropDown: false
    }
  },
  created() {
    if (this.$session.exists('user')) {
      this.role = this.$session.get('user').role
    }
  }
}
</script>

<style scoped>
.spaceMenu {
  padding-right: 0.7em;
  font-size: 16px
}

.space {
  padding-right: 0.50em;
}

.space1 {
  padding-right: 0.35em;
}

a.router-link-active,
a.router-link-exact-active {
  background-color: #92c3f9;
}

.sticky {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: bold;
  float: left;
  min-width: 250px;
  max-width: 250px;
  color: black;
  transition: all 0.3s;
  position: absolute;
  height: 700px;
  background: #e8f1f8;
}

.sticky .sidebar-header {
  padding: 20px 35px;
  background: #4ca4ff;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

h3 {
  font-size: 20px;
}

.sticky ul li a {
  padding: 20px;
  display: block;
}

.sticky ul li a:hover {
  color: black;
  background: #cdd3d9;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 50px !important;
}
</style>
