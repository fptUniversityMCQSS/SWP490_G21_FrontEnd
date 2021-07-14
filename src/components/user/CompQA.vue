<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Question and Answer</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/qa">Question and Answer</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Content Area =================-->
    <section class="cat_product_area section_gap">
      <div class="container-fluid">
        <div class="row flex-row-reverse">
          <div class="col-lg-10">
            <div class="col-lg-11 mx-auto">
              <div class="wrapper">
                <div class="cont">
                  <h1>Upload a file</h1>
                  <div class="upload-container">
                    <div class="border-container">
                      <p>To make this feature available,
                        your file must be in the correct format. You can check out <a
                          href="../../../static/QB_SWT391_BanTQ.doc"
                          download="The_sample_doc"><u>the sample
                          format</u></a></p>
                      <!--<input type="file" id="file-upload">-->
                      <p>Drag and drop files here, or
                        <input type="file" name="file" id="file" ref="file" multiple v-on:change="handleFilesUpload()"/>
                      </p>
                    </div>
                  </div>
                </div>
                <br>
                <b-button variant="outline-primary" class="btnUpload" v-on:click="submitFiles()">Upload</b-button>
              </div>
            </div>
          </div>
          <div class="col-lg-2 py-5">
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

  name: "CompQA",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      files: '',
      fileName: ''
    }
  },
  /*
    Defines the method used by the component
  */
  methods: {
    /*
      Adds a file
    */
    addFiles() {
      this.$refs.file.click();
    },
    /*
      Submits files to the server
    */
    submitFiles() {
      /*
        Initialize the form data
      */
      let self = this
      let formData = new FormData();
      formData.append('file', this.files)

      const axios = require('axios');
      axios.put('http://localhost:1323/qa',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + self.$session.get("token")
          }
        }
      ).then(response => {
        alert("UPLOAD SUCCESS!")
        console.log(response)
        this.$router.push('/history/' + response.data.id)
      })
        .catch((er) => {
          console.log(er);
        });
    },
    /*
      Handles the uploading of files
    */
    handleFilesUpload() {
      this.files = this.$refs.file.files[0];
      this.fileName = event.target.files[0].name;
    },
    /*
      Removes a select file the user has uploaded
    */
  }
}
</script>

<style scoped>
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
  max-width: 640px;
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
