import { DefaultTheme } from './theme'

type ThemeInterface = typeof DefaultTheme

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
