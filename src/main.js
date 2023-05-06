import { createApp } from "vue";
import App from "@/components/app/App.vue";
import "/index.css";
import uiComponents from "./ui-components";

const app = createApp(App);
uiComponents.map((c) => app.component(c.name, c));
app.mount("#app");
