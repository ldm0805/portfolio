<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errors: {},
    };
  },
  methods: {
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "La mail è richiesta";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Devi inserire una mail valida";
      }
      // All is good
      return true;
    },
    validateRequest(value) {
      // if the field is empty
      if (!value) {
        return "Il campo è richiesto";
      }
      return true;
    },
    sendMail() {
      let params = {
        // name: document.getElementById("name").value,
        // email: document.getElementById("email").value,
        // message: document.getElementById("message").value,
        name: this.name,
        email: this.email,
        message: this.message,
      };
      if(this.name && this.email != ''){

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
}

</script>
<template lang="">
  <div class="cont d-flex justify-content-center flex-column align-items-center">
    

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

      <div class="col-md-6 border-left py-3">
          <h1>Contact form</h1>
          <Form id="my-form">
          <div class="form-group">
            <h5 for="name">Name</h5>
            <Field
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Enter name"
              v-model="name"
              :rules="validateRequest"
            />
            <ErrorMessage class="text-danger" name="name" />

          </div>
          <div class="form-group">
            <h5 for="email">Email</h5>
            <Field
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Enter email"
              v-model="email"
              :rules="validateEmail"
            />
            <ErrorMessage class="text-danger" name="email" />
          </div>
          <div class="form-group">
            <h5 for="message">Message</h5>
            <textarea 
            class="form-control" 
            id="message" 
            rows="3"  
            v-model="message"
            :rules="validateRequest"
            ></textarea>
            <ErrorMessage class="text-danger" name="message" />
          </div>
          <button class="btn btn-primary" @click="sendMail()">Submit</button>
          </Form>
      </div>
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

    