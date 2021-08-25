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
              <router-link to="/">Home</router-link>
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
                <!--form upload-->
                <div class="cont shadow" style="background-color: #f9f9ff">
                  <h2>Upload Knowledge</h2>
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
                <b-button variant="outline-primary" class="btnUpload" v-on:click="submitFiles()">Upload</b-button>
                <p id="noticeUpload" class="err"></p>
                  <!--table file uploaded-->
                <div v-if="this.items.length > 0" style="margin-top: 50px">
                  <b-table :bordered="true" :borderless="true" class="text-center shadow"
                           :items="this.items.slice().reverse()" :fields="fields">
                    <template #cell(nameCurrent)="row">
                      <div>{{ row.value }}</div>
                    </template>
                    <template #cell(status)="{item}">
                      <div v-if="item.status==='Processing'" size="sm" class="mr-1">
                        In Progress &nbsp;<i class="fa fa-spinner fa-spin"/>
                      </div>
                      <div v-if="item.status==='Encoding'" size="sm" class="mr-1">
                        Encoding &nbsp;<i class="fa fa-spinner fa-spin"/>
                      </div>
                      <div v-if="item.status==='Ready'" size="sm" class="mr-1 " style="color: #4ABF60">
                        Successful&nbsp;<i class="fa fa-check-square" aria-hidden="true"></i>
                      </div>
                      <div v-if="item.status==='Fail'" size="sm" class="mr-1"
                           style="color: red">
                        <span v-b-tooltip.right="item.messageDetail">
                          Fail &nbsp;<i class="fa fa-window-close" aria-hidden="true"></i></span>
                      </div>
                    </template>

                    <template #cell(action)="row">
                      <b-button
                        variant="outline-primary" size="sm"
                        v-on:click="cancelUpload(row.item)"
                        class="btnDelete">
                        Delete&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>
                      </b-button>
                    </template>
                  </b-table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
          </div>
        </div>
      </div>
    </section>
    <!--================End Content Area =================-->
    <flash-message class="myCustomClass"></flash-message>
    <comp-back-to-top/>
    <comp-footer/>
  </div>
</template>

<script>
import CompHeader from "../frame/CompHeader";
import CompFooter from "../frame/CompFooter";
import CompBackToTop from "../frame/CompBackToTop";
import CompLeftSider from "../frame/CompLeftSider";
import * as utility from '../utility/utility';

let self

function findKnowledge(idx, listKnowledge) {
  for (let i = 0; i < listKnowledge.length; i++) {
    if (listKnowledge[i].idx === idx) {
      return i
    }
  }
  return -1
}

export default {
  name: "CompUploadKnowledge",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      items: [],
      fileName: '',
      nextIndex: 0,
      fields: [
        {
          key: 'nameCurrent',
          label: 'File Name',
          thStyle: {background: '#92c3f9', color: 'black', width: '300px'}
        },
        {
          key: 'status',
          label: 'Status',
          thStyle: {background: '#92c3f9', color: 'black'}
        },
        {
          key: 'action',
          label: 'Action',
          thStyle: {background: '#92c3f9', color: 'black'}
        }
      ],
      files: '',
      hasFile: false
    }
  },
  created() {
    self = this
    if (!this.$session.exists('listKnowledge')) {
      this.$session.set('listKnowledge', [])
      this.items = this.$session.get('listKnowledge')
    } else {
      this.items = this.$session.get('listKnowledge')
    }

    if (!this.$session.exists('nextIndexKnowledge')) {
      this.$session.set('nextIndexKnowledge', 0)
      this.nextIndex = this.$session.get('nextIndexKnowledge')
    } else {
      this.nextIndex = this.$session.get('nextIndexKnowledge')
    }
  },
  methods: {
    // method cancel upload
    cancelUpload(item) {
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Delete knowledge</b>" +
        "<br><br>Are you sure you want to delete knowledge?</p>";
      let options = {
        html: true,
        okText: 'Continue',
        cancelText: 'Close',
      };
      this.$dialog
        .confirm(message, options)
        .then(() => {
          self.items = self.$session.get('listKnowledge')
          let index = findKnowledge(item.idx, self.items)
          // self.items[index].controller.abort()
          self.items.splice(index, 1)
          self.$session.set('listKnowledge', self.items)
          const axios = require('axios');
          axios
            .delete(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_KNOWLEDGE + "/" + item.knowledgeId, {
              headers: {
                'Authorization': 'Bearer ' + self.$session.get("user").token
              }
            })
            .then(response => {
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(function () {
          console.log('Clicked on cancel');
        })
    },
    // method detect file selected
    handleFilesUpload(object) {
      if (document.getElementById("fileInput").files.length > 0) {
        this.files = this.$refs.file.files[0];
        this.fileName = object.target.files[0].name
        document.getElementById("noticeUpload").innerHTML = "";
      }
    },
    // method submit file
    submitFiles() {
      if (document.getElementById("fileInput").files.length > 0) {
        let newObject = {
          nameCurrent: this.fileName,
          status: 'Processing',
          messageDetail: '',
          knowledgeId: '',
          idx: this.nextIndex,
          // controller: null
        }
        // newObject.controller = new AbortController()

        self.items = self.$session.get('listKnowledge')
        self.items.push(newObject)
        this.nextIndex++
        self.$session.set('nextIndexKnowledge', self.nextIndex)
        self.$session.set('listKnowledge', self.items)

        /*
          Initialize the form data
        */
        let formData = new FormData();
        formData.append('file', this.files)
        fetch(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_KNOWLEDGE,
          {
            method: "PUT",
            // signal: newObject.controller.signal,
            headers: {
              // 'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer ' + self.$session.get("user").token
            },
            body: formData
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
                let res = utility.convertToJSONArray(string)

                self.items = self.$session.get('listKnowledge')
                let index = findKnowledge(newObject.idx, self.items)

                res.forEach((value) => {
                  if ("message" in value) {
                    self.items[index].status = "Fail"
                    self.items[index].messageDetail = value.message
                  } else {
                    self.items[index].status = value.status
                    self.items[index].knowledgeId = value.knowledgeId
                  }
                })
                self.$session.set('listKnowledge', self.items)
              }
              reader.releaseLock();
            }
            read();
          })
          .catch(console.error);
      } else {
        document.getElementById("noticeUpload").innerHTML = "Please choose file to upload!";
      }
    }
  }
}
</script>

<style scoped>
.err {
  color: red;
  font-size: 17px;
  margin-top: 20px;
}

.btnDelete {
  border-color: red;
  color: red;
}

.btnDelete:hover {
  background-color: red;
  color: #fff;
}

.actionBtn {
  background-color: #92c3f9;
  color: black;
  font-weight: bold;
  border: none;
}

.actionBtn:hover {
  background-color: #0088ff;
  color: #fff;
}


.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

table.table {
  table-layout: fixed;
}

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

h2 {
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
  background-color: #92c3f9;
  border: none;
  outline: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #0088ff;
  color: #fff;
}

</style>
