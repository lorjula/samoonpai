<template>
  <div>
    <nav class="background1 navbar fixed-top ">
      <a class="navbar-brand" href="/">
        <img src="~assets/img/logo.png" width="50" height="50" alt="">
      </a>
      <div class="navbar navbar-expand-lg navbar-dark " style="margin-right: auto;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" collapse navbar-collapse" id="navbarColor01">
          <div class="form-inline">
            <input v-model="query" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button @click="search" class=" btn my-2 my-sm-0 " style="background-color:#660000; color: #ffffff;">Search
            </button>
          </div>
        </div>
      </div>
      <ul class="nav justify-content-end ">
        <li class="btn-group ">
          <nuxt-link class="nav-link dropdown" style="color: #ffffff;" to="/samoonpai">สมุนไพร</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link active" to="/samoonpai/tanyaped" style="color: #ffffff;">ธัญพืช</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/samoonpai/peedpol" style="color: #ffffff;">พืชผัก</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/samoonpai/polmi" style="color: #ffffff;">ผลไม้</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

  import dataStore from "../../data/datastore";

  // JS
  function search() {
    const query = document.getElementById("query");
    console.log("query", query);
  }

  // Vue.js
  export default {
    name: "index",
    props: {
      onSearchResult: {
        type: Function,
        default: (result) => {
        }
      }
    },
    data() {
      return {
        query: ""
      }
    },
    methods: {
      search() {
        console.log("query", this.query);

        if (this.query === "") {
          window.alert("กรุณากรอกข้อมูลเพื่อค้นหา");
        } else {
          for (let data of dataStore) {
            if (this.query === data.name) {
              console.log("Found " + this.query);
              this.onSearchResult(data);
              break;
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
