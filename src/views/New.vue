<template>
  <div class="new">
    <Navbar class="nav" />
    <div class="row">
      <div class="col-sm-3">
        <SideNavBar />
      </div>
      <div class="col-sm-9">
        <ProductList />
      </div>
    </div>
    <div class="footer mt-5">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import SideNavBar from "../components/SideNavbar.vue";
import ProductList from "../components/ProductList.vue";

export default {
  components: { Navbar, SideNavBar, Footer, ProductList },
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
</style>
