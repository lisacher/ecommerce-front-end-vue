<template>
  <div class="fav">
    <Navbar />
    <FavoriteList />
    <FootNavBar class="mobile-show" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import FootNavBar from "../components/FootNavBar.vue";
import Navbar from "../components/Navbar.vue";
import FavoriteList from "../components/FavoriteList.vue";

export default {
  components: { Navbar, FootNavBar, Footer, FavoriteList },
};
</script>

<style scoped></style>
