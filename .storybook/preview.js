import { StThemeProvider } from "../src/theme/ThemeProvider"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <StThemeProvider theme={{ colors: { primary: "pink" } }}>
      <Story />
    </StThemeProvider>
  ),
]
