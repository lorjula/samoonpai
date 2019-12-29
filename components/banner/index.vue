<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~assets/img/2.jpg" class="d-block w-100" alt="0">
          <div class="carousel-caption ">
            <p style="font-size: 100px; font-weight: 500; color:#660000
                  ;"> HERBS</p>
            <h1 class="text" style="color:#333232"> Knowledge about Thai herbs</h1>
          </div>
        </div>

        <div class="carousel-item">
          <img src="~assets/img/3.jpg" class="d-block w-100" alt="1">
          <div class="carousel-caption ">
            <p style="font-size: 100px; font-weight: 500; color:#660000
                  ;">HEALTH</p>
            <h1 class="text" style="color:#333232"> take care of your health</h1>
          </div>
        </div>

        <div class="carousel-item">
          <img src="~assets/img/4.jpg" class="d-block w-100 " alt="2">
          <div class="carousel-caption ">
            <p style="font-size: 100px; font-weight: 500; color:#660000
                  ;">HAPPINESS</p>
            <h1 class="text" style="color:#333232"> Improved body Happiness that follows</h1>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: "index"
  }
</script>


<style scoped>

</style>
