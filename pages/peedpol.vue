<template>
  <div class="background" style="background-color:#f5f5f5">
    <Navbar :onSearchResult="onSearchResult"/>

    <div class="container">
      <div class="row">
        <div class="col-md-12 align-content-center">
          <div style="text-align: center; width:100%;">
            <img src="~assets/img/ads-pak.png" style="width:80%;">
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
    </div>
    <Back/>
  </div>
</template>

<script>
  import Navbar from "../components/navbar/index";
  import Back from "../components/back/home";
  import peedpolData from "../data/peedpol";

  export default {
    components: {
      Navbar, Back,
    },
    name: "peedpol",
    data() {
      return {
        tags: [],
        list: [],
      }
    },
    mounted() {
      this.getPeedpol();
    },
    methods: {
      getPeedpol() {
        this.tags = peedpolData.tags;
        this.list = peedpolData.list;
      },
      onSearchResult(result) {
        document.location = "#"+ result.tag
      }
    }
  }
</script>


<style scoped>
  #overflowTest {
    background-image: linear-gradient(to bottom, #e54500, #FF6600);
    color: white;
    padding:30px;
    width: 100%;
    height: 100px;
    overflow: scroll;
    border: 1px solid #ccc;
  }
  #container {align-content: center}

</style>
