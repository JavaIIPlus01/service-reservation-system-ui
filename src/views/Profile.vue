<template>
  <div class="frame">
    <div class="profile">
      <div class="info left">
        <div class="picture">
          <font-awesome-icon icon="file-alt" class="fas fa-car fa-2x" />
          <p><b>User Profile</b></p>
        </div>
        <h1>{{ currentUser.firstName }} {{ currentUser.lastName }}</h1>
        <h2><a>Change Password</a></h2>
        <div class="form-group">
          <button
            type="button"
            class="but btn button btn-primary"
            :disabled="false"
            @click="submitUpdate($event)"
          >
            <font-awesome-icon icon="check-square" /> Update
          </button>
        </div>
      </div>
      <VeeForm v-slot="{ handleUpdate }" :validation-schema="schema" as="div">
        <form @submit="handleUpdate($event, submitUpdate)">
          <div class="info right">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <Field
                id="firstName"
                type="text"
                v-model="user.firstName"
                name="firstName"
                class="form-control"
              />
              <ErrorMessage name="firstName" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <Field
                id="lastName"
                type="text"
                v-model="user.lastName"
                name="lastName"
                class="form-control"
              />
              <ErrorMessage name="lastName" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <Field
                id="phone"
                type="text"
                v-model="user.phone"
                name="phone"
                class="form-control"
              />
              <ErrorMessage name="phone" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <Field
                id="email"
                type="text"
                v-model="user.email"
                name="email"
                class="form-control"
              />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
          </div>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import { mapState, mapActions } from "vuex";
import * as yup from "yup";
import { account } from "@/store/account.module";

export default {
  name: "Profile",
  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      firstName: yup
        .string()
        .required("Firstname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
    });
    return {
      schema,
      user: {
        firstName: account.state.user.firstName,
        lastName: account.state.user.lastName,
        email: account.state.user.email,
        phone: account.state.user.phone,
      },
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    currentUser() {
      return this.$store.state.account.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
  methods: {
    ...mapActions("account", ["update"]),
    // eslint-disable-next-line no-unused-vars
    submitUpdate(e) {
      this.update();
    },
  },
};
</script>

<style>
.profile {
  width: 100%;
  margin: 1em 0;
  font-family: roboto-regular, sans-serif;
}

.profile:after {
  content: "";
  display: table;
  clear: both;
}

.frame h1 {
  font-weight: bold;
  font-size: large;
  text-decoration: underline;
  padding-bottom: 1em;
}

.frame h2 {
  font-size: medium;
  text-decoration: underline;
  color: royalblue;
}

.left a {
  color: #2c3e50;
}

.button {
  margin: 30px;
  width: 120px;
  box-shadow: 5px 5px #1a4314;
  background-color: #94c973;
  outline-color: black;
}

.left {
  margin: auto;
  text-align: center;
}

.error-feedback {
  color: red;
}

.right {
  padding-top: 1em;
  font-size: small;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.form-group {
  width: 70%;
  height: 5em;
}

.form-control {
  block-size: 2em;
  padding: 0.2em;
}

.picture {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5em;
  display: block;
}

.picture p {
  display: inline-block;
  margin: 0 0;
  padding-left: 0.5em;
}

.info {
  float: left;
  width: 50%;
}

button {
  margin: 30px;
  width: 120px;
  box-shadow: 5px 5px #c0c0c0;
}

#left-container {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.frame {
  margin: 1em auto;
  border: 3px solid #2c3e50;
  min-width: 40%;
  flex: none;
}

.form-group {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>
