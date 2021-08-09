<template>
  <div class="fav">
    <div class="container border-top col-sm-8">
      <h4>Your shopping bag</h4>
      <div
        class="row border-bottom mb-3"
        v-for="(item, index) in cart"
        :key="item.id"
      >
        <div class="col-sm-3 mb-3">
          <img class="img" :src="item.image" alt="" />
        </div>
        <div class="col-sm-3 fav-detail">
          <div class="item-name">{{ item.title }}</div>
        </div>
        <div class="col-sm-3 fav-detail">
          <span class="item-price">NT$ {{ item.price * item.count }}</span>
        </div>
        <div class="col-sm-3 mt-2 mb-3">
          <font-awesome-icon
            :icon="['fas', 'minus-circle']"
            size="1x"
            class="me-4 icon"
            @click.prevent="handleMinus(item)"
          />
          {{ item.count }}
          <font-awesome-icon
            :icon="['fas', 'plus-circle']"
            size="1x"
            class="ms-4 me-3 icon"
            @click.prevent="handlePlus(item)"
          />
          <font-awesome-icon
            :icon="['far', 'trash-alt']"
            size="lg"
            class="icon ms-2"
            @click.prevent="RemoveFromCart(index)"
          />
        </div>
      </div>
    </div>
    <div class="checkout border-top col-sm-4">
      <h4>Payment and shipping</h4>
      <div class="payment">
        <p class="m-2">寄送方式</p>
        <select class="form-select m-2" aria-label="Default select example">
          <option selected>宅配</option>
          <option value="1">超商取貨不付款</option>
        </select>
        <p class="m-2">付款方式</p>
        <select class="form-select m-2" aria-label="Default select example">
          <option selected>線上刷卡</option>
          <option value="1">銀行轉帳</option>
        </select>
        <div class="check ms-2 d-flex">
          <p>金額:</p>
          <div class="price">NT$ {{ totalPrices }}</div>
        </div>
        <div class="check ms-2 d-flex">
          <p>運費:</p>
          <div class="price">免運費</div>
        </div>
        <div class="check ms-2 d-flex">
          <h5>
            總金額:
          </h5>
          <h5 class="price">NT$ {{ totalPrices }}</h5>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-light"
        @click.prevent="clickContinue"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";

export default {
  name: "Cheackout",
  props: {
    incart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cart: this.incart,
    };
  },
  methods: {
    RemoveFromCart(index) {
      this.cart.splice(index, 1);
    },
    handlePlus(item) {
      item.count++;
    },
    handleMinus(item) {
      if (item.count > 1) {
        item.count--;
      }
    },
    clickContinue() {
      Toast.fire({
        icon: "success",
        title: "已購買完成！",
      });
    },
  },
  computed: {
    totalPrices() {
      let totalPrices = 0;
      this.cart.forEach((item) => {
        totalPrices += parseFloat(item.price * item.count);
      });

      return totalPrices.toString();
    },
  },
};
</script>

<style scoped>
.fav {
  width: 100%;
  display: flex;
}
.row {
  justify-content: center;
  text-decoration: none;
}
.container {
  margin-bottom: 50px;
  width: 60%;
  height: 100%;
  background-color: rgba(237, 242, 245, 0.851);
}
.checkout {
  position: relative;
  background-color: rgba(237, 242, 245, 0.851);
  margin-left: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 30%;
}
.price {
  position: absolute;
  right: 10px;
}
.check p,
h5 {
  line-height: 30px;
}
p {
  font-size: 13px;
}
.form-select {
  width: 95%;
  margin: 10px;
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
  object-fit: fill;
}
.btn {
  font-size: 13px;
}
.btn-light {
  border: 1px solid rgb(179, 174, 174);
  margin: 30px;
  width: 100px;
  height: 40px;
}
.btn-link {
  display: flex;
  justify-content: center;
  text-decoration: none;
}
@media (max-width: 425px) {
  h5 {
    font-size: 15px;
    font-weight: 900;
  }
  .fav {
    display: block;
  }
  .col-sm-8,
  .col0sm-4 {
    align-self: center;
    width: 100%;
    height: 100%;
  }
  .container {
    width: 90%;
  }
  .checkout {
    margin-top: 20px;
    margin-left: 20px;
    width: 90%;
  }
}
.icon {
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 5px;
}
.icon:hover {
  color: rgb(108, 104, 104);
}
</style>
