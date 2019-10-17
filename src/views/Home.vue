<template>
  <div class="home">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <h1 class="headerText">Craig R. Albertson</h1>
        <br />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4"></vs-col>
    </vs-row>
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
            :words="[ 'Web Developer','Software Developer']"
          ></vue-swimlane>
        </h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4"></vs-col>
    </vs-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {}
}
</script>
<style>
.home {
  background-color: #3c4245;
  height: 100vh;
}
</style>
