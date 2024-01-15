import pinia from '@/stores';

import { createApp } from 'vue';

import router from './router';

import ArcoVue from '@arco-design/web-vue';

import 'uno.css';

import '@/assets/styles/index.css';

// 支持SVG
import 'virtual:svg-icons-register';

import App from '@/pages/App.vue';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(ArcoVue);

app.mount('#app');
