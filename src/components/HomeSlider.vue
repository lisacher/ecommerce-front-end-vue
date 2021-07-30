<template>
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade slider"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://img.ltwebstatic.com/images3_ach/2021/07/12/16260526767552e5f0593adab47aa1d7f65c6925d5.webp"
          class="d-block w-100 image"
          alt=""
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://img.ltwebstatic.com/images3_acp/2021/07/22/1626921752da7919c84226aecd1788ac3d0aeeb438.webp"
          class="d-block w-100 image"
          alt=""
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://img.ltwebstatic.com/images3_acp/2021/07/22/1626921699a82413d4fb599da268096808ac600c07.webp"
          class="d-block w-100 image"
          alt=""
        />
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
.carousel {
  margin-top: 100px;
}
@media (max-width: 768px) {
  .carousel {
    margin-top: 100px;
  }
  .image {
    height: 280px;
    object-fit: cover;
  }
}
</style>
