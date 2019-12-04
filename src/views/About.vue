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
      >Here is the link to my Github 
      <a class="aboutTextParaLi" href="https://www.github.com/wildaces215">Github</a>
      </p>
    </div>
    
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: "About Page",
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "This is the About Page of Craig R. Albertson a Web Devloper located in Volusia County, FL."
      }
    ]
  }
};
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
