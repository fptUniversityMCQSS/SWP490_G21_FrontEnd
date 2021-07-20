<template>
  <nav class="sticky">
    <div class="sidebar-header">
      <h3>DeepQuiz Feature</h3>
    </div>
    <ul class="list-unstyled">
      <li>
        <router-link to="/qa">
          Question and Answer
        </router-link>
      </li>
      <li>
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
          History
        </router-link>
      </li>
      <li>
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
  background: #2faae6;
}

.sticky {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: bold;
  float: left;
  min-width: 250px;
  max-width: 250px;
  background: #7386D5;
  color: #fff;
  transition: all 0.3s;
  position: absolute;
  height: 600px;
}

.sticky .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
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
  padding-left: 30px;
}

.sticky ul li a:hover {
  color: #7386D5;
  background: #fff;
}

.sticky ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
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
  background: #6d7fcc;
  color: #FFFFFF;
}
</style>
