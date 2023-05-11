import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
// Max provided an existing project which we will modify with routing, i wont delete any of the original code just comment it out

const app = createApp(App);
app.use(router); // IMPORTANT using the router
app.mount("#app");
