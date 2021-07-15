<template>
<!--  <div id="notfound">-->
<!--    <div class="notfound">-->
<!--      <div class="notfound-404">-->
<!--        <h1>404</h1>-->
<!--      </div>-->
<!--      <h2>We are sorry, Page not found!</h2>-->
<!--      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>-->
<!--      <router-link to="/">-->
<!--        <b-button class="btnUpload">Go Back</b-button>-->
<!--      </router-link>-->
<!--    </div>-->
<!--  </div>-->
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar">

      <ul class="list-unstyled">
        <li class="active">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
          <ul class="collapse list-unstyled" id="homeSubmenu" >
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>


    </nav>

  </div>
</template>
<script>
import '../../assets/css/404.css'

export default {
  name: "CompError"
}
</script>

<style scoped>

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  font-family: 'Poppins', sans-serif;
  background: #fafafa;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}


/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

#sidebar {
  padding-top: 200px;
  height: 100%;
  min-width: 250px;
  max-width: 250px;
  background: #7386D5;
  color: #fff;
  transition: all 0.3s;
  position: fixed;
}


#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386D5;
  background: #fff;
}

#sidebar ul li.active>a,
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
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386D5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}


@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
