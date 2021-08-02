<template>
  <div class="fav">
    <div class="container border-top">
      <h4>My Wishlist 我的收藏</h4>
      <div
        class="row border-bottom mb-3"
        v-for="(favorite, index) in favorites"
        :key="favorite.id"
      >
        <div class="col-sm-3 mb-3">
          <img class="img" :src="favorite.image" alt="" />
        </div>
        <div class="col-sm-3 fav-detail">
          <div class="item-name">{{ favorite.title }}</div>
        </div>
        <div class="col-sm-3 fav-detail">
          <span class="item-price">NT$ {{ favorite.price }}</span>
        </div>
        <div class="col-sm-3 mt-2 mb-3">
          <button
            type="button"
            v-if="!favorite.incart"
            class="btn btn-outline-secondary"
            @click.stop.prevent="AddToBag(favorite)"
          >
            Add to bag
          </button>
          <button
            type="button"
            v-else
            class="btn btn-outline-secondary active"
            disabled
          >
            Added
          </button>
          <font-awesome-icon
            :icon="['far', 'trash-alt']"
            size="lg"
            class="icon me-4 ms-4"
            @click="RemoveFromFav(index)"
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

<script>
import { Toast } from "./../utils/helpers";

export default {
  name: "FavoriteList",
  props: {
    favorites: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      favorite: this.favorites,
    };
  },
  methods: {
    AddToBag(favorite) {
      console.log(favorite);
      favorite.incart = true;
      Toast.fire({
        icon: "success",
        title: "新增成功！",
      });
    },
    RemoveFromFav(index) {
      this.favorite.splice(index, 1);
    },
  },
};
</script>

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
  object-fit: fill;
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
.btn.active {
  color: #fff;
  background-color: rgb(116, 115, 115);
}
</style>
