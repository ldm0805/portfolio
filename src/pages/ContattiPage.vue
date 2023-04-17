<script>
export default {
  methods: {
    sendMail() {
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      const serviceID = "service_87wg2n8";
      const templateID = "template_1fzse0z";

      emailjs.send(serviceID, templateID, params)
        .then(res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));
    }
  }
}
</script>
<template lang="">
    <div class="cont d-flex justify-content-center">

        <div class="d-flex flex-column gap-3">
            <div>
                Contatti 
            </div>
            <a href="https://github.com/ldm0805"> 
                <i class="fa-brands fa-square-github fa-xl"></i> GitHub
            </a>
            <a href="mailto:leonardodimaggio94@gmail.com">
                <i class="fa-solid fa-envelope fa-xl"></i> Email
            </a>
            <a href="https://www.linkedin.com/in/leonardo-di-maggio-4ba403268/">
                <i class="fa-brands fa-linkedin fa-xl"></i> Linkedin
            </a>
            <a href="../../public/curriculum/Leonardo-Di-Maggio-cv.pdf" download>
                <i class="fa-solid fa-user fa-xl"></i> Curriculum
            </a>
            <a href="#">
                <i class="fa-solid fa-mobile fa-xl"></i> Num Telefono
            </a>
        </div>
    </div>
    
            <div class="col-md-6 border-left py-3">
              <h1>Contact form</h1>
              <div class="form-group">
                <h5 for="name">Name</h5>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div class="form-group">
                <h5 for="email">Email</h5>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <h5 for="message">Message</h5>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <button class="btn btn-primary" @click="sendMail()">Submit</button>
            </div>

</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
div{
    color: $font_color;
    a{
        text-decoration: none;
        color: $font_color;
        transition: 300ms;
        &:hover{
            color: rgb(0, 0, 87);
        }
    }
}
    
</style>