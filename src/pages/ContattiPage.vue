<script>
import Modal from "../modal/modal.vue";
export default {
  components: {
    Modal,
  },
};

// import { Form, Field, ErrorMessage } from "vee-validate";

// export default {
//   components: {
//     Form,
//     Field,
//     ErrorMessage,
//   },
//   data() {
//     return {
//       name: "",
//       email: "",
//       message: "",
//       errors: {},
//     };
//   },
//   methods: {
//     validateEmail(value) {
//       if (!value) {
//         return "La mail è richiesta";
//       }
//       const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//       if (!regex.test(value)) {
//         return "Devi inserire una mail valida";
//       }
//       return true;
//     },
//     validateRequest(value) {
//       // if the field is empty
//       if (!value) {
//         return "Il campo è richiesto";
//       }
//       return true;
//     },
//     validateLength5(value) {
//       if (value.length < 5) {
//         return "Il campo deve contenere minimo 5 caratteri";
//       }
//       return true;
//     },
//     sendMail() {
//       let params = {
//         name: this.name,
//         email: this.email,
//         message: this.message,
//       };
//       if (this.name && this.email && this.message != "") {
//         const serviceID = "service_87wg2n8";
//         const templateID = "template_1fzse0z";

//         emailjs
//           .send(serviceID, templateID, params)
//           .then((res) => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Your message sent successfully!!");
//           })
//           .catch((err) => console.log(err));
//       }
//     },
//   },
// };
</script>
<template lang="">
  <div
    class="cont d-flex justify-content-center flex-column align-items-center"
  >
    <div class="d-flex flex-column gap-3">
      <div>Contatti</div>
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
      <a href="tel:+393384577144">
        <i class="fa-solid fa-mobile fa-xl"></i> Num Telefono
        <!-- +393384577144 -->
      </a>
    </div>

    <button
      type="button"
      class="portfolio-link"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Mandami un messaggio
    </button>
    <Modal />
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
div {
  color: $font_color;
  a {
    text-decoration: none;
    color: $font_color;
    transition: 300ms;
    &:hover {
      color: rgb(0, 0, 87);
    }
  }
}
button {
  all: unset;
}
.portfolio-link {
  display: inline-block;
  margin-top: 1em;
  padding: 0.5em 1em;
  text-decoration: none;
  border: 2px solid black;
  color: $font_color;
  &:hover {
    scale: 1.1;
    box-shadow: black 3px 3px;
  }
}

.modal {
  --bs-modal-bg: #393646 !important;
}
div.modal-contet {
  background-color: #393646 !important;
}
</style>
