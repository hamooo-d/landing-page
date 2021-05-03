import { DefaultTheme } from './Theme'

type ThemeInterface = typeof DefaultTheme

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
