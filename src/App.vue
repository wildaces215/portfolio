<template>
  <div id="app">
    <b-navbar class="navbar-custom" toggleable="sm">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand class="headerText">Craig R. Albertson</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-link class="headerSubText" to="/">Home</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link class="headerSubText" to="/about">About</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link class="headerSubText" to="/projects">Projects</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link class="headerSubText" to="/contact">Contact</b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition
      name="routerAnimation"
      enter-active-class="animated fadeIn delay-1s"
      leave-active-class="animated fadeOut fast"
    >
      <router-view />
    </transition>
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
.navbar-custom {
  background-color: #5f6769 !important;
  color: #719192 !important;
}
.btn-responsive-line {
  background-color: white !important;
}
.headerText {
  font-family: "Josefin Sans", sans-serif;

  color: #719192 !important;

}
.headerSubText {
  font-family: "Josefin Sans", sans-serif;

  text-align: center;
  color: #719192 !important;
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.vs-con-items {
  font-size: 2em !important;
}
</style>
