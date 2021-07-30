<template>
  <div class="home-navbar">
    <Navbar class="nav" />
    <HomeSlider />
    <HomeCategory />
    <HomePicsWall />
    <div class="content">
      <h3>限時促銷</h3>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 item">
            <img
              src="./../assets/sale1.png"
              width="550px"
              height="300px"
              alt=""
            />
          </div>
          <div class="col-sm-6 item">
            <img
              src="./../assets/sale2.png"
              width="550px"
              height="300px"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <HomeProducts />
    <img src="./../assets/1.jpg" width="100%" height="100%" alt="" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import HomeSlider from "./../components/HomeSlider.vue";
import Footer from "./../components/Footer.vue";
import HomePicsWall from "./../components/HomePicsWall.vue";
import HomeCategory from "./../components/HomeCategory.vue";
import HomeProducts from "./../components/HomeProducts.vue";

export default {
  components: {
    Navbar,
    HomeSlider,
    Footer,
    HomePicsWall,
    HomeCategory,
    HomeProducts,
  },
  name: "Home",
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}
img {
  margin-top: 50px;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.content h3 {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
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
    width: 90%;
    height: 90%;
  }
}
@media (max-width: 425px) {
  .content h3 {
    text-align: center;
    padding-top: 30px;
    font-size: 35px;
  }
  .item img {
    width: 90%;
    height: 90%;
  }
}
</style>
