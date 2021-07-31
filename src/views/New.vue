<template>
  <div class="new">
    <Navbar />
    <div class="row">
      <div class="col-sm-3">
        <SideNavBar class="mobile-none" />
      </div>
      <div class="col-sm-9">
        <ProductList />
      </div>
    </div>
    <div class="footer mt-5">
      <FootNavBar class="mobile-show" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import SideNavBar from "../components/SideNavbar.vue";
import ProductList from "../components/ProductList.vue";
import FootNavBar from "../components/FootNavBar.vue";

export default {
  components: { Navbar, SideNavBar, Footer, ProductList, FootNavBar },
};
</script>

<style scoped></style>
