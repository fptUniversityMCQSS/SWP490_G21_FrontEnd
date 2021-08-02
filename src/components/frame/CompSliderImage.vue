<template>
  <b-carousel v-if="!this.$session.get('token')"
    :interval="3000"
    controls
    indicators
    background="#ababab"
    class="carousel"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd">

    <b-carousel-slide class="carousel">
      <h2 style="padding-bottom: 50px">Do you have a high school exam test?<br>
        Let our AI assistant help you find the solution</h2>
      <router-link to="/login" class="white_bg_btn" style="margin-bottom: 80px">Get Started</router-link>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          src="../../assets/img/banner/bannerhome.jpg"
          alt="image slot"/>
      </template>
    </b-carousel-slide>

    <b-carousel-slide class="carousel">
      <h2 style="padding-bottom: 50px">Do you have a high school exam test?<br>
        Let our AI assistant help you find the solution</h2>
      <router-link to="/login" class="white_bg_btn" style="margin-bottom: 80px">Get Started</router-link>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          src="../../assets/img/banner/homebanner11.jpg"
          alt="image slot"/>
      </template>
    </b-carousel-slide>

    <b-carousel-slide class="carousel">
      <h2 style="padding-bottom: 50px">Do you have a high school exam test?<br>
        Let our AI assistant help you find the solution</h2>
      <router-link to="/login" class="white_bg_btn" style="margin-bottom: 80px">Get Started</router-link>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          src="../../assets/img/banner/homebanner2.jpeg"
          alt="image slot"/>
      </template>
    </b-carousel-slide>

  </b-carousel>

  <b-carousel v-else-if="this.$session.get('token')"
    :interval="3000"
    background="#ababab"
    class="carousel">

    <b-carousel-slide class="carousel">
      <h2 style="padding-bottom: 100px">Do you have a high school exam test?<br>
        Let our AI assistant help you find the solution</h2>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          src="../../assets/img/banner/homebanner11.jpg"
          alt="image slot"/>
      </template>
    </b-carousel-slide>

  </b-carousel>
</template>

<script>
export default {
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
.carousel {
  width: 100%;
  height: 500px;
}
</style>
