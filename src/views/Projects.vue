<template>
  <div class="projects">
    <h1 class="text-center projectsHeaderText">
      Projects
      <br />
      <br />Web Projects
    </h1>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4 text-center">
          <a href="https://codepen.io/thephoenix215/full/qePaxR">
            <img class="img-fluid" src="../assets/projects/bargraph.png" />
          </a>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <a href="https://codepen.io/thephoenix215/full/mdbYKJw">
            <img class="img-fluid" src="../assets/projects/cal.png" />
          </a>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <a href="https://harborchase.com/">
            <img class="img-fluid" src="../assets/projects/harborchase.jpg" />
          </a>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-xs-12 col-md-4 text-center">
          <a href="https://codepen.io/thephoenix215/full/ebraGy">
            <img class="img-fluid" src="../assets/projects/wiki.png" />
          </a>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <h1 class="text-center"></h1>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <img class="img-fluid" src />
        </div>
      </div>
      <h1 class="text-center projectsHeaderText"></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'projects'
}
</script>
<style>
.projects {
  height: 100vh;
  background-color: #3c4245;
  overflow: visible;
  padding-bottom: 50px;
}
.container {
}
.projectsHeaderText {
  color: #719192 !important;
  padding-top: 50px !important;
  font-family: "Josefin Sans", sans-serif;
}
.img-fluid {
  border-radius: 10px;
}
@media only screen and (max-width: 750px) {
  .projects {
    height: 200vh;
  }
}
</style>
