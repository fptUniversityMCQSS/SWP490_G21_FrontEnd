<template>
  <nav class="sticky">
    <div class="sidebar-header">
      <h3>DeepQuiz Feature</h3>
    </div>
    <ul class="list-unstyled">
      <li>
        <router-link to="/qa">
          Question Answer
        </router-link>
      </li>
      <li v-if="this.$session.get('role') === 'admin' || this.$session.get('role') === 'staff'">
        <router-link to="/knowledge/upload" exact-active-class="exact-active">
          Upload Knowledge
        </router-link>
      </li>
      <li>
        <router-link to="/knowledge" active-class="active">
          List Knowledges
        </router-link>
      </li>
      <li>
        <router-link to="/history">
          Question Answer History
        </router-link>
      </li>
      <li v-if="this.$session.get('role') === 'admin'">
        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Account
          Management</a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <router-link to="/admin/user">
              List Users
            </router-link>
          </li>
          <li>
            <router-link to="/admin/add">
              Create Account
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
    return {}
  }
}
</script>

<style scoped>

a.router-link-active,
a.router-link-exact-active {
  background: #00BFFF;
}

.sticky {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: bold;
  float: left;
  min-width: 250px;
  max-width: 250px;
  background: #87CEFA;
  color:black;
  transition: all 0.3s;
  position: absolute;
  height: 600px;
}

.sticky .sidebar-header {
  padding: 20px;
  background: #00BFFF;
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
  color: 	black;
  background: #00BFFF;
}

.sticky ul li.active > a,
a[aria-expanded="true"] {
  color: black;
  background: 	#00BFFF;
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
  padding-left: 30px !important;
  background: #87CEFA;
  color: black;
}
</style>
