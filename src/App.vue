<template>
  <div id="bar">
    <nav
      id="nav"
      class="navbar navbar-expand navbar-light"
      style="background-color: #add8e6">
      <div id="mandatory" class="navbar-nav mr-auto">
        <li class="link nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="link nav-item">
          <router-link to="/services" class="nav-link">Services</router-link>
        </li>
        <li class="link nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        <li class="link nav-item">
          <router-link to="/help" class="nav-link">Help</router-link>
        </li>
      </div>
      <div id="optional">
        <div v-if="homePage()" id="search">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a class="search-icon nav-link" @click.prevent="">
              <font-awesome-icon icon="search" class="fas fa-search fa-2x"
            /></a>
          </form>
        </div>
        <div v-if="homePage() && !account.user" class="sign_but">
          <button type="button" class="but btn btn-secondary">
            <router-link to="/login" class="text">Sign In</router-link>
          </button>
          <button type="button" class="but btn btn-secondary">
            <router-link to="/register" class="text">Sign Up</router-link>
          </button>
        </div>
        <div v-if="homePage() && account.status.loggedIn" class="sign_but">
          <button type="button" class="but btn btn-secondary">
            <a class="text nav-link" @click.prevent="logOut">
              <font-awesome-icon icon="sign-out-alt" class="text"/> LogOut</a>
          </button>
        </div>
      </div>
    </nav>
  </div>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div v-if="false" :class="`alert ${alert.type}`">ALERT!</div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  methods: {
    ...mapActions("account", ["logout"]),
    homePage() {
      return this.$route.path === "/" || this.$route.path === "/home";
    },
    logOut() {
      this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
@font-face {
  font-family: roboto-regular;
  src: url("assets/VarelaRound-Regular.ttf");
}

button {
  margin-right: 10px;
  font-family: roboto-regular, sans-serif;
  box-shadow: 5px 5px #c0c0c0;
}

.but:hover {
  background-color: #566573;
  border-color: transparent;
}

a.nav-link {
  color: #2c3e50;
  font-weight: bold;
  font-family: roboto-regular, sans-serif;
}

.sign_but {
  display: inline-block;
  margin-right: 10px;
}

.text {
  color: wheat;
}

.text:hover {
  color: burlywood;
  text-decoration: none;
}

.search-icon {
  padding: 0 5px;
}

#search {
  display: inline-block;
  margin-right: 2em;
}

#nav a.router-link-exact-active {
  color: #008080;
}

#nav {
  width: 100%;
  display: block;
}

#mandatory,
#optional {
  display: inline-block;
}

#optional {
  margin-top: 1em;
  float: right;
}
</style>
