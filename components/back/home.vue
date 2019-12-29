<template>
  <div>
    <a id="myBtn" @click="topFunction">
      <svg class="bi bi-chevron-up" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M9.646 6.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L10 7.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
              clip-rule="evenodd"></path>
      </svg>
    </a>
  </div>
</template>

<script>
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    const mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  export default {
    name: "home",
    methods: {
      topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    }
  }
</script>

<style scoped>

  #myBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #660000;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 40px;
    padding-left: 19px;
    padding-right: 19px;
  }

  #myBtn:hover {
    background-color: #e54500;
  }
  #myBtn:active {
    background-color: #660000;
  }
</style>

