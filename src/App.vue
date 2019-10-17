<template>
  <div id="app">
    <vs-navbar v-model="activeItem" class="nabarx navbar">
      <div slot="title">
        <vs-navbar-title class="headerTextFont">Craig R. Albertson</vs-navbar-title>
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
        <router-link @click="modalPop=true" to>Contact</router-link>
      </vs-navbar-item>
      <vs-popup class="holamundo" title="Lorem ipsum dolor sit amet" :active.sync="popupActivo">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </vs-popup>
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
.navbar {
  background-color: #5f6769 !important;
  color: #719192;
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
</style>
