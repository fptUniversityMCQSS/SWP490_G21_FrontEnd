<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import CompIndex from "./components/user/CompIndex";

export default {
  name: 'App',
  components: {CompIndex},
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Index';
      }
    },
  }
}
</script>

<style>

</style>
