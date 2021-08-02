<template>
  <div class="product">
    <div class="row">
      <div class="col-sm-3 item" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'new', params: { id: product.id } }">
          <img :src="product.image" alt="" />
          <div class="item-detail">
            <p class="item-name">{{ product.title }}</p>
            <p class="item-price">NT$ {{ product.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductList",
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
.item {
  margin-bottom: 30px;
}
.item img {
  width: 70%;
  height: 70%;
  object-fit: contain;
}
.item img:hover {
  opacity: 0.6;
  transition: all 0.5s;
}
@media (max-width: 768px) {
  .item-detail {
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .item img {
    margin-left: 20px;
    width: 80%;
    height: 70%;
  }
  .col-sm-3 {
    width: 50%;
  }
}

.item-name,
.item-price {
  width: 80%;
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
