import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { store } from "./store";

const app = createApp(App).use(store).use(router).mount("#app");
app.config.globalProperties = { $apiUrl: "http://localhost:8080" }


