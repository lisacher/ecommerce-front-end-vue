<template>
  <div class="home-navbar">
    <Navbar class="nav" />
    <HomeSlider />
    <div class="content">
      <h1>BEST SELLERS</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 best-sell-content">
            <p>
              To make things easier, we've gathered top 3 products from list.
            </p>
          </div>
          <div class="col-sm-3 item">
            <img
              src="./../assets/AAA_0059.jpeg"
              width="300px"
              height="450px"
              alt=""
            />
          </div>
          <div class="col-sm-3 item">
            <img
              src="./../assets/AAA_0103.jpeg"
              width="300px"
              height="450px"
              alt=""
            />
          </div>
          <div class="col-sm-3 item">
            <img
              src="./../assets/AAA_0247.jpeg"
              width="300px"
              height="450px"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import HomeSlider from "./../components/HomeSlider.vue";
import Footer from "./../components/Footer.vue";

export default {
  components: { Navbar, HomeSlider, Footer },
  name: "Home",
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.content {
  background-color: #f4f4f4;
}
.content h1 {
  font-size: 60px;
  padding: 70px;
}
.best-sell-content p {
  display: flex;
  height: 100%;
  align-items: flex-end;
  padding-bottom: 80px;
  padding-left: 30px;
}
.item img {
  margin: 10px;
}
@media (max-width: 1024px) {
  .item {
    display: flex;
    justify-content: center;
  }
  .item img {
    width: 200px;
    height: 300px;
  }
}
@media (max-width: 425px) {
  .content h1 {
    text-align: center;
    padding-top: 30px;
    font-size: 35px;
  }
  .best-sell-content p {
    padding-bottom: 30px;
    text-align: center;
  }
  .item img {
    width: 300px;
    height: 450px;
  }
}
</style>
