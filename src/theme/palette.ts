export const basePalette = {
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  primary: {
    light: "#e2eff9",
    main: "#2185d0",
    dark: "#00599e",
    contrastText: "#ffffff",
  },
  // same as primary by default
  secondary: {
    light: "#e2eff9",
    main: "#2185d0",
    dark: "#00599e",
    contrastText: "#ffffff",
  },
  error: {
    light: "#ffe8e6",
    main: "#db2828",
    dark: "#a10000",
  },
  info: {
    light: "#f8f8f9",
    main: "#e12c1d",
    dark: "#c5c5c6",
  },
  success: {
    light: "#58e788",
    main: "#276f86",
    dark: "#004459",
  },
}

export const lightModePalette = {
  ...basePalette,
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: "#ffffff",
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

export const darkModePalette = {
  ...basePalette,
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    // icon: "rgba(255, 255, 255, 0.5)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: "#121212",
  action: {
    active: "ffffff",
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
}
