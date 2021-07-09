<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>404</h1>
      </div>
      <h2>We are sorry, Page not found!</h2>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <b-button class="btnUpload" v-on:click="$router.go(-1)">Go Back</b-button>
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

</style>
