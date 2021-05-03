import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '@fontsource/open-sans'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans";
  }

  body {
    background-color: #F7FBFC;
  }
`

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}
