<template>
  <div class="login">
    <Navbar />
    <div class="container">
      <div class="row">
        <form class="login-form" @submit.prevent.stop="SignInSubmit">
          <h3>登入</h3>
          <div class="mb-3">
            <label class="form-label">會員帳號</label>
            <input
              type="text"
              class="form-control"
              v-model="username"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">會員密碼</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">登入</button>
        </form>
        <form class="login-form" @submit.prevent.stop="SignUpSubmit">
          <h3>新用戶</h3>
          <div class="mb-3 ">
            <label class="form-label">電子郵箱</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">密碼</label>
            <input
              type="password"
              v-model="signupPassword"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">密碼確認</label>
            <input
              type="password"
              v-model="passwordCheck"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">註冊</button>
        </form>
      </div>
    </div>
    <FootNavBar class="mobile-show" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import FootNavBar from "../components/FootNavBar.vue";
import authorizationAPI from "./../apis/authorization";
import { Toast } from "../utils/helpers";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "Daisy",
    email: "daisy@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: false,
};

export default {
  components: { Navbar, Footer, FootNavBar },
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      signupPassword: "",
      passwordCheck: "",
    };
  },
  methods: {
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
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
    SignInSubmit() {
      authorizationAPI
        .signIn({
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("token", data.token);
          dummyUser.isAuthenticated = true;
          this.$router.push("/");
        })
        .catch((error) => {
          // 將密碼欄位清空
          this.password = "";
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "請確認您輸入了正確的帳號密碼",
          });
          console.log("error", error);
        });
    },
    SignUpSubmit() {
      const data = JSON.stringify({
        email: this.email,
        signupPassword: this.signupPassword,
        passwordCheck: this.passwordCheck,
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 100px;
}
h3 {
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
}
input:focus {
  outline: none;
}

.login-form {
  justify-content: center;
  margin-top: 50px;
  margin-left: 80px;
  width: 40%;
  height: 40%;
}
.form-label {
  font-size: 14px;
}
@media (max-width: 991px) {
  .login-form {
    margin-left: 0px;
    width: 100%;
    height: 100%;
  }
}
.btn-primary {
  width: 100%;
  background-color: #dfd8c8;
  color: black;
  border: none;
}
.btn-primary:hover {
  background-color: #b1aca0;
  color: #fff;
  transition: all 0.3s;
}
</style>
