<template>
  <div class="login">
    <h1>Sign In</h1>
    <VeeForm v-slot="{ handleSubmit }" :validation-schema="schema" as="div">
      <form @submit="handleSubmit($event, handleLogin)">
        <div class="form-group">
          <label for="login">Username</label>
          <Field
            id="login"
            type="login"
            v-model="login"
            name="login"
            class="form-control"
          />
          <ErrorMessage name="login" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="pass">Password</label>
          <Field
            id="pass"
            type="password"
            v-model="password"
            name="password"
            class="form-control"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="false">Login</button>
          <span
            v-show="submitted"
            class="spinner-border spinner-border-sm"
          ></span>
          <router-link to="/register" class="btn btn-link"
            >Register</router-link
          >
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </VeeForm>
  </div>
</template>

<script>
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      login: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      submitted: false,
      login: "",
      password: "",
      message: "",
      schema,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    loggedIn() {
      return this.$store.state.account.status.loggedIn;
    },
  },
  created() {
    // reset login status
    if (this.loggedIn) {
      this.$router.push("/");
    } else {
      this.logout();
    }
  },
  methods: {
    ...mapActions("account", ["loginUser", "logout"]),
    // eslint-disable-next-line no-unused-vars
    handleLogin(values) {
      this.submitted = true;
      const { login, password } = this;
      this.loginUser({ login, password }).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.submitted = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
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
