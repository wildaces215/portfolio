<template>
  <div class="home">
    <div class="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  metaInfo: {
    title: "Home Page",
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "This is the home page of Craig R. Albertson a Web Devloper located in Volusia County, FL",
      },
    ],
  },
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
.swimline {
  margin-right: 40px;
}
@media (max-width: 563px) {
  .marginUpper {
    margin-top: 100px;
  }
}
</style>
