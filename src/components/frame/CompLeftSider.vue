<template>
  <nav class="sticky  shadow">
    <div class="sidebar-header">
      <h3>DeepQuiz Feature</h3>
    </div>
    <ul class="list-unstyled">
      <li>
        <router-link to="/qa">
          <i style="font-size: 17px" class="fa fa-cogs" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Question Answer
        </router-link>
      </li>
      <li v-if="this.$session.get('role') === 'admin' || this.$session.get('role') === 'staff'">
        <router-link to="/knowledge/upload" exact-active-class="exact-active">
          <i style="font-size: 17px" class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Upload
          Knowledge
        </router-link>
      </li>
      <li>
        <router-link to="/knowledge" active-class="active">
          <i style="font-size: 17px" class="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;List Knowledges
        </router-link>
      </li>
      <li>
        <router-link to="/history">
          <i style="font-size: 17px" class="fa fa-history" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Question
          Answer History
        </router-link>
      </li>
      <li v-if="this.$session.get('role') === 'admin'">
        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
           @click="dropDown = !dropDown">
          <i style="font-size: 17px" class="fa fa-cog" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Account Management&nbsp;&nbsp;
          <i class="fa"
             :class="[dropDown ? 'fa-sort-asc' : 'fa-sort-desc']"
             aria-hidden="true"></i></a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <router-link to="/admin/user">
              <i style="font-size: 17px" class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;List Users
            </router-link>
          </li>
          <li>
            <router-link to="/admin/add">
              <i style="font-size: 17px" class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Create
              Account
            </router-link>
          </li>
        </ul>
      </li>
      <li v-if="this.$session.get('role') === 'admin'">
        <router-link to="/admin/log" exact-active-class="exact-active">
          <i style="font-size: 17px" class="fa fa-server" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Logging
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "CompLeftSider",
  data() {
    return {dropDown: false}
  }
}
</script>

<style scoped>

a.router-link-active,
a.router-link-exact-active {
  /*background: #00BFFF;*/
  background-color: #92c3f9;
}

.sticky {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: bold;
  float: left;
  min-width: 250px;
  max-width: 250px;
  /*background: #87CEFA;*/
  color: black;
  transition: all 0.3s;
  position: absolute;
  height: 600px;
  background: #e8f1f8;
}

.sticky .sidebar-header {
  padding: 20px 35px;
  background: #79b4f1;
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

/*.sticky ul li.active > a,*/
/*a[aria-expanded="true"] {*/
/*  color: black;*/
/*  background: #00BFFF;*/
/*}*/

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
