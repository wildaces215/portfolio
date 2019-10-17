<template>
  <div class="contact">
    <form class="container formContainer">
      <h1 class="text-center formHeaderText">Contact Me!</h1>
      <div class="form-group">
        <label class="formHeaderText" for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control inputBackground"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label class="formHeaderText" for="exampleInputPassword1">Email</label>
        <input
          type="Email"
          name="_replyto"
          class="form-control inputBackground"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label class="formHeaderText">Message</label>
        <textarea
          name="message"
          class="form-control inputBackground"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn inputBackground">Submit!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style>
.contact {
  background-color: #3c4245;
  height: 100vh;
}
.formContainer {
  padding-top: 100px;
}
.formHeaderText {
  font-family: "Josefin Sans", sans-serif;
  color: #719192 !important;
}
.inputBackground {
  background-color: #5f6769 !important;
  border: none;
  color: #dfcdc3 !important;
  font-family: "Lato", sans-serif !important;
}
</style>
