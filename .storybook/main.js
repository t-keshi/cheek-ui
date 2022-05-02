module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // ...
    delete config.resolve.alias["emotion-theming"]
    delete config.resolve.alias["@emotion/styled"]
    delete config.resolve.alias["@emotion/core"]
    delete config.resolve.alias["@emotion/react"]
    return config
  },
  features: { emotionAlias: false },
}
