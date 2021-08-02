<template>
  <div class="login">
    <Navbar />
    <div class="container">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">用戶名稱</label>
          <input type="text" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">會員帳號</label>
          <input type="text" class="form-control" required />
        </div>
        <div class="col-md-12">
          <label for="inputPassword4" class="form-label">Email</label>
          <input type="email" class="form-control" required />
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">修改密碼</label>
          <input type="password" class="form-control" />
        </div>
        <div class="col-6">
          <label for="inputAddress2" class="form-label">再次確認密碼</label>
          <input type="password" v-model="passwordCheck" class="form-control" />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">地址</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">性別</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>女</option>
            <option>男</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">郵遞區號</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-4 mb-3">
          <button type="submit" class="btn btn-primary">儲存</button>
        </div>
      </form>
    </div>

    <FootNavBar class="mobile-show" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import FootNavBar from "../components/FootNavBar.vue";

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
      this.currentUser = dummyUser.currentUser;
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 150px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}
.row {
  width: 80%;
  background-color: rgb(233, 228, 228);
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
  margin-top: 150px;
  width: 80%;
  height: 80%;
}
.form-label {
  font-size: 14px;
}
@media (max-width: 991px) {
  .login-form {
    width: 80%;
    height: 80%;
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
