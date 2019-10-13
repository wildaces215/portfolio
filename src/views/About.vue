<template>
  <div class="about">
    <br />
    <vs-row vs-align="center">
      <vs-col vs-typetype="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs->
          <img class="img" src="./../assets/headerImage.jpg" />
        </vs->
      </vs-col>
    </vs-row>
    <br />
    <br />
    <vs-row vs-align="center">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h1 class="aboutText">About Me</h1>
      </vs-col>
    </vs-row>
    <vs-row vs-align="center">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <p class="aboutTextPara">Test</p>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
</script>
<style>
.about {
  background-color: #3c4245;
  height: 100vh;
}
.aboutText {
  font-family: "Josefin Sans", sans-serif;
  margin-top: 10px !important;
  font-family: "Josefin Sans", sans-serif;
  color: #719192 !important;
  font-size: 48px;
}
.img {
  display: block;
  margin-left: auto;
  margin-right: auto;

  border-radius: 50%;
}
.aboutTextPara {
  color: #dfcdc3;
}
</style>
