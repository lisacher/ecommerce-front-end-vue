<template>
  <nav class="navbar navbar-light bg-light border-top">
    <div class="container">
      <router-link v-if="!isAuthenticated" to="/login">
        <font-awesome-icon
          :icon="['far', 'user']"
          size="lg"
          class="icon me-4 ms-4"
        />
      </router-link>
      <!-- when is user is login -->
      <router-link v-if="isAuthenticated" to="/profile">
        <font-awesome-icon
          :icon="['fas', 'user']"
          size="lg"
          class="icon me-4 ms-4"
        />
      </router-link>
      <router-link to="/favorite">
        <font-awesome-icon
          :icon="['far', 'heart']"
          size="lg"
          class="me-4 icon"
        />
      </router-link>
      <router-link to="/checkout">
        <font-awesome-icon
          :icon="['fas', 'shopping-cart']"
          size="lg"
          class="icon me-4"
        />
      </router-link>
      <router-link to="/">
        <font-awesome-icon
          :icon="['far', 'question-circle']"
          size="lg"
          class="icon me-4"
        />
      </router-link>
      <router-link to="/">
        <font-awesome-icon
          :icon="['fas', 'sign-out-alt']"
          v-if="isAuthenticated"
          size="lg"
          class="icon me-4"
        />
      </router-link>
    </div>
  </nav>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "Daisy",
    email: "daisy@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  name: "NavBar",
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 50px;
}
</style>
