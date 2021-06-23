<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>Files
        <input type="file" name="file" id="file" ref="file" multiple v-on:change="handleFilesUpload()"/>
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      {{fileName}}
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell">
      <button v-on:click="addFiles()">Add Files</button>
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell">
      <button v-on:click="submitFiles()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "CompUploadKnowledges",
  data(){
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
    addFiles(){
      this.$refs.file.click();
    },
    /*
      Submits files to the server
    */
    submitFiles(){
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
      axios.post( 'http://localhost:1323/qa',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
        .catch((er)=>{
          console.log(er);
        });
    },
    /*
      Handles the uploading of files
    */
    handleFilesUpload(){
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
input[type="file"]{
  position: absolute;
  top: -500px;
}
div.file-listing{
  width: 200px;
}
span.remove-file{
  color: red;
  cursor: pointer;
  float: right;
}
</style>
