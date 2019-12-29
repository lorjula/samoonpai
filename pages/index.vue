<template>
  <div class="background" style="background-color:#f5f5f5">

    <div class="row">
      <div class="col-md-12">
        <div class="background" style="background-color:#e54500 ">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" href="/samoonpai" style="color: #ffffff;">สมุนไพร</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tanyaped" style="color: #ffffff;">ธัญพืช</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/peedpol" style="color: #ffffff;">พืชผัก</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/polmi" style="color: #ffffff;">ผลไม้</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <nav class="nav" style="background-image: linear-gradient(to bottom,#e54500, #FF6600); width: 100%;height: 100%;">
          <div class="container-fluid center">
            <div class="row flex-row center">
              <div class="col-lg-3  col-md-2 col-sm-1" style="padding-left:70px; ">
                <img src="~assets/img/samoonpai.png" style="width:100%"/>
              </div>
              <div class="col-lg-9  col-md-10 col-sm-11" style="margin-top:50px;">
                <form
                  class="form-inline center"
                  style="margin-left:20px;">
                  <table style="width: 100%;">
                    <tr>
                      <td>
                        <input
                          style="width: 100%;"
                          class="form-control mr-sm-1"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </td>
                      <td>
                        <button
                          class="btn background-color"
                          style="background-color:#660000; color: #ffffff;"
                          type="submit "
                        >Search
                        </button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <Banner/>
      </div>
    </div>
    <nav>
      <div class="container">
        <div class="row ">
          <div class="col-lg-3 mb-5 text-center ">
            <div class="carousel-item active">
              <img src="~assets/img/11.jpg" class="mr-3 mt-sm-5 mx-2 rounded-circle img-center"
                   style="width:50%;height:100%">
              <div class="pt-sm-2">
                <h2 style="color:#000000">สมุนไพร</h2>
                <p> สมุนไพรพื้นบ้านที่มีอยู่ใกล้ตัวเรา ช่วยในการบำบัดรักษาโรค ช่วยดูแลสุภาพ บำรุงร่างกาย
                  ทำให้มนุษย์หายจากการเจ็บป่วยได้อีกด้วย</p>
                <p><a class="btn" style="background-color:#660000;color: #ffffff; width: 40%" href="/samoonpai"
                      role="button">เข้าชม</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3  mb-5 text-center">
            <div class="carousel-item active">
              <img src="~assets/img/12.jpg" class="mr-3 mt-sm-5 mx-2 rounded-circle img-center"
                   style="width:50%;height:100%">
              <div class="pt-sm-2">
                <h2 class="text-center">ธัญพืช</h2>
                <p>
                  ธัญพืชมีคุณค่าทางอาหารสูงทั้งวิตามินแร่ธาตุต่างๆให้โปรตีนสูงและมีไขมันดีช่วยบำรุงร่างกาย
                  ชะลอวัยช่วยในการควบคุมน้ำหนักและลดไขมันได้ดี </p>
                <p><a class="btn " style="background-color:#660000;color: #ffffff; width: 40%;" href="/tanyaped"
                      role="button">เข้าชม</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-center mb-5">
            <div class="carousel-item active">
              <img src="~assets/img/13.jpg" class="mr-3 mt-sm-5 mx-2 rounded-circle img-center"
                   style="width:50%;height:100%">
              <div class="pt-sm-2">
                <h2 class="text-center"> พืชผัก</h2>
                <p>
                  ผักอุดมไปด้วย วิตามิน แร่ธาตุ ใยอาหาร และสารพฤกเคมี ช่วยเสริมสร้างควบคุมการทำงาน
                  และช่วยควบคุมการไหลเวียนของของเหลวในร่างกาย </p>
                <p><a class="btn " style="background-color:#660000;color: #ffffff; width: 40%" href="/peedpol"
                      role="button">เข้าชม</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-center mb-5">
            <div class="carousel-item active">
              <img src="~assets/img/14.png" class="mr-3 mt-sm-5 mx-2 rounded-circle img-center"
                   style="width:50%;height:100%">
              <div class="pt-sm-2">
                <h2 class="text-center">ผลไม้</h2>
                <p>
                  ผลไม้ไม่ได้มีเเค่ความอร่อยเท่านั้นแต่ยังเต็มไปด้วยประโยชน์มากมายมหาศาลเพราะเป็นแหล่ง
                  ของวิตามินและแร่ธาตุหลายชนิดที่มีประโยชน์ต่อร่างกาย</p>
                <p><a class="btn " style="background-color:#660000;color: #ffffff; width: 40%" href="/polmi"
                      role="button">เข้าชม</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


  </div>
</template>

<script>
  import Logo from "../components/Logo.vue";
  import Banner from "../components/banner/index";
  // import (ตั้งชื่อ component ชื่อที่สือความหมาย) from "../components/ชื่อโฟลเดอร์/ชื่อไฟล์";

  export default {
    components: {
      Logo,
      Banner, // เอาชื่อ component มาใส่
    },
    mounted() {
      $('.carousel').carousel()
    },
    methods: {}
  };
</script>

<style>
  .cover {
    height: 400px;
  }

  .links {
    padding-top: 15px;
  }
</style>
