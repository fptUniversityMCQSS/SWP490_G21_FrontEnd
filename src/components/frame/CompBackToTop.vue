<template>
  <button v-on:click="topFunction()" id="myBtn"><i style="font-size: 25px" class="fa fa-angle-double-up" aria-hidden="true"></i></button>
</template>

<script>
export default {
  name: 'CompBackToTop',
  mounted() {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }
  },
  methods: {
    topFunction() {
      window.scrollTo(0, 0);
    }
  }
}
</script>
<style scoped>
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #92c3f9;
}

#myBtn:hover {
  background-color: #00BFFF;
}
</style>
