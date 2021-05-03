import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100%',
  minHeight: '100vh',
})

const Main = styled.main({
  flexGrow: 1,
  width: '100%',
  background: 'blue',
})

const Footer = styled.footer({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '1rem 2rem',
  backgroundColor: 'green',
})

export default Layout
