import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-dark-indigo/theme.css';
import { PrimeComponents } from '@/plugins/PrimeComponents';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });
PrimeComponents(app);
app.mount('#app');
