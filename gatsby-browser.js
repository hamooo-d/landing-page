import React from 'react'
import { DarkTheme, DefaultTheme } from './src/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeContextProvider, useThemeContext } from './src/context/ThemeContext'
import '@fontsource/open-sans'
import { Helmet } from 'react-helmet'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans";
  }

  body {
    transition: background-color .3s;
    background-color: ${({ theme }) => theme.background};
  }
`

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <Helmet title="Landing Site" htmlAttributes={{ lang: 'en' }} />
      <SCThemeProvider>
        <GlobalStyles />
        {element}
      </SCThemeProvider>
    </ThemeContextProvider>
  )
}

const SCThemeProvider = ({ children }) => {
  const { currentTheme } = useThemeContext()
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  )
}
