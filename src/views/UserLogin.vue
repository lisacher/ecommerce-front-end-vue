<template>
  <div class="login">
    <Navbar />
    <div class="container">
      <div class="row">
        <form class="login-form">
          <h3>登入</h3>
          <div class="mb-3">
            <label for="account" class="form-label">會員帳號</label>
            <input type="text" class="form-control" id="account" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >會員密碼</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">登入</button>
        </form>
        <form class="login-form">
          <h3>新用戶</h3>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">電子郵箱</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密碼</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >密碼確認</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
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
export default {
  components: { Navbar, Footer, FootNavBar },
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
  margin-top: 150px;
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
