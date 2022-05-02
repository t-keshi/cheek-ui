export const typography = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Helvetica Neue"',
    '"Segoe UI"',
    '"Hiragino Kaku Gothic ProN"',
    '"Hiragino Sans"',
    '"Segoe UI"',
    "Meiryo",
    "sans-serif",
  ].join(","),
  h1: {
    fontSize: "3rem",
    lineHeight: 1.333,
    fontWeight: 500,
    letterSpacing: "-0.02083em",
  },
  h2: {
    fontSize: "2.125rem",
    lineHeight: 1.353,
    fontWeight: 500,
    letterSpacing: "0em",
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: 1.333,
    fontWeight: 500,
    letterSpacing: "0.02083em",
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: 1.4,
    fontWeight: 700,
    letterSpacing: "0.0375em",
  },
  h5: {
    fontSize: "1.125rem",
    lineHeight: 1.444,
    fontWeight: 700,
    letterSpacing: "0.02778em",
  },
  h6: {
    fontSize: "1rem",
    lineHeight: 1.75,
    fontWeight: 700,
    letterSpacing: "0.04063em",
  },
  subtitle1: {
    fontSize: "1rem",
    lineHeight: 1.75,
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.571,
    fontWeight: 500,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.429,
    fontWeight: 400,
  },
  button: {
    fontSize: "1rem",
    lineHeight: 1.625,
    fontWeight: 700,
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.667,
    fontWeight: 400,
  },
  overline: {
    fontSize: "0.625rem",
    lineHeight: 3,
    fontWeight: 400,
  },
} as const
