<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>404</h1>
      </div>
      <h2>We are sorry, Page not found!</h2>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <router-link to="/">
        <b-button class="btnUpload">Go Back</b-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import '../../assets/css/404.css'

export default {
  name: "CompError"
}
</script>

<style scoped>
.btnUpload {
  width: 200px;
  height: 50px;
  background-color: #92c3f9;
  border: none;
  outline: none;
  color: black;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #0088ff;
  color: #fff;
}
</style>
