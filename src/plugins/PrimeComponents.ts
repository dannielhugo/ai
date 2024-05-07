/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import type { App } from 'vue';
import ProgressBar from 'primevue/progressbar';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';

export function PrimeComponents(app: App) {
  app.component('FloatLabel', FloatLabel);
  app.component('ProgressBar', ProgressBar);
  app.component('InputText', InputText);
  app.component('Password', Password);
  app.component('Button', Button);
}