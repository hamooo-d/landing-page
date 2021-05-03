import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '@fontsource/roboto'
import '@fontsource/open-sans'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans"
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
