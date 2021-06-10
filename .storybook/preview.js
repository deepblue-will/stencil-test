import { defineCustomElements } from '../dist/esm/loader';
defineCustomElements();

import '../dist/stencil-test/stencil-test.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}