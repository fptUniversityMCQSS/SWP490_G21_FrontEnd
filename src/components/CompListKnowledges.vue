<template>
  <div id="app">
    {{info}}
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Date</th>
        <th scope="col">Username</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in info" :key="data.id" >
        <td>{{data.Name}}</td>
        <td>{{data.Date}}</td>
        <td>{{data.Username}}</td>
      </tr>
      </tbody>
    </table>
    <b-table striped hover :items="info"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CompListKnowledges',
  data() { return {
    info: null,
  }
  },
  created () {
    axios
      .get('http://localhost:1323/knowledge')
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data
        // this.info = JSON.parse(this.info)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
