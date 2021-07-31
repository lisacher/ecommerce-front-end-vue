<template>
  <div class="fav">
    <div class="container border-top">
      <h4>My Wishlist 我的收藏</h4>
      <div class="row border-bottom mb-3">
        <div class="col-sm-3 mb-3">
          <img
            class="img"
            src="https://pics.pzcdn.tw/pazzo/ProductCovers/a56bc6ed-c4e6-45e9-a003-5bf3d29823fb_w100_h100.jpg"
            alt=""
          />
        </div>
        <div class="col-sm-3 fav-detail">
          <div class="item-name">綁後交叉開式羅紋針織衣</div>
        </div>
        <div class="col-sm-3 fav-detail">
          <span class="item-price">NT$168</span>
        </div>
        <div class="col-sm-3 mt-2 mb-3">
          <button type="button" class="btn btn-outline-secondary">
            Add to bag
          </button>
          <font-awesome-icon
            :icon="['far', 'trash-alt']"
            size="lg"
            class="icon me-4 ms-4"
          />
        </div>
      </div>
      <div class="row border-bottom mb-3">
        <div class="col-sm-3 mb-3">
          <img
            class="img mt-2"
            src="https://pics.pzcdn.tw/pazzo/ProductCovers/a56bc6ed-c4e6-45e9-a003-5bf3d29823fb_w100_h100.jpg"
            alt=""
          />
        </div>
        <div class="col-sm-3 fav-detail">
          <div class="item-name">綁後交叉開式羅紋針織衣</div>
        </div>
        <div class="col-sm-3 fav-detail">
          <span class="item-price">NT$168</span>
        </div>
        <div class="col-sm-3 mt-2 mb-3">
          <button type="button" class="btn btn-outline-secondary">
            Add to bag
          </button>
          <font-awesome-icon
            :icon="['far', 'trash-alt']"
            size="lg"
            class="icon me-4 ms-4"
          />
        </div>
      </div>
    </div>
    <router-link to="/new" class="row">
      <button type="button" class="btn btn-light">
        Continue shopping
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.row {
  justify-content: center;
  text-decoration: none;
}
.container {
  margin-top: 120px;
  margin-bottom: 50px;
  width: 60%;
  height: 100%;
  background-color: rgba(237, 242, 245, 0.851);
}
@media (max-width: 768px) {
  .container {
    width: 90%;
  }
  .col-sm-3 {
    display: inline-block;
    align-self: center;
    width: 50%;
    height: 50%;
  }
}
@media (max-width: 375px) {
  .btn {
    padding: 2px;
    width: 350px;
  }
  .col-sm-3 {
    padding-left: 0;
  }
}

h4 {
  text-align: center;
  padding: 20px;
}
.item-name,
.item-price {
  font-size: 13px;
}
.item-price {
  font-weight: bold;
}
.fav-detail {
  display: flex;
  align-items: center;
  justify-content: center;
}
.col-sm-3 {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.btn {
  align-items: center;
  font-size: 13px;
}
.btn-light {
  border: 1px solid rgb(179, 174, 174);
  margin-bottom: 50px;
  width: 200px;
  height: 40px;
}
.icon {
  cursor: pointer;
  transition: all 0.3s;
}
.icon:hover {
  color: rgb(108, 104, 104);
  transform: translateY(-20%);
}
</style>
