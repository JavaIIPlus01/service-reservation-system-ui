import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import { FontAwesomeIcon } from "./plugins/font-awesome";

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
