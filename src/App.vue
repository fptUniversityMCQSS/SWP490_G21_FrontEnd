<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import CompHome from "./components/user/CompHome";

export default {
  name: 'App',
  components: {CompHome},
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
