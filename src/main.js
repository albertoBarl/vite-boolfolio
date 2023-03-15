import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// router
import { router } from "./router";

// bootsrtrap
import "/node_modules/bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).mount("#app");
