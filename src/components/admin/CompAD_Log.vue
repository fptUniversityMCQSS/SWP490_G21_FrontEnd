<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Logging Statement</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/admin/logging">Logging</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area">
      <div>
        <div class="row flex-row-reverse">
          <div class="col-lg-10 section_gap">
            <div class="col-lg-9 mx-auto section_gap">
              <div class="card rounded shadow border-0">
                <div class="tableTl">Logging Statement</div>
                <div class="card-body bg-white rounded">
                  <div class="table-responsive">
                    <div style="padding: 20px;">
                      <div class="justify-content-centermy-1 row">
                        <b-form-textarea v-model="logStatement" :disabled="true" rows="3" max-rows="6"
                                         style="padding-left: 30px;height: 400px; background-color: #f9f9ff">
                        </b-form-textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
          </div>
        </div>
        <!-- code paging here--->
      </div>
    </section>
    <!--================End Content Area =================-->

    <comp-back-to-top/>
    <comp-footer/>
  </div>
</template>

<script>

import CompHeader from "../frame/CompHeader";
import CompFooter from "../frame/CompFooter";
import CompBackToTop from "../frame/CompBackToTop";
import CompLeftSider from "../frame/CompLeftSider";


export default {

  name: "CompAD_Log",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  beforeRouteLeave(to, from, next) {
    this.controller.abort();
    next()
  },
  data() {
    return {
      logStatement: '',
      controller: null,
      signal: null
    }
  },
  created() {
    let self = this

    this.controller = new AbortController()
    this.signal = this.controller.signal
    fetch(globalURL.host + process.env.VUE_APP_LOG,
      {
        method: "GET",
        signal: this.signal,
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + self.$session.get("user").token
        }
      }
    )
      // Retrieve its body as ReadableStream
      .then(response => response.body)
      .then(rs => {
        const reader = rs.getReader();
        let read = async function () {
          while (true) {
            const {done, value} = await reader.read();
            // When no more data needs to be consumed, break the reading
            if (done) {
              break;
            }
            // Enqueue the next data chunk into our target stream
            let string = new TextDecoder().decode(value);
            self.logStatement += string
          }
          reader.releaseLock();
        }
        read();
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>

<style scoped>

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 600px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.tableTl {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
  color: #2c3e50;
}
</style>
