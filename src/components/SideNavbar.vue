<template>
  <div class="row side-list">
    <ul class="list-group">
      <p class="list-group-title">新品上市</p>
      <li class="list-group-item">本週新品</li>
      <li class="list-group-item sale">指定新品。兩件790</li>
      <li class="list-group-item sale">指定新品。限時690</li>
      <li class="list-group-item sale">指定新品。限時590</li>
      <li class="list-group-item point">熱銷補貨</li>
    </ul>

    <ul class="list-group">
      <p class="list-group-title">上身類</p>
      <li class="list-group-item">短袖上衣</li>
      <li class="list-group-item">無袖背心</li>
      <li class="list-group-item">襯衫</li>
      <li class="list-group-item">內衣居家服</li>
    </ul>

    <ul class="list-group">
      <p class="list-group-title">下身類</p>
      <li class="list-group-item">褲子</li>
      <li class="list-group-item">裙子</li>
    </ul>

    <ul class="list-group">
      <p class="list-group-title">配件類</p>
      <li class="list-group-item">鞋子</li>
      <li class="list-group-item">包包</li>
      <li class="list-group-item">眼鏡</li>
    </ul>
  </div>
</template>

<style scoped>
.side-list {
  width: 100%;
  font-size: 13px;
}
.list-group-title {
  font-size: 14px;
  font-weight: 800;
  margin-left: 50px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.list-group-item {
  margin-left: 50px;
  border: none;
  padding-top: 2px;
}
.list-group-item:hover {
  color: #666666;
}
.sale {
  font-weight: 600;
  color: #6c7e9d;
}
.sale:hover {
  font-weight: 600;
  color: #5b6980;
}
.point {
  font-weight: 600;
  color: #d19c86;
}
.point:hover {
  color: #a47967;
}
</style>
