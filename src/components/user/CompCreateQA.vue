<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>Create Exam</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/qa">Create Exam</router-link>
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
            <div class="col-lg-10 mx-auto">
              <!--component Question Answer-->
              <div class="wrapper">
                <div class="contCreate shadow">
                  <h2 style="padding: 20px">Create Question Answer Exam</h2>
                  <div class="px-4" style="margin-top: 50px">
                    <div class="form-row mt-4">
                      <div class="col-md-3 col-form-label">
                        <label for="nameQA" style="font-weight: 500; float: left">Name:</label>
                      </div>
                      <div class="col-md-9">
                        <input v-model="qaCreated.Name" type="text" name="Name" class="form-control"
                               id="nameQA" v-validate="'required'" placeholder="Enter Name"
                               :class="{ 'is-invalid': submitted && errors.has('Name') }">
                        <div v-if="submitted && errors.has('Name')" class="invalid-feedback">
                          {{ errors.first('Name') }}
                        </div>
                      </div>
                    </div>

                    <div class="form-row mt-2">
                      <div class="col-md-3 col-form-label">
                        <label for="subject" style="font-weight: 500; float: left">Subject:</label>
                      </div>
                      <div class="col-md-9">
                        <input v-model="qaCreated.Subject" type="text" name="Subject" class="form-control"
                               id="subject" v-validate="'required'" placeholder="Enter Subject"
                               :class="{ 'is-invalid': submitted && errors.has('Subject') }">
                        <div v-if="submitted && errors.has('Subject')" class="invalid-feedback">
                          {{ errors.first('Subject') }}
                        </div>
                      </div>
                    </div>
                    <div class="form-row mt-2">
                      <div class="col-md-3 col-form-label">
                        <label style="font-weight: 500; float: left">Number of Questions: </label>
                      </div>
                      <div class="col-md-7">
                        <input v-model="numberQuestions" type="number" name="Number Of Questions" class="form-control"
                               id="number-of-questions"
                               min="1" max="200" placeholder="Enter Number Of Questions"
                               v-validate="{ required: true, min : 1, max:200, regex: /^[1-9][0-9]?$|^200$/ }"
                               :class="{ 'is-invalid': submitted && errors.has('Number Of Questions') }">
                        <div v-if="submitted && errors.has('Number Of Questions')" class="invalid-feedback">
                          {{ errors.first('Number Of Questions') }}
                        </div>
                      </div>
                      <div class="col-md-2">
                        <b-button @click="generateQA" variant="outline-primary" style="float: right">Generate
                        </b-button>
                      </div>
                    </div>

                    <div class="mt-5">
                      <div v-for="(input,k) in qaCreated.Questions" :key="k">
                        <div class="card position-relative shadow-sm p-3 mb-5 bg-white rounded" id="question-1">
                          <div class="col-12">
                            <button type="button" class="position-absolute close" style="right: 0.3em"
                                    aria-label="Close">
                              <span aria-hidden="true" style="color: #ff0000">
                                <i class="fa fa-window-close" @click="remove(k)"
                                   v-show="k || ( !k && qaCreated.Questions.length >= 1)"
                                   aria-hidden="true"/></span>
                            </button>
                          </div>

                          <div class="card-body py-4">
                            <div class="col-12">
                              <div class="form-row mb-3">
                                <label class="col-sm-2 col-form-label" style="font-weight: 500"
                                       for="question-1-context">Question {{ input.number }}</label>
                                <textarea v-model="input.Content" type="text" class="form-control col-sm-9"
                                       name="context" placeholder="Enter Question Content"
                                       id="question-1-context"/>
                              </div>
                              <div class="form-row mb-3">
                                <label class="col-sm-2 col-form-label" for="question-1-option-1">A</label>
                                <input v-model="input.optionA" type="text" class="form-control col-sm-9"
                                       name="option-1" placeholder="Enter Option A"
                                       id="question-1-option-1"/>
                              </div>
                              <div class="form-row mb-3">
                                <label class="col-sm-2 col-form-label" for="question-1-option-2">B</label>
                                <input v-model="input.optionB" type="text" class="form-control col-sm-9"
                                       name="option-2" placeholder="Enter Option B"
                                       id="question-1-option-2"/>
                              </div>
                              <div class="form-row mb-3">
                                <label class="col-sm-2 col-form-label" for="question-1-option-3">C</label>
                                <input v-model="input.optionC" type="text" class="form-control col-sm-9"
                                       name="option-3" placeholder="Enter Option C"
                                       id="question-1-option-3"/>
                              </div>
                              <div class="form-row mb-3">
                                <label class="col-sm-2 col-form-label" for="question-1-option-4">D</label>
                                <input v-model="input.optionD" type="text" class="form-control col-sm-9"
                                       name="option-4" placeholder="Enter Option D"
                                       id="question-1-option-4"/>
                              </div>
                              <div class="form-row mb-3">
                                <label class="col-sm-2 col-form-label" for="question-1-option-5">E</label>
                                <input v-model="input.optionE" type="text" class="form-control col-sm-9"
                                       name="option-5" placeholder="Enter Option E"
                                       id="question-1-option-5"/>
                              </div>
                              <div class="form-row mb-3">
                                <label class="col-sm-2 col-form-label" for="question-1-option-6">F</label>
                                <input v-model="input.optionF" type="text" class="form-control col-sm-9"
                                       name="option-6" placeholder="Enter Option F"
                                       id="question-1-option-6"/>
                              </div>
                            </div>
                          </div>

                        </div>

                        <b-button size="sm" style="float: right;" @click="add(k)"
                                  v-show="k === qaCreated.Questions.length-1"
                                  variant="outline-primary">
                          <i class="fa fa-plus" aria-hidden="true"/>&nbsp;Add
                          question
                        </b-button>
                      </div>
                    </div>
                  </div>
                </div>
                <br>

                <div v-if="qaCreated.Questions.length > 0">
                  <b-button variant="outline-primary" class="btnUpload" @click="submitCreateQA">
                    Create Question Answer
                  </b-button>
                  <b-button variant="outline-primary" class="btnCancel"
                            @click="cancelCreate">
                    Cancel
                  </b-button>
                </div>
              </div>
              <!--End upload Question Answer-->
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
  name: "CompCreateQA",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      qaCreated: {
        Name: '',
        Subject: '',
        NumberOfQuestions: 0,
        Questions: []
      },
      numberQuestions: '',
      submitted: false,
    }
  },
  /*
    Defines the method used by the component
  */

  methods: {
    cancelCreate() {
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Cancel Creating Exam</b>" +
        "<br><br>All contents will be cleared.<br> Do you want to continue?</p>";
      let options = {
        html: true,
        okText: 'Yes',
        cancelText: 'No',
        animation: 'bounce'
      };
      this.$dialog
        .confirm(message, options)
        .then(() => {
          this.qaCreated.Questions = []
          this.qaCreated.Name = ''
          this.qaCreated.Subject = ''
          this.numberQuestions = 1
          this.submitted = false;
        })
    },
    generateQA() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          let different = this.numberQuestions - this.qaCreated.Questions.length
          if (different > 0) {
            for (let i = this.qaCreated.Questions.length + 1; i <= this.numberQuestions; i++) {
              this.qaCreated.Questions.push(
                {
                  number: i,
                  Content: '',
                  optionA: '',
                  optionB: '',
                  optionC: '',
                  optionD: '',
                  optionE: '',
                  optionF: '',
                });
            }
          } else {
            this.qaCreated.Questions.splice(this.qaCreated.Questions.length + different, -1 * different);
          }
        }
      })
    },
    add(index) {
      this.qaCreated.Questions.push(
        {
          number: this.qaCreated.Questions.length + 1,
          Content: '',
          optionA: '',
          optionB: '',
          optionC: '',
          optionD: '',
          optionE: '',
          optionF: '',
        })
      this.numberQuestions = this.qaCreated.Questions.length
    },
    remove(index) {
      let message = "<p style='text-align: center; padding-top: 5px'><b style='font-size: 20px'>Delete Question</b>" +
        "<br><br>Do you want to delete this question?</p>";
      let options = {
        html: true,
        okText: 'Yes',
        cancelText: 'No',
        animation: 'bounce',
      };
      this.$dialog
        .confirm(message, options)
        .then(() => {
          this.qaCreated.Questions.splice(index, 1);
          for (let i = 0; i < this.qaCreated.Questions.length; i++) {
            this.qaCreated.Questions[i].number = i + 1
          }
          this.numberQuestions = this.qaCreated.Questions.length
        })
    },
    submitCreateQA() {
      this.submitted = true;
      this.qaCreated.NumberOfQuestions = this.qaCreated.Questions.length
      this.$validator.validate().then(valid => {
        if (valid) {
          let jsonObject = {
            Name: this.qaCreated.Name,
            Subject: this.qaCreated.Subject,
            NumberOfQuestions: this.qaCreated.NumberOfQuestions,
            Questions: []
          }
          for (let index in this.qaCreated.Questions) {
            let question = this.qaCreated.Questions[index]
            let newQuestion = {
              Content: question.Content,
              Options: []
            }
            let contents = [question.optionA, question.optionB, question.optionC
              , question.optionD, question.optionE, question.optionF]
            let keys = ['A', 'B', 'C', 'D', 'E', 'F']
            for (let k = 0; k < 6; k++) {
              // if(contents[k].trim()==='') continue
              let newOption = {
                OptionKey: keys[k],
                OptionContent: contents[k]
              }
              newQuestion.Options.push(newOption)
            }
            jsonObject.Questions.push(newQuestion)
          }


          const self = this
          const axios = require('axios');

          axios
            .post(process.env.VUE_APP_BACKEND_SERVER + process.env.VUE_APP_QA, jsonObject,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + self.$session.get("user").token
                }, responseType: 'blob'
              })
            .then(response => {
              if (response.status === 200) {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', jsonObject.Name+'.docx');
                document.body.appendChild(link);
                link.click();
              }
            })
          .catch(err=>{
            console.log(err)
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.btnCancel {
  height: 50px;
  background-color: #92c3f9;
  border: none;
  outline: none;
  color: black;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  margin-top: 40px;
  margin-left: 50px;
  width: 200px
}

.btnCancel:hover {
  border: none;
  outline: none;
  background-color: #0088ff;
  color: #fff;
}

ul {
  list-style: none;
  text-align: left;
}

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 700px;
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
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(83, 92, 104, 0.71);
}

.wrapper {
  margin: auto;
  max-width: 800px;
  padding-top: 50px;
  padding-bottom: 60px;
  text-align: center;
}

.contCreate {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 50px;
  height: auto;
  padding-bottom: 50px;
}

h2 {
  color: #130f40;
  font-family: 'Varela Round', sans-serif;
  letter-spacing: -.5px;
  font-weight: 700;
  padding-bottom: 10px;
}

.border-container p {
  color: rgba(19, 15, 64, 0.85);
  font-weight: 600;
  font-size: 1.05em;
  letter-spacing: -1px;
  margin-top: 30px;
  margin-bottom: 0;
  opacity: 0.65;
}

.btnUpload {
  width: auto;
  height: 50px;
  background-color: #92c3f9;
  border: none;
  outline: none;
  color: black;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  margin-top: 40px;
}

.btnUpload:hover {
  border: none;
  outline: none;
  background-color: #0088ff;
  color: #fff;
}

</style>
