<template>
  <div class="left_sidebar_area">
    <div v-if="role==='binhtb'">
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
    <div v-if="role==='thienlh'"></div>
    <div v-if="role==='khailq'">
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
      <aside class="left_widgets cat_widgets">
        <router-link to="/admin/users">
          <div class="l_w_title">
            <h3>List Users</h3>
          </div>
        </router-link>
      </aside>
    </div>

  </div>
</template>

<script>
export default {
  name: "CompLeftSider",
  data() {
    return {
      role: this.$session.get('user')
    }
  }
}
</script>

<style scoped>

</style>
