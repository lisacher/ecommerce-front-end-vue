<template>
  <div class="container">
    <h3>新品上市</h3>
    <img
      src="https://img.ltwebstatic.com/images3_ach/2021/07/12/1626052971ab530fe2cca79b522aa9cf4128162648.webp"
      alt=""
      class="title-pic"
    />
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/26/1627300327c823e629f4ba0d0b9465d1e092bdb970_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/26/1627290029343ec06f982ae478d24f31fc67de8567_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/19/1626704803d6276a75a212c4ff294c89fad6e47958_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/09/162581983886cb66880d036c16ec282349580ff059_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/21/1626866164ff2bc277d491bcfd55335f638ca3048c_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/19/1626667441207a2d2fc10d054d286851d3e4e94aa1_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/27/1627365547a0638a825362d76f0c4a09a44e0600fd_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/09/162581983886cb66880d036c16ec282349580ff059_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/07/23/1627005048318476bbb57586eb92dc8601ef78f175_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
          <div class="item">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/05/24/16218366572489b6999b783f6a738e3bdc6e817195_thumbnail_405x552.jpg"
              class="pics"
              alt=""
            />
            <div class="item-detail">
              <p class="item-name">綁後十字交叉開式羅紋針織連體衣</p>
              <p class="item-price">NT$168</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}
.title-pic {
  width: 100%;
  height: 80%;
}
.pics {
  flex-direction: row;
  margin: 10px;
  width: 200px;
  height: 250px;
}
.item-name,
.item-price {
  font-size: 12px;
  text-align: center;
}
.carousel-item.active {
  display: flex;
}

.carousel-control-next,
.carousel-control-prev {
  background-color: rgb(193, 184, 154);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: 120px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  width: 1rem;
  height: 1rem;
  background-size: 100% 100%;
}
</style>
