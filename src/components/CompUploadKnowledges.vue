<template>
  <div>
    <comp-header-login/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Upload Knowledges</h2>
            <div class="page_link">
              <router-link to="/home">Home</router-link>
              <router-link to="/qa">Upload Knowledges</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--        <div class="large-12 medium-12 small-12 cell">-->
    <!--          <label>Files-->
    <!--            <input type="file" name="file" id="file" ref="file" multiple v-on:change="handleFilesUpload()"/>-->
    <!--          </label>-->
    <!--        </div>-->
    <!--        <div class="large-12 medium-12 small-12 cell">-->
    <!--          {{ fileName }}-->
    <!--        </div>-->
    <!--        <br>-->
    <!--        <div class="large-12 medium-12 small-12 cell">-->
    <!--          <button v-on:click="addFiles()">Add Files</button>-->
    <!--        </div>-->
    <!--        <br>-->
    <!--        <div class="large-12 medium-12 small-12 cell">-->
    <!--          <button v-on:click="submitFiles()">Submit</button>-->
    <!--        </div>-->

    <div class="wrapper">
      <div class="cont">
        <h1>Upload a file</h1>
        <div class="upload-container">
          <div class="border-container">
            <div class="icons fa-4x">
              <i class="fas fa-file-image" data-fa-transform="shrink-3 down-2 left-6 rotate--45"></i>
              <i class="fas fa-file-alt" data-fa-transform="shrink-2 up-4"></i>
              <i class="fas fa-file-pdf" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
            </div>
            <!--<input type="file" id="file-upload">-->
            <p>Drag and drop files here, or
              <input type="file" name="file" id="file" ref="file" multiple v-on:change="handleFilesUpload()"/></p>
          </div>
        </div>
      </div>
      <br>
      <b-button variant="outline-secondary" class="btnUpload" v-on:click="submitFiles()">Upload</b-button>
    </div>


    <comp-footer/>
  </div>
</template>

<script>

import CompHeaderLogin from "./CompHeaderLogin";
import CompFooter from "./CompFooter";

export default {

  name: "CompUploadKnowledges",
  components: {
    CompHeaderLogin, CompFooter
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
      let formData = new FormData();
      formData.append('file', this.files)
      /*
        Iteate over any file sent over appending the files
        to the form data.
      */
      // for( var i = 0; i < this.files.length; i++ ){
      //   let file = this.files[i];
      //   formData.append('files[' + i + ']', file);
      // }
      /*
        Make the request to the POST /select-files URL
      */
      const axios = require('axios');
      axios.put('http://localhost:1323/qa',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + this.$session.get("token")
          }
        }
      ).then(function () {
        console.log('SUCCESS!!');
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
  /*border: 0.5px solid rgba(130, 130, 130, 0.25);*/
  /*box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1),
              0 0 0 1px rgba(0, 0, 0, 0.1);*/
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

#file-browser {
  text-decoration: none;
  color: rgb(22, 42, 255);
  border-bottom: 3px dotted rgba(22, 22, 255, 0.85);
}

#file-browser:hover {
  color: rgb(0, 0, 255);
  border-bottom: 3px dotted rgba(0, 0, 255, 0.85);
}

.icons {
  color: #95afc0;
  opacity: 0.55;
}

.btnUpload {
  width: 100px;
  border: solid 2px;
}

.btnUpload:hover {
  background-color: #0c63e4;
}
</style>
