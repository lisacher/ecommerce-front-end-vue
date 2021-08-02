<template>
  <div class="cart">
    <Navbar />
    <Checkout :incart="cart" @after-delete-cart="afterDeleteCart" />
    <FootNavBar class="mobile-show" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import FootNavBar from "../components/FootNavBar.vue";
import Navbar from "../components/Navbar.vue";
import Checkout from "../components/Checkout.vue";

const dummyData = [
  {
    id: 6,
    count: 1,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 199,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 19,
    count: 2,
    title: "Opna Women's Short Sleeve Moisture",
    price: 299,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
];

export default {
  components: { Navbar, FootNavBar, Footer, Checkout },
  name: "ShoppingCart",
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.fetchUserCart();
  },
  methods: {
    fetchUserCart() {
      this.cart = dummyData;
    },
    afterDeleteCart(itemId) {
      this.cart = this.cart.filter((cart) => cart.id !== itemId);
    },
  },
};
</script>
