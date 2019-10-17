<template>
  <div id="app">
    <vs-navbar v-model="activeItem" class="nabarx navbar">
      <div slot="title">
        <vs-navbar-title id="paddingTopHeader" class="headerTextFont">Craig R. Albertson</vs-navbar-title>
      </div>

      <vs-navbar-item class="headerTextFont" index="0">
        <router-link to="/">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="headerTextFont" index="1">
        <router-link to="/about">About</router-link>
      </vs-navbar-item>

      <vs-navbar-item class="headerTextFont" index="1">
        <router-link to="/projects">Projects</router-link>
      </vs-navbar-item>

      <vs-navbar-item class="headerTextFont" index="1">
        <router-link to="/contact">Contact</router-link>
      </vs-navbar-item>
    </vs-navbar>

    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      modalPop: false
    }
  }
}
</script>

<style>
/*https://colorhunt.co/palette/159233*/
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:300&display=swap");
.navbar {
  background-color: #5f6769 !important;
  color: #719192;
}
.btn-responsive-line {
  background-color: white !important;
}
.headerText {
  font-family: "Josefin Sans", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  color: #719192;
  font-size: 68px;
}
.headerSubText {
  font-family: "Josefin Sans", sans-serif;
  position: absolute;
  top: 60%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  color: #719192;
  height: 10px;
}
.swimline {
  margin-top: 10px !important;
  height: 25px !important;
}
.headerTextFont {
  font-family: "Josefin Sans", sans-serif;
  color: #719192 !important;
}
.navbarDropdown {
  color: #719192 !important;
  text-align: right !important;
}
#paddingTopHeader {
  margin-top: 5px;
}
</style>
