<template>
  <div class="home">
    <div id="container">
      <ul>
        <li>
          <font-awesome-icon icon="car" class="fas fa-car fa-3x" />
        </li>
        <li>
          <font-awesome-icon icon="briefcase" class="fas fa-briefcase fa-3x" />
        </li>
        <li>
          <font-awesome-icon icon="bullhorn" class="fas fa-bullhorn fa-3x" />
        </li>
        <li>
          <font-awesome-icon icon="cogs" class="fas fa-cogs fa-3x" />
        </li>
      </ul>
    </div>
    <div id="text-container">
      <HelloWorld msg="Find your best SERVICE!" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.home {
  margin: 100px auto;
  border: 3px solid #2c3e50;
  min-width: 40%;
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 20px;
  height: 50px;
  width: 60px;
  display: inline-block; /* step 1 */
}
#text-container {
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>
