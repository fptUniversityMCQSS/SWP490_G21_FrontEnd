<template>
    <div class="left_sidebar_area">
      <div v-if="role==='user'">
        <aside class="left_widgets cat_widgets">
          <router-link to="/qa">
            <div class="l_w_title">
              <h3>Question and Answer</h3>
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
      <div v-if="role==='staff'">
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
      <div v-if="role==='admin'">
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
          <router-link to="">
          <div class="l_w_title" @click="dropdown = !dropdown">
            <h3>Account Management
              <i class="fa fa-caret-down"/>
            </h3>
          </div>
          </router-link>
        </aside>
        <aside class="left_widgets cat_widgets" v-if="dropdown===true">
          <router-link to="/admin/user">
            <div class="l_w_title">
              <h3>List Users</h3>
            </div>
          </router-link>
        </aside>
        <aside class="left_widgets cat_widgets" v-if="dropdown===true">
          <router-link to="/admin/add">
            <div class="l_w_title">
              <h3>Create Account</h3>
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
      role: this.$session.get('role'),
      dropdown: false
    }
  }
}
</script>

<style scoped>

</style>
