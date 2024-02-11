import { createApp } from "vue";
import { router, store } from "./providers";
import App from "./index.vue";
import Antd from 'ant-design-vue';
import 'primeicons/primeicons.css'
import { createYmaps } from 'vue-yandex-maps';
import 'ant-design-vue/dist/reset.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

const initializeApp = createApp(App).use(router).use(store).use(Antd).use(PrimeVue).use((createYmaps({
  apikey: 'd78edd1d-6556-4eac-b934-e746a6045b98',
  mapsScriptWaitDuration: false,
  mapsRenderWaitDuration: false
})));

export const app = initializeApp;
