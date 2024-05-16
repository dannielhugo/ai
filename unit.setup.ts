import { vi } from 'vitest';
import { config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify();

const konsole = {
  log: console.log,
  error: console.error,
  warn: vi.fn(),
};
vi.stubGlobal('console', konsole);

config.global.plugins = [vuetify];