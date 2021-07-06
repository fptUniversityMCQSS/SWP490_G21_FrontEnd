<template>
  <div class="left_sidebar_area">
    <aside class="left_widgets cat_widgets">
      <router-link to="/qa">
        <div class="l_w_title">
          <h3>Question and Answer</h3>
        </div>
      </router-link>
    </aside>
    <aside class="left_widgets cat_widgets">
      <router-link to="/knowledge/upload">
        <div class="l_w_title">
          <h3>Upload Knowledge</h3>
        </div>
      </router-link>
    </aside>
    <aside class="left_widgets cat_widgets">
      <router-link to="/knowledge">
        <div class="l_w_title">
          <h3>List Knowledges</h3>
        </div>
      </router-link>
    </aside>
    <aside class="left_widgets cat_widgets">
      <router-link to="/history">
        <div class="l_w_title">
          <h3>History</h3>
        </div>
      </router-link>
    </aside>
  </div>
</template>

<script>
export default {
  name: "CompLeftSider"
}
</script>

<style scoped>

</style>
