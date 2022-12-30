import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '../src/assets/css/fontawesome-all.min.css'
import 'animate.css/animate.min.css'
import '../src/assets/scss/style.scss'
import 'swiper/css';
import 'swiper/css/effect-fade';

createApp(App).use(router).mount("#app");
