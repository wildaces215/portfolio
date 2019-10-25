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
    <row class="row text-center">
      <div class="container">
        <h1 class="aboutText text-center">About Me</h1>
      </div>
    </row>

    <div class="container aboutTextPara">
      <p
        class="text-center aboutTextPara"
      >Hello my name is Craig R. Albertson! I am a Software and Web Developer located in New Smyrna Beach, FL!</p>
      <p
        class="text-center aboutTextPara"
      >I am currently seeking any and all web development positions. I have experience in the following languages and frameworks:</p>
      <p class="text-center aboutTextPara">Node.js, C++, Jquery, Vue.js,React.js,Mongodb, and SQL.</p>
      <p
        class="text-center aboutTextPara"
      >In my spare time I run Daytona Devs, a tech group that meets in Daytona Beach Fl.</p>
      <p
        class="text-center aboutTextPara"
      >Here are various link to my Linkedin, Github, and Facebook</p>
    </div>
    <ul class="list-group text-center aboutTextPara">
      <li>
        <a class="aboutTextParaLi" href="linkedin.com/in/craig-albertson-3a83b218a">Linkedin</a>
      </li>
      <li>
        <a class="aboutTextParaLi" href="https://www.github.com/wildaces215">Github</a>
      </li>
      <li>
        <a class="aboutTextParaLi" href="https://www.facebook.com/craig.albertson.35">Facebook</a>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style>
.about {
  background-color: #3c4245;
  height: 105vh;
  overflow-x: hidden;
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
  font-family: "Lato", sans-serif !important;
  font-size: 1em;
}
.aboutTextParaLi {
  color: #dfcdc3;
  font-family: "Lato", sans-serif !important;
  font-size: 1em;
}
.aboutTextParaLi:hover {
  color: #719192 !important;
}
</style>
