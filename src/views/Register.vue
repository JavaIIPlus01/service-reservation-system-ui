<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          required
          v-model="user.firstName"
          name="firstName"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          required
          v-model="user.lastName"
          name="lastName"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          id="phone"
          type="text"
          required
          v-model="user.phone"
          name="phone"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          required
          v-model="user.email"
          name="email"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          required
          v-model="user.loginName"
          name="loginName"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="user.password"
          required
          min="6"
          name="password"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="false">Register</button>
        <img
          v-show="false"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
          alt="register"
        />
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'


export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        loginName: "",
        password: "",
        email: "",
        phone: "",
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;
      this.register(this.user);
    }
  }
};
</script>
