<template>
  <div>
    <comp-header/>
    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content text-center">
            <h2>API Library</h2>
            <div class="page_link">
              <router-link to="/">Home</router-link>
              <router-link to="/user">API Library</router-link>
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
          <div :class="[username === '' ? 'col-lg-12, library' : 'col-lg-10']">
            <div class="col-lg-8 mx-auto section_gap py-5 about">
              <h3>API Library</h3>

              <h4 style="margin-top: 50px">User:</h4>
              <!--LoginResponse-->
              <div class="top" @click="LoginResponse = !LoginResponse">
                <a href="#" onclick="return false">Login <span class="api">POST /api/login &nbsp;
                  <i class="fa" :class="[LoginResponse ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="LoginResponse">
                  <span>Params:</span><br>
                  - username: "khailq",<br>
                  - password: "1234"<br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "username": "khailq",
  "role": "user",
  "email": "khailq@gmail.com",
  "phone": "0934123552",
  "fullName": "Lang Quoc Khai",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4Mjc5NzksInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.VVFdXsSiuxjZpBRJFOtZgXGgBJUw9SYTx6s8B0V189A"
}
                  </pre>
                </b-card>
              </div>

              <!--RegisterResponse-->
              <div class="top" @click="RegisterResponse = !RegisterResponse">
                <a href="#" onclick="return false">Register<span
                  class="api">POST /api/register &nbsp;
                  <i class="fa" :class="[RegisterResponse ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="RegisterResponse">
                  <span>Params:</span><br>
                  - fullName: "Lang Quoc Khai",<br>
                  - username: "khailq",<br>
                  - email: "khailq@gmail.com",<br>
                  - phone: "0364716284",<br>
                  - password: "1234"<br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "id": 10,
  "username": "khailq",
  "fullName": "Lang Quoc Khai",
  "role": "user",
  "email": "khailq@gmail.com",
  "phone": "0364716284"
}
                  </pre>
                </b-card>
              </div>

              <!--GetUserInfo-->
              <div class="top" @click="GetUserInfo = !GetUserInfo">
                <a href="#" onclick="return false">Get Profile
                  <span class="api">GET /api/user &nbsp;
                  <i class="fa" :class="[GetUserInfo ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="GetUserInfo">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "id": 10,
  "username": "khailq",
  "fullName": "Lang Quoc Khai",
  "role": "user",
  "email": "khailq@gmail.com",
  "phone": "0364716284"
}
                  </pre>
                </b-card>
              </div>

              <!--ChangeProfile-->
              <div class="top" @click="ChangeProfile = !ChangeProfile">
                <a href="#" onclick="return false">Change Profile<span class="api">PATCH /api/user &nbsp;
                  <i class="fa" :class="[ChangeProfile ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="ChangeProfile">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Params:</span><br>
                  - fullName: "Lang Quoc Khai",<br>
                  - email: "khailq@gmail.com",<br>
                  - phone: "0364716284",<br>
                  - change_password: true,<br>
                  - password: "1234",<br>
                  - newPassword: "12345"<br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "message": "Change Profile Successfully"
}
                  </pre>
                </b-card>
              </div>

              <!--QAResponse-->
              <div class="top" @click="QAResponse = !QAResponse">
                <a href="#" onclick="return false">
                  Question Answer<span class="api">PUT /api/qa &nbsp;
                  <i class="fa" :class="[QAResponse ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="QAResponse">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Params:</span><br>
                  - file: (template .docx File)<br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "id": 105,
  "historyDate": "2021-08-24T23:08:14.7878834+07:00",
  "historyName": "CEA201-Test01-test.docx",
  "user": "khailq",
  "subject": "CEA201_Test01",
  "questions_number": 1,
  "status": "processing"
}

{
  "Number": 8,
  "Content": "The Pentium 4 _________ component executes micro-operations, fetching the required data from the L1 data cache and temporarily storing results in registers.",
  "Options": [
    {
      "OptionKey": "A",
      "OptionContent": "Fetch/decode unit"
    },
    {
      "OptionKey": "B",
      "OptionContent": "Out-of-order execution logic"
    },
    {
      "OptionKey": "C",
      "OptionContent": "Execution unit"
    },
    {
      "OptionKey": "D",
      "OptionContent": "Memory subsystem"
    }
  ],
  "Answer": "A"
}

{
  "id": 105,
  "historyDate": "2021-08-24T23:08:14.7878834+07:00",
  "historyName": "CEA201-Test01-test.docx",
  "user": "khailq",
  "subject": "CEA201_Test01",
  "questions_number": 1,
  "status": "finished"
}

{
  "message": "DONE"
}
                  </pre>
                </b-card>
              </div>

              <!--History Exam-->
              <div class="top" @click="History = !History">
                <a href="#" onclick="return false">History Exam<span class="api">GET /api/history &nbsp;
                  <i class="fa" :class="[History ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="History">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
[
  {
    "id": 101,
    "historyDate": "2021-08-22T21:05:04+07:00",
    "historyName": "CEA201 Test01 test.docx",
    "user": "",
    "subject": "CEA201_Test01",
    "questions_number": 1,
    "status": "finished"
  },
  {
    "id": 102,
    "historyDate": "2021-08-23T14:55:03+07:00",
    "historyName": "SWT_QB.docx",
    "user": "",
    "subject": "SWT301",
    "questions_number": 352,
    "status": "finished"
  },
  {
    "id": 103,
    "historyDate": "2021-08-24T16:04:23+07:00",
    "historyName": "dbw.pdf",
    "user": "",
    "subject": "",
    "questions_number": 0,
    "status": ""
  },
  {
    "id": 104,
    "historyDate": "2021-08-24T16:04:57+07:00",
    "historyName": "DBW301.docx",
    "user": "",
    "subject": "DBW301",
    "questions_number": 10,
    "status": "finished"
  },
  {
    "id": 105,
    "historyDate": "2021-08-24T16:08:15+07:00",
    "historyName": "CEA201-Test01-test.docx",
    "user": "",
    "subject": "CEA201_Test01",
    "questions_number": 1,
    "status": "finished"
  }
]
                  </pre>
                </b-card>
              </div>

              <!--GetExamById-->
              <div class="top" @click="GetExamById = !GetExamById">
                <a href="#" onclick="return false">Get Exam
                  <span class="api">GET /api/history/:id &nbsp;
                  <i class="fa" :class="[GetExamById ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="GetExamById">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "Id": 101,
  "Name": "CEA201 Test01 test.docx",
  "User": {
    "id": 17,
    "username": "khailq",
    "fullName": "Lang Quoc Khai",
    "role": "admin",
    "email": "khailq@gmail.com",
    "phone": "0934123552"
  },
  "Subject": "CEA201_Test01",
  "NumberOfQuestions": 1,
  "Date": "2021-08-22T21:05:04+07:00",
  "Questions": [
    {
      "Number": 8,
      "Content": "The Pentium 4 _________ component executes micro-operations, fetching the required data from the L1 data cache and temporarily storing results in registers.",
      "Options": [
        {
          "OptionKey": "A",
          "OptionContent": "Fetch/decode unit"
        },
        {
          "OptionKey": "B",
          "OptionContent": "Out-of-order execution logic"
        },
        {
          "OptionKey": "C",
          "OptionContent": "Execution unit"
        },
        {
          "OptionKey": "D",
          "OptionContent": "Memory subsystem"
        }
      ],
      "Answer": "D"
    }
  ]
}
                  </pre>
                </b-card>
              </div>

              <!--DownloadExam-->
              <div class="top" @click="DownloadExam = !DownloadExam">
                <a href="#" onclick="return false">Download Exam
                  <span class="api">GET /api/history/:id/download &nbsp;
                  <i class="fa" :class="[DownloadExam ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="DownloadExam">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>(file)
                </b-card>
              </div>

              <!--List Knowledge-->
              <div class="top" @click="KnowledgeList = !KnowledgeList">
                <a href="#" onclick="return false">List Knowledge<span class="api">GET /api/knowledge &nbsp;
                  <i class="fa" :class="[KnowledgeList ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="KnowledgeList">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
[
  {
    "knowledgeId": 100,
    "knowledgeName": "tian_software_quality_engineering.pdf",
    "knowledgeDate": "2021-08-23T14:52:33+07:00",
    "Username": "khailq",
    "status": "Ready"
  }
]
                  </pre>
                </b-card>
              </div>


              <!--Download Knowledge-->
              <div class="top" @click="KnowledgeDownload = !KnowledgeDownload">
                <a href="#" onclick="return false">Download Knowledge<span class="api">GET /api/knowledge/:id &nbsp;
                  <i class="fa" :class="[KnowledgeDownload ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="KnowledgeDownload">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>(file)
                </b-card>
              </div>

              <h4 style="margin-top: 50px">Staff:</h4>

              <!--Knowledge Upload-->
              <div class="top" @click="KnowledgeUpload = !KnowledgeUpload">
                <a href="#" onclick="return false">Upload Knowledge<span class="api">PUT /api/knowledge &nbsp;
                  <i class="fa" :class="[KnowledgeUpload ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="KnowledgeUpload">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Params:</span><br>
                  - file: (file)<br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "knowledgeId": 101,
  "knowledgeName": "DBW301.docx",
  "knowledgeDate": "2021-08-24T23:24:33.0541487+07:00",
  "Username": "khailq",
  "status": "Processing"
}

{
  "knowledgeId": 101,
  "knowledgeName": "DBW301.docx",
  "knowledgeDate": "2021-08-24T23:24:33.0690269+07:00",
  "Username": "khailq",
  "status": "Encoding"
}

{
  "knowledgeId": 101,
  "knowledgeName": "DBW301.docx",
  "knowledgeDate": "2021-08-24T23:24:34.0605579+07:00",
  "Username": "khailq",
  "status": "Ready"
}
                  </pre>
                </b-card>
              </div>

              <!--Delete Knowledge-->
              <div class="top" @click="KnowledgeDelete = !KnowledgeDelete">
                <a href="#" onclick="return false">Delete Knowledge<span class="api">DELETE /api/knowledge/:id &nbsp;
                  <i class="fa" :class="[KnowledgeDelete ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="KnowledgeDelete">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "message": "Delete successfully"
}
                  </pre>
                </b-card>
              </div>

              <h4 style="margin-top: 50px">Admin:</h4>

              <!--ListUser-->
              <div class="top" @click="ListUser = !ListUser">
                <a href="#" onclick="return false">List User
                  <span class="api">GET /api/admin/user &nbsp;
                  <i class="fa" :class="[ListUser ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="ListUser">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
[
  {
    "id": 17,
    "username": "khailq",
    "fullName": "Lang Quoc Khai",
    "role": "admin",
    "email": "khailq@gmail.com",
    "phone": "0934123552"
  },
  {
    "id": 18,
    "username": "minhpahe123456",
    "fullName": "Pham Anh Minh",
    "role": "user",
    "email": "minhpahe@fpt.edu.vn",
    "phone": "0389556127"
  }
]
                  </pre>
                </b-card>
              </div>

              <!--AdminAddUser-->
              <div class="top" @click="AdminAdd = !AdminAdd">
                <a href="#" onclick="return false" class="leftCol changePassword">Add User
                  <span class="api">POST /api/admin/user &nbsp;
                  <i class="fa" :class="[AdminAdd ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="AdminAdd">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Params:</span><br>
                  - fullName: "Lang Quoc Khai",<br>
                  - username: "khailq",<br>
                  - role: "user",<br>
                  - email: "khailq@gmail.com",<br>
                  - phone: "0364716284",<br>
                  - password: "1234"<br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "id": 19,
  "username": "khailq",
  "fullName": "Lang Quoc Khai",
  "role": "user",
  "email": "khailq@gmail.com",
  "phone": "0364716284"
}
                  </pre>
                </b-card>
              </div>

              <!--GetUserById-->
              <div class="top" @click="GetUserById = !GetUserById">
                <a href="#" onclick="return false">Get User
                  <span class="api">GET /api/admin/user/:id &nbsp;
                  <i class="fa" :class="[GetUserById ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="GetUserById">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "id": 19,
  "username": "phamanhminh",
  "fullName": "Pham Anh Minh",
  "role": "user",
  "email": "minhpahe130332@fpt.edu.vn",
  "phone": "0389556127"
}
                  </pre>
                </b-card>
              </div>

              <!--DeleteUserById-->
              <div class="top" @click="DeleteUserById = !DeleteUserById">
                <a href="#" onclick="return false">Delete User<span class="api">DELETE /api/admin/user/:id &nbsp;
                  <i class="fa" :class="[DeleteUserById ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="DeleteUserById">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "message": "Delete User successfully"
}
                  </pre>
                </b-card>
              </div>

              <!--UpdateUser-->
              <div class="top" @click="UpdateUser = !UpdateUser">
                <a href="#" onclick="return false">Update User<span class="api">PATCH /api/admin/user/:id &nbsp;
                  <i class="fa" :class="[UpdateUser ? 'fa-angle-up' : 'fa-angle-down']"
                     aria-hidden="true"></i></span></a>
              </div>
              <div>
                <b-card class="bcardStyle" v-if="UpdateUser">
                  <span>Header:</span><br>
                  - Authorization: "Bearer
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk4MzE4MjcsInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6MTcsInVzZXJuYW1lIjoia2hhaWxxIn0.ia9mnpDZU63y7tbh6-
                  lSj0-ET6k6ub1JS6w_S4V4gPE"
                  <br><br>
                  <span>Params:</span><br>
                  - fullName: "Lang Quoc Khai",<br>
                  - email: "khailq@gmail.com",<br>
                  - phone: "0364716284",<br>
                  - change_password: true,<br>
                  - password: "1234",<br><br>
                  <span>Response:</span><br>
                  <pre>
{
  "message": "edit user successfully"
}
                  </pre>
                </b-card>
              </div>
            </div>
          </div>
          <div v-if="username !== ''" class="col-lg-2 fixed-sidebar">
            <comp-left-sider/>
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

export default {
  name: "CompAPILibrary",
  components: {
    CompHeader, CompFooter, CompBackToTop, CompLeftSider
  },
  data() {
    return {
      username: '',
      LoginResponse: false,
      RegisterResponse: false,
      QAResponse: false,
      KnowledgeList: false,
      KnowledgeUpload: false,
      KnowledgeDownload: false,
      KnowledgeDelete: false,
      History: false,
      GetExamById: false,
      DownloadExam: false,
      ListUser: false,
      AdminAdd: false,
      GetUserById: false,
      DeleteUserById: false,
      UpdateUser: false,
      ChangeProfile: false,
      GetUserInfo: false,
    }
  },
  created() {
    this.username = this.$session.get('user').username
  }
}
</script>

<style scoped>
.about {
  color: black;
  margin-bottom: 80px;
}

.fixed-sidebar {
  position: -webkit-sticky;
  position: sticky;
  height: 700px;
  color: #fff;
  top: 80px;
  z-index: 999;
}

.top {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 20px;
  height: auto;
  width: 90%;
  padding: 10px 30px;
  background-color: #c0dcf6;
  color: black;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important
}

.top a {
  color: black;
  font-weight: bold;
  font-size: 17px;
}

.api {
  float: right;
  padding-right: 10px
}

.bcardStyle {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 90%;
  height: auto;
  padding: 10px;
}

span {
  font-weight: bold;
}

pre {
  color: #b49124
}

.library{
padding-left: 100px;
}
</style>
