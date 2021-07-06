<template>
  <div class="left_sidebar_area">
    <aside class="left_widgets cat_widgets">
      <router-link to="/admin/qa">
        <div class="l_w_title">
          <h3>Question and Answer</h3>
        </div>
      </router-link>
    </aside>
    <aside class="left_widgets cat_widgets">
      <router-link to="/admin/knowledge/upload">
        <div class="l_w_title">
          <h3>Upload Knowledge</h3>
        </div>
      </router-link>
    </aside>
    <aside class="left_widgets cat_widgets">
      <router-link to="/admin/knowledge">
        <div class="l_w_title">
          <h3>List Knowledges</h3>
        </div>
      </router-link>
    </aside>
    <aside class="left_widgets cat_widgets">
      <router-link to="/admin/history">
        <div class="l_w_title">
          <h3>History</h3>
        </div>
      </router-link>
    </aside>
    <aside class="left_widgets cat_widgets">
      <router-link to="/admin/users">
        <div class="l_w_title">
          <h3>List Users</h3>
        </div>
      </router-link>
    </aside>
  </div>
</template>

<script>
export default {
  name: "CompAD_LeftSider"
}
</script>

<style scoped>

</style>
