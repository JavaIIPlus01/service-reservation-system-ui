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
  <router-view />
</template>

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
}

nav ul {
  padding-inline: 30px;
  list-style: none;
  margin: 30px;
  text-align: left; /* step 6 */
  border: solid 5px #2c3e50;
  display: inline-block;
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
</style>
