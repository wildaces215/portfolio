<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 marginUpper text-center">
          <h1 class="headerText">Craig R. Albertson</h1>
          <br />
        </div>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4"></vs-col>
      </div>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4"></vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <br />
          <br />
          <h1 class="headerSubText">
            <vue-swimlane
              class="swimline"
              rows="1"
              scale="1.5"
              :words="[ 'Web Developer','Software Dev']"
            ></vue-swimlane>
          </h1>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4"></vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
<style>
.home {
  background-color: #3c4245;
  height: 100vh;
}
.marginUpper {
  margin-top: 250px;
}
@media (max-width: 563px) {
  .marginUpper {
    margin-top: 100px;
  }
}
</style>
