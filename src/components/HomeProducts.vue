<template>
  <div class="container">
    <h3>銷售榜</h3>
    <div class="row">
      <div class="col-sm-3 item" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="" />
        <div class="item-detail">
          <p class="item-name">{{ product.title }}</p>
          <p class="item-price">NT$ {{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProducts",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      product: this.products,
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}
.item img {
  margin: 10px;
  width: 70%;
  height: 70%;
  object-fit: contain;
}
@media (max-width: 768px) {
  .col-sm-3 {
    width: 50%;
  }
  .item-detail {
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .item img {
    margin-left: 20px;
    width: 80%;
    height: 70%;
  }
}

.item-name,
.item-price {
  font-size: 13px;
  text-align: left;
  padding-left: 10px;
}
.item-price {
  font-size: 14px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
