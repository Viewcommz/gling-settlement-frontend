
// ./storybook/preview.js
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import theme from '../src/styles/theme';
import { MemoryRouter } from "react-router";
import GlobalStyle from "../src/styles/GlobalStyle";
import '../src/App.css'; 

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>); // router
// addDecorator(withThemesProvider([theme]), ThemeProvider); // style ThemeProvider

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}