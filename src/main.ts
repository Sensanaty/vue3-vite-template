import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/lib/router";
import "@/style/normalize.css";
import "@/style/global.scss";

const app = createApp(App).use(createPinia()).use(router);

app.mount("#app");
