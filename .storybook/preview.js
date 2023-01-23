import '../src/styles/reset.css';
import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
