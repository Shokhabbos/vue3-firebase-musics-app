import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// global styeles
import "@/assets/main.css";

createApp(App).use(router).mount("#app");
