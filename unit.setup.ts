import ProgressBar from 'primevue/progressbar';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import { config } from "@vue/test-utils";
import PrimeVue from 'primevue/config';
import { vi } from 'vitest';

config.global.plugins = [PrimeVue];
config.global.components = {
  ProgressBar,
  InputText,
  Password,
  FloatLabel,
  Button
};

const konsole = {
  log: console.log,
  error: console.error,
  warn: vi.fn(),
};
vi.stubGlobal('console', konsole);