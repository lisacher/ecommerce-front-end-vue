<template>
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade slider"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./../assets/slider1.jpeg" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="./../assets/slider2.jpeg" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="./../assets/slider3.jpeg" class="d-block w-100" alt="" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.slider {
  left: 0;
  margin: 0;
}
</style>
