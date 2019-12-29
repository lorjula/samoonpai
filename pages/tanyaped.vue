<template>
  <div class="background" style="background-color:#f5f5f5">
    <Navbar :onSearchResult="onSearchResult"/>

    <div class="container">
      <div class="row">
        <div class="col-md-12 align-content-center">
          <div style="text-align: center; width:100%;">
            <img src="~assets/img/asd-samoonpai.png" style="width:80%;">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-2" style="">
              <div class="mt-sm-0 btn-group-vertical">
                <a style="font-weight: bold;font-size: 23px; color:#4F4F4F">สมุนไพรไทย</a>
                <template v-for="t in tags">
                  <a style="color:#696969;" :href="t.tag">{{t.name}}</a>
                </template>
              </div>
            </div>
            <div class="col-md-10">
              <div class="pr-sm-5">

                <template v-for="c in list">
                  <div :id="c.tag" class="container card shadow border" style="width:100%">
                    <div class="row  align-content-md-center">
                      <div class="col-sm-7 p-2 ">
                        <img :src="c.image" style="width:100%;">
                      </div>
                      <div class="col-sm-5 p-3" style="width:auto;">
                        <div class="font-weight-normal">
                          <h3>{{c.name}}</h3>
                          <template v-for="text in c.benefit">
                            <p style="margin: 0;"> {{text}}</p>
                          </template>
                          <p style="font-size: 10px;">{{c.reference}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br>
                </template>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!--<div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-2">
              <div class="mt-sm-0 btn-group-vertical">
                <a style="font-weight: bold;font-size: 23px; color:#4F4F4F">ธัญพืช</a>
                <a style="color:#696969;" href="#leng">ถั่วเหลือง</a>
                <a style="color:#696969;" href="#kew">ถั่วเขียว</a>
                <a style="color:#696969;" href="#dang">ถั่วเเดง</a>
                <a style="color:#696969;" href="#dar">ถั่วดำ</a>
                <a style="color:#696969;" href="#lisong">ถั่วลิสง</a>
                <a style="color:#696969;" href="#rar">ถั่วเเระ</a>
                <a style="color:#696969;" href="#tow">ถั่วลันเตา</a>
                <a style="color:#696969;" href="#pap">ถั่วแปบ</a>
              </div>
            </div>
            <div class="col-md-10">
              <div class="pr-sm-5">
                <div id="leng" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/towleer.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วเหลือง</h4>
                        <p style="margin: 0;"> 1.บำรุงผิวพรรณ</p>
                        <p style="margin: 0;"> 2.ช่วยป้องกันกระดูกพรุน</p>
                        <p style="margin: 0;"> 3.ช่วยลดความเสี่ยงโรคหัวใจเส้นเลือดสมองตีบ</p>
                        <p style="margin: 0;"> 4.ช่วยลดความเสี่ยงมะเร็งเต้านม </p>
                        <p style="margin: 0;"> 5.ช่วยลดความเสี่ยงมะเร็งต่อมลูกหมาก</p>
                        <p style="margin: 0;"> 6.ช่วยให้น้ำหนักลดลง</p>
                        <p style="margin: 0;"> 7.เหมาะสำหรับคนที่แพ้แลคโตส</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://yupawanmanrat.blogspot.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div id="kew" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/GreenBean.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วเขียว</h4>
                        <p style="margin: 0;"> 1.ช่วยเสริมสร้างกล้ามเนื้อให้แข็งแรง</p>
                        <p style="margin: 0;"> 2.บำรุงร่างกาย บำรุงกำลัง เสริมสร้างภูมิคุ้มกัน
                          รักษาไข้หวัด</p>
                        <p style="margin: 0;"> 3.ช่วยในการทำงานของระบบเผาผลาญในร่างกาย</p>
                        <p style="margin: 0;"> 4.ช่วยลดความดันโลหิต</p>
                        <p style="margin: 0;"> 5.ช่วยทำให้เจริญอาหาร</p>
                        <p style="margin: 0;"> 6.ช่วยลดระดับไขมันและคอเลสเตอรอล  </p>
                        <p style="margin: 0;"> 7.ช่วยลดความเสี่ยงของการเกิดโรคหัวใจ</p>
                        <p style="margin: 0;"> 8.ช่วยลดระดับน้ำตาลในเลือดและเบาหวานได้</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://health.kapook.com/view153905.html</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div id="dang" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/dang.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วแดง</h4>
                        <p style="margin: 0;"> 1.ช่วยลดความเสี่ยงของการเกิดโรคเส้นเลือดในสมองปริแตกได้[</p>
                        <p style="margin: 0;"> 2.ช่วยขับพิษในร่างกาย</p>
                        <p style="margin: 0;"> 3.ช่วยทำความสะอาดลำไส้แล้ว </p>
                        <p style="margin: 0;"> 4.ช่วยบำรุงลำไส้</p>
                        <p style="margin: 0;"> 5.ช่วยในการขับถ่าย ช่วยในการย่อยอาหาร </p>
                        <p style="margin: 0;"> 6.ช่วยบรรเทาอาการจุกเสียดแน่นท้อง</p>
                        <p style="margin: 0;"> 7.ช่วยขับปัสสาวะ</p>
                        <p style="margin: 0;"> 8.ช่วยบำบัดอาการประจำเดือนผิดปกติของสตรี</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://www.moohouz.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div id="dar" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/doa.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วดำ</h4>
                        <p style="margin: 0;"> 1.ช่วยบำรุงโลหิต</p>
                        <p style="margin: 0;"> 2.บำรุงสายตา</p>
                        <p style="margin: 0;"> 3.ช่วยขจัดพิษในร่างกาย</p>
                        <p style="margin: 0;"> 4.ช่วยแก้อาการร้อนใน</p>
                        <p style="margin: 0;"> 5.ช่วยรักษาดีซ่าน</p>
                        <p style="margin: 0;"> 6.ช่วยขับลมในกระเพาะ</p>
                        <p style="margin: 0;"> 7.ช่วยบำรุงไต ป้องกันไตเสื่อม</p>
                        <p style="margin: 0;"> 8.ช่วยแก้อาการเหน็บชา</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://www.tnews.co.th</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div id="lisong" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/lisong.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วลิสง</h4>
                        <p style="margin: 0;"> 1.ช่วยบำรุงร่างกาย ช่วยในการเจริญเติบโต</p>
                        <p style="margin: 0;"> 2.ช่วยบำรุงสมองและประสาทตา </p>
                        <p style="margin: 0;"> 3.ช่วยให้ความอบอุ่นแก่ร่างกาย</p>
                        <p style="margin: 0;"> 4.ช่วยลดความดันโลหิตสูง</p>
                        <p style="margin: 0;"> 5.ถั่วลิสงมีฤทธิ์ต่อต้านมะเร็ง </p>
                        <p style="margin: 0;"> 6.ช่วยรักษาโรคเกล็ดเลือดต่ำ </p>
                        <p style="margin: 0;"> 7.ช่วยบำรุงไขมันในร่างกาย</p>
                        <p style="margin: 0;"> 8.ช่วยรักษาเยื่อตาอักเสบ</p>
                        <p style="margin: 0;"> 9.ช่วยแก้อาการไอเรื้อรังและอาการคลื่นไส้</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://www.komchadluek.net</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div id="rar" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/ray.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วแระ</h4>
                        <p style="margin: 0;"> 1.ช่วยลดระดับคอเลสเตรอล ลดระดับน้ำตาลในเลือด ลดความดันโลหิต</p>
                        <p style="margin: 0;"> 2.ช่วยแก้อาการไอ</p>
                        <p style="margin: 0;"> 3.ต้น ราก และใบมีสรรพคุณเป็นยาขับผายลม </p>
                        <p style="margin: 0;"> 4.น้ำคั้นจากใบใช้ใส่แผลในปากหรือหู </p>
                        <p style="margin: 0;"> 5.ต้นและใบมีสรรพคุณเป็นยาขับลมลงเบื้องต่ำ </p>
                        <p style="margin: 0;"> 6.ใบใช้เป็นยาแก้ท้องเสีย </p>
                        <p style="margin: 0;"> 7.เมล็ดมีสรรพคุณเป็นยาบำรุงกำลัง</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://www.thaiarcheep.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div id="tow" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/lan.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วลันเตา</h4>
                        <p style="margin: 0;"> 1.ช่วยลดระดับคอเลสเตอรอลในเลือด</p>
                        <p style="margin: 0;"> 2.ช่วยบำรุงไขมัน </p>
                        <p style="margin: 0;"> 3.ช่วยรักษาโรคหัวใจ </p>
                        <p style="margin: 0;"> 4.ช่วยรักษาโรคความดันโลหิต</p>
                        <p style="margin: 0;"> 5.ช่วยบำรุงกระดูกและฟัน</p>
                        <p style="margin: 0;"> 6.ช่วยขับของเหลวในร่างกาย</p>
                        <p style="margin: 0;"> 7.ช่วยแก้อาการปัสสาวะขัด</p>
                        <p style="margin: 0;"> 8.ช่วยแก้เป็นตะคริว อาการเหน็บชา</p>
                        <p style="margin: 0;"> 9.ช่วยถอนพิษ</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://health.kapook.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div id="pap" class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/toypap.png" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>ถั่วแปบ</h4>
                        <p style="margin: 0;"> 1.ช่วยบำรุงกำลัง แก่อาการอ่อนเพลีย</p>
                        <p style="margin: 0;"> 2.ช่วยบำรุงธาตุในร่างกาย</p>
                        <p style="margin: 0;"> 3.ช่วยแก้โรคตา </p>
                        <p style="margin: 0;"> 4.ช่วยแก้เสมหะในร่างกาย </p>
                        <p style="margin: 0;"> 5.ช่วยแก้อาการแพ้ </p>
                        <p style="margin: 0;"> 6.ช่วยดับร้อน ถอนพิษ ขจัดความชื้น และช่วยถอนพิษสุรา</p>
                        <p style="margin: 0;"> 7.ช่วยระงับอาเจียน</p>
                        <p style="margin: 0;"> 8.ช่วยบำรุงม้ามและกระเพาะอาหาร</p>
                        <p style="font-size: 10px">ที่มาของภาพ:http://www.parichfertilizer.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/almond.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>อัลมอนด์</h4>
                        <p style="margin: 0;"> 1.</p>
                        <p style="margin: 0;"> 2.</p>
                        <p style="margin: 0;"> 3.</p>
                        <p style="margin: 0;"> 4.</p>
                        <p style="margin: 0;"> 5.</p>
                        <p style="margin: 0;"> 6.</p>
                        <p style="margin: 0;"> 7.</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://www.health2click.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <div class="container card shadow border" style="width:100%">
                  <div class="row  align-content-md-center">
                    <div class="col-md-7 p-2 ">
                      <img src="~assets/img/almond.jpg" style="width:100%;">
                    </div>
                    <div class="col-md-5 p-3" style="width:100%">
                      <div class="font-weight-normal">
                        <h4>อัลมอนด์</h4>
                        <p style="margin: 0;"> 1.</p>
                        <p style="margin: 0;"> 2.</p>
                        <p style="margin: 0;"> 3.</p>
                        <p style="margin: 0;"> 4.</p>
                        <p style="margin: 0;"> 5.</p>
                        <p style="margin: 0;"> 6.</p>
                        <p style="margin: 0;"> 7.</p>
                        <p style="font-size: 10px">ที่มาของภาพ:https://www.health2click.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
    </div>
    <Back/>
  </div>
</template>

<script>
  import Navbar from "../components/navbar/index";
  import Back from "../components/back/home";
  import tenyapedData from "../data/tanyaped";

  export default {
    components: {
      Navbar,
      Back,
    },
    name: "tenyaped",
    data() {
      return {
        tags: [],
        list: [],
      }
    },
    mounted() {
      this.getTenyaped();
    },
    methods: {
      getTenyaped() {
        console.log(tenyapedData);
        this.tags = tenyapedData.tags;
        this.list = tenyapedData.list;
      },
      onSearchResult(result) {
        document.location = "#"+ result.tag
      }
    }
  }
</script>

<style scoped>

</style>
