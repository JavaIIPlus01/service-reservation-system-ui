<template>
  <div class="home">
    <div id="container">
      <ul>
        <li>
          <img src="../assets/graph.png" alt="graph"/>
        </li>
        <li>
          <img src="../assets/sign-at.png" alt="graph"/>
        </li>
        <li>
          <img src="../assets/owl.jpg" alt="graph"/>
        </li>
        <li>
          <img src="../assets/world.jpg" alt="graph"/>
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
  width: 50%;
  border: 3px solid #2c3e50;
  padding: 10px;
  position: relative;
}

#container {
  position: absolute;
  top: 0;
  left: 70px;
}

#container ul {
  list-style: none;
  text-align: left; /* step 6 */
  display: inline-flex;
}

#container li {
  margin: 20px;
  height: 50px;
  width: 50px;
  display: inline-block; /* step 1 */

}
#text-container {
  display: block;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
}
</style>
