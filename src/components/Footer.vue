<template>
  <div class="footer">
    <h3 class="title">Little Good Things of Everyday Life .</h3>
    <ul class="footer-list d-flex justify-content-center">
      <li class="about">
        <router-link to="/">
          <span>關於我們</span>
        </router-link>
      </li>
      <li class="service">
        <router-link to="/">
          <span>退換貨服務</span>
        </router-link>
      </li>
      <li class="news">
        <router-link to="/">
          <span>重要公告</span>
        </router-link>
      </li>
      <li class="vip">
        <router-link to="/">
          <span>VIP募集</span>
        </router-link>
      </li>
      <li class="share">
        <router-link to="/">
          <span>穿搭分享</span>
        </router-link>
      </li>
    </ul>
    <div class="row">
      <div class="col-6 footer-description">
        <div class="mailmb-2">purenmee@gmail.com</div>
        <div class="open">MON.-FRI. 09:00-12:00 / 13:00-18:00</div>
        <div class="copyright">© PURENME All Rights Reserved.</div>
      </div>
      <div class="col-6 footer-social">
        <div class="follow pb-3">FOLLOW US</div>
        <router-link to="/">
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            size="2x"
            class="me-4 icon"
          />
        </router-link>
        <router-link to="/">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            size="2x"
            class="me-4 icon"
          />
        </router-link>
        <router-link to="/">
          <font-awesome-icon
            :icon="['fab', 'line']"
            size="2x"
            class="me-4 icon"
          />
        </router-link>
        <router-link to="/">
          <font-awesome-icon
            :icon="['fab', 'youtube']"
            size="2x"
            class="me-4 icon"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #dfd8c8;
  width: 100%;
  height: 350px;
  font-size: 14px;
  text-align: center;
  padding: 10px;
}
.footer span {
  margin-right: 30px;
  justify-content: center;
  font-weight: 800;
}
.title {
  margin: 50px;
}
.footer-list {
  margin-top: 40px;
  margin-bottom: 50px;
}
@media (max-width: 639px) {
  .footer h3 {
    font-size: 20px;
  }
}
@media (max-width: 495px) {
  .footer {
    height: 500px;
  }
  .footer span {
    line-height: 30px;
  }
  .footer h3,
  title {
    margin: 20px;
    font-size: 15px;
  }
  .footer-list {
    flex-direction: column;
    margin-bottom: 20px;
  }
  .row {
    flex-direction: column;
    align-items: center;
  }
  .col-6 {
    width: 100%;
  }
  .footer-description[data-v-40ab164b] {
    text-align: center;
  }
  .footer-social[data-v-40ab164b] {
    padding-top: 40px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
  }
}
.footer-description {
  text-align: end;
  margin-bottom: 5px;
}
.footer-social {
  padding-left: 80px;
  text-align: left;
}
.follow {
  font-weight: 800;
}
.copyright {
  padding-top: 10px;
  font-size: 12px;
}
</style>
