<template>
  <nav class="navbar navbar-light bg-light border-top">
    <div class="container">
      <router-link to="/login">
        <font-awesome-icon
          :icon="['far', 'user']"
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
      <router-link to="/">
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
    </div>
  </nav>
</template>

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
