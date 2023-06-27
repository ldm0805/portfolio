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
      if (!value) {
        return "La mail è richiesta";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Devi inserire una mail valida";
      }
      return true;
    },
    validateRequest(value) {
      // if the field is empty
      if (!value) {
        return "Il campo è richiesto";
      }
      return true;
    },
    validateLength5(value) {
      if (value.length < 5) {
        return "Il campo deve contenere minimo 5 caratteri";
      }
      return true;
    },
    sendMail() {
      let params = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      if (this.name && this.email && this.message != "") {
        const serviceID = "service_87wg2n8";
        const templateID = "template_1fzse0z";

        emailjs
          .send(serviceID, templateID, params)
          .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!");
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
<template lang="">
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Contattami!</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-md-6 border-left py-3">
            <Form id="my-form" method="POST">
              <div class="form-group">
                <h5 for="name">Nome</h5>
                <Field
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Inserisci il tuo nome"
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
                  placeholder="Inserisci l'email"
                  pattern=".+@globex\.com"
                  v-model="email"
                  :rules="validateEmail"
                />
                <ErrorMessage class="text-danger" name="email" />
              </div>
              <div class="form-group">
                <h5 for="message">Messaggio</h5>
                <Field
                  as="textarea"
                  class="form-control"
                  name="message"
                  id="message"
                  rows="3"
                  v-model="message"
                  :rules="[validateRequest, validateLength5]"
                  placeholder="Messaggio"
                />
                <ErrorMessage class="text-danger" name="message" />
              </div>
            </Form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="portfolio-link"
            @click="sendMail()"
            data-dismiss="modal"
          >
            Invia dati
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.portfolio-link{
    display: inline-block;
    margin-top: 1em;
    padding: .5em 1em;
    text-decoration: none;
    border: 2px solid black;
    color: $font_color;
    background-color: transparent;
    &:hover{
        scale: 1.1;
        box-shadow: black 3px 3px;   
    }
}
</style>
