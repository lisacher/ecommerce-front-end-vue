<template>
  <div class="bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link class="navbar-brand me-5 ms-3" to="/"
          >P U R E N M E</router-link
        >
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
            style="--bs-scroll-height: 600px;"
          >
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/new"
                >NEW</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">RESTOCK</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Story
                <font-awesome-icon
                  :icon="['fas', 'caret-up']"
                  size="1x"
                  class="icon-up"
                />
                <font-awesome-icon
                  :icon="['fas', 'caret-down']"
                  size="1x"
                  class="icon-down"
                />
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">JUL｜ ABOUT ME 親密之夏</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">JUN｜ REMOREREAL 楊丞琳</a>
                </li>
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
            <!-- when 768px show in collapse -->
            <div class="nav-list">
              <li class="nav-item list">最新商品</li>
              <li class="nav-item sale">指定新品。兩件790</li>
              <li class="nav-item sale">指定新品。限時690</li>
              <li class="nav-item sale">指定新品。限時590</li>
              <li class="nav-item point">熱銷補貨</li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  上身類
                  <font-awesome-icon
                    :icon="['fas', 'caret-up']"
                    size="1x"
                    class="icon-up"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'caret-down']"
                    size="1x"
                    class="icon-down"
                  />
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">短袖上衣</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">無袖背心</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">襯衫</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">內衣居家服</a>
                  </li>
                </ul>
              </li>
              <!-- 下身 -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  下身類
                  <font-awesome-icon
                    :icon="['fas', 'caret-up']"
                    size="1x"
                    class="icon-up"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'caret-down']"
                    size="1x"
                    class="icon-down"
                  />
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">褲子</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">裙子</a>
                  </li>
                </ul>
              </li>
              <!-- 配件 -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  配件類
                  <font-awesome-icon
                    :icon="['fas', 'caret-up']"
                    size="1x"
                    class="icon-up"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'caret-down']"
                    size="1x"
                    class="icon-down"
                  />
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">鞋子</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">包包</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">眼鏡</a>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
          <form class="d-flex">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn me-3" type="submit">
              <font-awesome-icon
                :icon="['fas', 'search']"
                size="lg"
                class="icon"
              />
            </button>
          </form>
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
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import { Toast } from '../utils/helpers'
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
.bar {
  margin-bottom: 120px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
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
.nav-list {
  display: none;
}
.form-control {
  height: 26px;
  align-self: center;
}
.navbar-collapse {
  width: 100%;
  background-color: #fff;
}
.navbar-nav-scroll {
  text-align: center;
}

.dropdown-menu {
  text-align: center;
  border: 0;
}

/* when hover title */
@media (min-width: 992px) {
  .nav-link {
    position: relative;
  }
  .nav-link::after {
    content: "";
    width: 0%;
    height: 1px;
    background-color: rgb(167, 163, 163);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s linear;
  }
  .nav-link:hover::after {
    width: 95%;
  }
}
/* when dropdown icon changed */
[aria-expanded="false"] .icon-down {
  display: inline;
}

[aria-expanded="false"] .icon-up {
  display: none;
}

[aria-expanded="true"] .icon-down {
  display: none;
}

[aria-expanded="true"] .icon-up {
  display: inline;
}

@media (max-width: 991px) {
  .form-control {
    display: none;
  }
  .icon {
    display: none;
  }
  .nav-list {
    display: inline;
  }
  .list,
  .sale,
  .point {
    padding: 8px;
  }
  .sale {
    font-weight: 600;
    color: #6c7e9d;
  }
  .sale:hover {
    font-weight: 600;
    color: #5b6980;
  }
  .point {
    font-weight: 600;
    color: #d19c86;
  }
  .point:hover {
    color: #a47967;
  }
}
@media (max-width: 320px) {
  .navbar-brand {
    font-size: 25px;
  }
}
</style>
