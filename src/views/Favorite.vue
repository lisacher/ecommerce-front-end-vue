<template>
  <div class="fav">
    <Navbar />
    <FavoriteList :favorites="favorite" @after-delete-fav="afterDeleteFav" />
    <FootNavBar class="mobile-show" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import FootNavBar from "../components/FootNavBar.vue";
import Navbar from "../components/Navbar.vue";
import FavoriteList from "../components/FavoriteList.vue";

const dummyData = [
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 199,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    incart: false,
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 299,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    incart: false,
  },
];

export default {
  components: { Navbar, FootNavBar, Footer, FavoriteList },
  name: "Favorite",
  data() {
    return {
      favorite: [],
    };
  },
  created() {
    this.fetchFavList();
  },
  methods: {
    fetchFavList() {
      this.favorite = dummyData;
    },
    afterDeleteFav(favoriteId) {
      this.favorite = this.favorite.filter(
        (favorite) => favorite.id !== favoriteId
      );
    },
  },
};
</script>

<style scoped></style>
