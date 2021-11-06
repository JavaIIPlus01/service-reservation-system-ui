<template>
  <div id="nav">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/services">Services</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/help">Help</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div v-if="homePage()" class="optional">
    <div id="search">
      <input type="text" placeholder="Search.." />
      <img alt="search icon" src="./assets/search.png" />
    </div>
    <div v-if="homePage() && !account.user" class="sign_but">
      <button id="sign_in">
        <router-link to="/login">Sign In</router-link>
      </button>
      <button id="sign_up">
        <router-link to="/register">Sign Up</router-link>
      </button>
    </div>
    <div v-if="homePage() && account.status.loggedIn" class="sign_but">
      <button id="log_out">
        <router-link to="/login">Log Out</router-link>
      </button>
    </div>
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

import { mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    })
  },
  methods: {
    homePage() {
      return (this.$route.path === "/" || this.$route.path === "/home");
    },
  },
};
</script>

<style>
@font-face {
  font-family: roboto-regular;
  src: url("assets/VarelaRound-Regular.ttf");
}

#app {
  font-family: roboto-regular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  position: relative;
}

#nav {
  display: inline-block;
  padding-left: 30px;
  height: 97px;
  width: 470px;
}

nav ul {
  padding-inline: 30px;
  list-style: none;
  text-align: left; /* step 6 */
  border: solid 3px #2c3e50;
}

nav li {
  padding: 20px;
  display: inline-block; /* step 1 */
}

nav a {
  display: block; /* step 2 */
  text-decoration: none; /* step 3 */
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.optional {
  display: inline-block;
  height: 45px;
  width: 700px;
  position: relative;
}

#search {
  margin-left: 30px;
  margin-right: 30px;
  display: inline-block;
  position: relative;
}
input {
  height: 30px;
  width: 200px;
  border: solid 3px #2c3e50;
  margin-right: 10px;
  font-family: roboto-regular, Helvetica, Arial, sans-serif;
}
img {
  position: absolute;
  bottom: 0;
}

.sign_but {
  margin-left: 80px;
  display: inline-block;
  margin-right: 0;
}
button {
  border: solid 3px #2c3e50;
  box-shadow: 5px 5px #888888;
  font-family: roboto-regular, Helvetica, Arial, sans-serif;
  height: 40px;
  width: 100px;
}
</style>
