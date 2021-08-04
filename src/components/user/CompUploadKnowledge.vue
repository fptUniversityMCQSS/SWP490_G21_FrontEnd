<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Upload Knowledge</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/knowledge">Upload Knowledge</router-link>
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
          <div class="col-lg-10">
            <div class="col-lg-11 mx-auto section_gap">
              <div class="wrapper">
                <div class="cont">
                  <h1>Upload a file</h1>
                  <div class="upload-container">
                    <div class="border-container">
                      <p>Drag and drop files here, or
                        <input type="file" name="file" id="fileInput" ref="file"
                               v-on:change="handleFilesUpload"/>
                      </p>
                    </div>
                  </div>
                </div>
                <br>
                <b-button variant="outline-primary" class="btnUpload"
                          v-on:click="submitFiles()">Upload
                </b-button>

                <div v-if="items.length>0" style="margin-top: 50px">
                  <b-table striped hover :items="items" :fields="fields">
                    <template #cell(nameCurrent)="row">
                      {{ row.value }}
                    </template>
                    <template #cell(status)="{item}">
                      <div v-if="item.status==='Processing'" size="sm" class="mr-1">
                        In Progress 📀
                      </div>
                      <div v-if="item.status==='Encoding'" size="sm" class="mr-1">
                        In Progress 📀
                      </div>
                      <div v-if="item.status==='Ready'" size="sm" class="mr-1">
                        Successful ✅
                      </div>
                    </template>
                  </b-table>
                </div>

              </div>
            </div>
          </div>
          <div class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
            <flash-message class="myCustomClass"></flash-message>
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
  name: "CompUploadKnowledge",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      items: [],
      fileName: '',
      fields: [
        {
          key: 'nameCurrent',
          label: 'File Name'
        },
        {
          key: 'status',
          label: 'Status'
        }
      ],
      files: '',
      hasFile: false
    }
  },
  created() {
    if(this.$session.has('listKnowledge')){
      this.items = this.$session.get('listKnowledge')
    }
  },
  methods: {
    handleFilesUpload(object) {
      this.files = this.$refs.file.files[0];
      this.fileName = object.target.files[0].name
    },
    submitFiles() {
      let newObject

      if (document.getElementById("fileInput").files.length !== 0) {
        newObject = {
          nameCurrent: this.fileName,
          status: 'Processing'
        }
        this.items.push(newObject)
      }
      this.$session.set('listKnowledge', this.items)
      /*
        Initialize the form data
      */
      let formData = new FormData();
      formData.append('file', this.files)
      const axios = require('axios');
      axios.put(process.env.VUE_APP_LOCAL + process.env.VUE_APP_UPLOAD_KNOWLEDGE,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + this.$session.get("token"),
          }
        }
      ).then(response => {
        newObject.status = 'Ready'
        this.$session.set('listKnowledge', this.items)
        this.flash('Upload successfully', 'success', {
          timeout: 3000
        });
        // if (response.data.status === 'Encoding') {
        //   newObject.status = 'Encoding';
        // }
        // if (response.data.status === 'Ready') {
        //   newObject.status = 'Ready';
        // }
      })
        .catch((er) => {
          console.log(er);
        });
    }
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

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: #535c68;
}

.wrapper {
  margin: auto;
  max-width: 800px;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
}

.cont {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

h1 {
  color: #130f40;
  font-family: 'Varela Round', sans-serif;
  letter-spacing: -.5px;
  font-weight: 700;
  padding-bottom: 10px;
}

.upload-container {
  background-color: rgb(239, 239, 239);
  border-radius: 6px;
  padding: 10px;
}

.border-container {
  border: 5px dashed rgba(198, 198, 198, 0.65);
  /*   border-radius: 4px; */
  padding: 20px;
}

.border-container p {
  color: #130f40;
  font-weight: 600;
  font-size: 1.1em;
  letter-spacing: -1px;
  margin-top: 30px;
  margin-bottom: 0;
  opacity: 0.65;
}

.btnUpload {
  width: 200px;
  height: 50px;
  background-color: #229aeb;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #229bebad
}

</style>
