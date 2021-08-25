<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Question Answer</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/qa">Question Answer</router-link>
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
                  <h2>Upload Question</h2>
                  <div class="upload-container">
                    <div class="border-container">
                      <p>To make this feature available,
                        your file must be in the correct format. You can check out <a
                          href="../../../static/QB_SWT391_BanTQ.doc"
                          download="The_sample_doc"><u>the sample
                          format</u></a></p>
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
                <p id="noticeUpload" class="err"></p>

                <!--table list QA uploaded-->
                <div v-if="items.length>0" style="margin-top: 50px">
                  <b-table :bordered="true" :borderless="true" :items="items.slice().reverse()" :fields="fields"
                           class="shadow text-center"
                           responsive="sm">
                    <template #cell(historyName)="row">
                      <div>{{ row.value }}</div>
                    </template>
                    <template #cell(status)="{item}">

                      <div v-if="item.status === 'Loading'">
                        Loading&nbsp;<i class="fa fa-spinner fa-spin"/>
                      </div>

                      <div v-else>
                        <div v-if="item.message !== 'DONE' && item.message !== ''" style="color: red">
                          <span v-b-tooltip.right="item.message">Error in processing</span>
                        </div>
                        <b-progress v-else-if="item.message === 'DONE'" :max="item.questions_number">
                          <b-progress-bar style="background-color: #4ABF60" :value="item.questions.length"
                                          :label="`Done`"></b-progress-bar>
                        </b-progress>
                        <b-progress v-else :max="item.questions_number">
                          <b-progress-bar class="progress-bar-animated" striped :value="item.questions.length"
                                          :label="`${((item.questions.length / item.questions_number) * 100).toFixed(0)}%`"></b-progress-bar>
                        </b-progress>
                        {{ item.questions.length + "/" + item.questions_number }}
                      </div>

                    </template>
                    <template #cell(action)="row">
                      <b-button variant="outline-primary" size="sm" @click="row.toggleDetails"
                                class="mr-1">
                        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details&nbsp;
                        <i class="fa" :class="[row.detailsShowing ? 'fa-eye-slash':'fa-eye']" aria-hidden="true"></i>
                      </b-button>

                      <b-button
                        v-if="row.item.message !== ''"
                        variant="outline-primary" size="sm"
                        v-on:click="viewQA(row.item.id)">
                        View&nbsp;<i class="fa fa-share-square-o" aria-hidden="true"></i>
                      </b-button>

                      <b-button
                        v-if="row.item.status !== 'Loading' && row.item.message === ''"
                        variant="outline-primary" size="sm"
                        v-on:click="cancelUpload(row.item)"
                        class="btnDelete">
                        Delete&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>
                      </b-button>
                    </template>

                    <template #row-details="row">
                      <b-card class="scrollbar">
                        <ul v-for="ob in row.item.questions" :key="ob.Number">
                          <li>{{ ob.Number + ". " + ob.Content }}</li>
                          <li>{{ "=> " + ob.Answer + ". " + ob.AnswerContent }}</li>
                        </ul>
                        <p v-if="row.item.message === ''">
                          <img style="max-height: 50px; max-width: 100px " src="../../assets/img/product/thinking.gif">
                        </p>
                      </b-card>
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
import * as utility from '../utility/utility';

function findQA(idx, listQA) {
  for (let i = 0; i < listQA.length; i++) {
    if (listQA[i].idx === idx) {
      return i
    }
  }
  return -1
}

let self
export default {
  name: "CompQA",
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
          key: 'historyName',
          label: 'File Name',
          thStyle: {background: '#92c3f9', color: 'black', width: '300px'},
        },
        {
          key: 'status',
          label: 'Status',
          thStyle: {background: '#92c3f9', color: 'black'},
        },
        {
          key: 'action',
          label: 'Action',
          thStyle: {background: '#92c3f9', color: 'black'},
        }
      ],
      files: ''
    }
  },
  /*
    Defines the method used by the component
  */
  created() {
    self = this
    if (!this.$session.exists('listQA')) {
      this.$session.set('listQA', [])
      this.items = this.$session.get('listQA')
    } else {
      this.items = this.$session.get('listQA')
    }

    if (!this.$session.exists('nextIndexQA')) {
      this.$session.set('nextIndexQA', 0)
      this.nextIndex = this.$session.get('nextIndexQA')
    } else {
      this.nextIndex = this.$session.get('nextIndexQA')
    }
  },
  methods: {
    // method cancel upload
    cancelUpload(item) {
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Cancel Upload</b>" +
        "<br><br>Are you sure you want to cancel upload?</p>";
      let options = {
        html: true,
        okText: 'Continue',
        cancelText: 'Close',
      };
      this.$dialog
        .confirm(message, options)
        .then(() => {

          self.items = self.$session.get('listQA')
          let index = findQA(item.idx, self.items)
          // self.items[index].controller.abort()
          self.items.splice(index, 1)
          self.$session.set('listQA', self.items)

          const axios = require('axios');
          axios
            .delete(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_HISTORY + "/" + item.id, {
              headers: {
                'Authorization': 'Bearer ' + self.$session.get("user").token
              }
            })
            .then(response => {
              // if (response.status === 200) {
              //   this.flash('Delete successfully!', 'success', {
              //     timeout: 10000
              //   });
              //   let index = this.items.indexOf(item)
              //   this.items.splice(index, 1)
              //   this.totalRows--
              // }
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(function () {
          console.log('Clicked on cancel');
        })
    },
    // method view QA
    viewQA(id) {
      self.$router.push('/history/' + id)
    },
    // method detect file selected
    handleFilesUpload(object) {
      if (document.getElementById("fileInput").files.length > 0) {
        this.files = this.$refs.file.files[0];
        this.fileName = object.target.files[0].name
        document.getElementById("noticeUpload").innerHTML = "";
      }
    },
    //method submit file
    submitFiles() {
      if (document.getElementById("fileInput").files.length > 0) {
        let objectQA = {
          id: '',
          historyName: this.fileName,
          historyDate: '',
          message: '',
          status: 'Loading',
          questions_number: 1,
          subject: '',
          questions: [],
          _showDetails: false,
          idx: this.nextIndex,
        }

        this.items = this.$session.get('listQA')
        this.items.push(objectQA)
        this.nextIndex++
        this.$session.set('nextIndexQA', this.nextIndex)
        this.$session.set('listQA', this.items)
        /*
        Initialize the form data
      */
        let formData = new FormData();
        formData.append('file', this.files)
        fetch(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_QA,
          {
            method: "PUT",
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
                let arrIndex = []
                self.items.forEach((item) => {
                  arrIndex.push({
                    index: self.items.indexOf(item),
                    showDetail: !!item._showDetails
                  })
                })
                self.items = self.$session.get('listQA')
                let index = findQA(objectQA.idx, self.items)
                arrIndex.forEach((item) => {
                  self.items[item.index]._showDetails = item.showDetail
                })
                res.forEach((value) => {
                  self.items[index].status = 'Process'
                  if ("id" in value) {
                    self.items[index].id = value.id
                    self.items[index].historyDate = value.historyDate
                    self.items[index].historyName = value.historyName
                    self.items[index].questions_number = value.questions_number
                    self.items[index].subject = value.subject
                  } else if ("message" in value) {
                    self.items[index].message = value.message
                  } else {
                    let question = {
                      Answer: value.Answer,
                      AnswerContent: '',
                      Content: value.Content,
                      Number: value.Number,
                      Options: value.Options
                    }
                    question.Options.forEach((value1) => {
                      if (value1.OptionKey === question.Answer) {
                        question.AnswerContent = value1.OptionContent
                      }
                    })
                    self.items[index].questions.push(question)
                  }
                })
                self.$session.set('listQA', self.items)
              }
              reader.releaseLock();
            }
            read();
          })
          .catch(error => {
            self.items[index].message = error.response.data.message
          });
      } else {
        document.getElementById("noticeUpload").innerHTML = "Please choose file to upload!";
      }
    }
  }
}
</script>

<style scoped>

.btnDelete {
  border-color: red;
  color: red;
}

.btnDelete:hover {
  background-color: red;
  color: #fff;
}

.scrollbar {
  height: 200px;
  overflow: auto;
  display: block;
}

ul {
  list-style: none;
  text-align: left;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

table.table {
  table-layout: fixed;
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
  font-weight: 600;
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

.err {
  color: red;
  font-size: 17px;
  margin-top: 20px
}
</style>
