import "@emotion/react"
import "@emotion/styled"
import { Theme as CuiTheme } from "./theme/ThemeProvider"

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface,  @typescript-eslint/no-explicit-any
  export interface Theme extends CuiTheme {}
}

declare module "@emotion/styled" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface,  @typescript-eslint/no-explicit-any
  export interface Theme extends CuiTheme {}
}
