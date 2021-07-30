<template>
  <div class="container">
    <h3>按品類選購</h3>
    <div class="row">
      <div class="col-sm-3 category">
        <img src="./../assets/tshirt.png" alt="" />
      </div>
      <div class="col-sm-3 category">
        <img src="./../assets/dress.png" alt="" />
      </div>
      <div class="col-sm-3 category">
        <img src="./../assets/top.png" alt="" />
      </div>
      <div class="col-sm-3 category">
        <img src="./../assets/homewear.png" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 category">
        <img src="./../assets/bottom.png" alt="" />
      </div>
      <div class="col-sm-3 category">
        <img src="./../assets/shoenbag.png" alt="" />
      </div>
      <div class="col-sm-3 category">
        <img src="./../assets/blouse.png" alt="" />
      </div>
      <div class="col-sm-3 category">
        <img src="./../assets/accessories.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}
.container {
  margin-top: 50px;
}
.category img {
  margin: 10px;
  width: 90%;
  height: 90%;
}
@media (max-width: 768px) {
  .col-sm-3 {
    width: 50%;
  }
}
</style>
