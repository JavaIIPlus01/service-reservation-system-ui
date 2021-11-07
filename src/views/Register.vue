<template>
  <div>
    <h2>Register</h2>
    <VeeForm v-slot="{ handleSubmit }" :validation-schema="schema" as="div">
      <form @submit="handleSubmit($event, submitRegister)">
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
        <div class="form-group">
          <label for="username">Username</label>
          <Field
            id="username"
            type="text"
            v-model="user.loginName"
            name="loginName"
            class="form-control"
          />
          <ErrorMessage name="loginName" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field
            id="password"
            type="password"
            v-model="user.password"
            name="password"
            class="form-control"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="submitted">
            Register
          </button>
          <span
            v-show="submitted"
            class="spinner-border spinner-border-sm"></span>
          <router-link to="/login" class="btn btn-link">Cancel</router-link>
        </div>
      </form>
    </VeeForm>
    <div
      v-if="message"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapState, mapActions } from "vuex";

export default {
  name: "Register",
  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      loginName: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      schema,
      user: {
        firstName: "",
        lastName: "",
        loginName: "",
        password: "",
        email: "",
        phone: "",
      },
      submitted: false,
      successful: false,
      message: "",
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    // eslint-disable-next-line no-unused-vars
    submitRegister(e) {
      this.submitted = true;
      this.message = "";
      this.successful = false;
      this.register(this.user).then(
        (data) => {
          setTimeout(() => {
            // display success message after route change completes
            if(data) {
              this.message = "Registration successful";
            }
          });
          this.successful = true;
          this.submitted = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style>
.error-feedback {
  color: red;
}
</style>
