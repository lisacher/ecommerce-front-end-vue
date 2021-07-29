<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand me-5 ms-3" href="#">P U R E N M E</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px;"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">NEW</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">RESTOCK</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Story
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
                <a class="dropdown-item" href="#">JUL｜ ABOUT ME 親密之夏</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">JUN｜ REMOREREAL 楊丞琳</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">MAY｜ FLOWERAGE 花樣年華</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >PRE-ORDER</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">#BKPANTS</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn me-3" type="submit">
            <font-awesome-icon :icon="['fas', 'search']" size="lg" />
          </button>
        </form>
        <font-awesome-icon
          :icon="['far', 'user']"
          size="lg"
          class="me-4 ms-4"
        />
        <font-awesome-icon :icon="['far', 'heart']" size="lg" class="me-4" />
        <font-awesome-icon
          :icon="['fas', 'shopping-cart']"
          size="lg"
          class="me-4"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 100px;
  background: #fff;
}
.navbar-brand {
  font-size: 35px;
  font-weight: 800;
}
.nav-item {
  margin-right: 20px;
}
.form-control {
  height: 26px;
  align-self: center;
}
</style>
