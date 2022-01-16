<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
  <div class="buttons">
    <button type="button" class="but btn btn-secondary">
      <router-link to="/now" class="text">Try NOW</router-link>
    </button>
    <button type="button" class="but btn btn-secondary">
      <router-link to="/more" class="text">See MORE</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
}
h1 {
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
}

p {
  text-align: justify;
  margin: 20px 50px;
}
a {
  color: #2c3e50;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin: 30px;
  width: 120px;
  box-shadow: 5px 5px #c0c0c0;
}

.text {
  color: wheat;
}

.text:hover {
  color: burlywood;
  text-decoration: none;
}
</style>
