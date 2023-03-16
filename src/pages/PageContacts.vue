<template lang="">
  <main>
    <h2 class="text-uppercase text-center p-5">pagina contatti</h2>
    <div class="container">
      <!-- contacts -->
      <div class="row">
        <div class="col-6">
          <div class="text-start p-3">
            <div>
              <p>
                <strong>Address:</strong> Via Blablabla, XX, XXXXX, Narnia, NV
              </p>
              <p><strong>Partita IVA:</strong> 1234567890</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="text-start p-3">
            <div>
              <p><strong>Telephone:</strong> 1234567890</p>
              <p><strong>Email:</strong> info@boolpress.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- write us -->
      <div class="row rounded bg-success text-white m-5">
        <h5 class="text-center p-3">Write us</h5>
        <form @submit.prevent="sendForm">
          <div class="row">
            <div class="col-6 mb-3">
              <label class="control-label" for="nome">Nome</label>
              <input
                type="text"
                class="form-control"
                name="nome"
                id="nome"
                placeholder="Nome"
                v-model="name"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="control-label" for="cognome">Cognome</label>
              <input
                type="text"
                class="form-control"
                name="cognome"
                id="cognome"
                placeholder="Cognome"
                v-model="surname"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="control-label" for="email">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="col-6 mb-3">
              <label class="control-label" for="telefono">Telefono</label>
              <input
                type="phone"
                class="form-control"
                name="telefono"
                id="telefono"
                placeholder="Numero di telefono"
                v-model="phone"
              />
            </div>
            <div class="col-12 mb-3">
              <textarea
                class="form-control"
                name="messaggio"
                id="messaggio"
                placeholder="Lascia un messaggio..."
                v-model="message"
              ></textarea>
            </div>
            <div class="col-12 mb-3 text-center">
              <button type="submit" class="btn btn-light" :disabled="loading">
                {{ loading ? "Sending.." : "Send" }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "PageContacts",
  data() {
    return {
      store,
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      errors: null,
      success: false,
      loading: false,
    };
  },
  methods: {
    sendForm() {
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      this.loading = true;

      axios
        .post(`${this.store.baseUrl}/api/contacts`, data)
        .then((response) => {
          if (!response.data.success) {
            this.errors = response.data.errors;
          } else {
            this.name = "";
            this.surname = "";
            this.email = "";
            this.phone = "";
            this.message = "";
            this.success = true;
            this.loading = false;
          }
        });
    },
  },
};
</script>
<style lang="scss"></style>
