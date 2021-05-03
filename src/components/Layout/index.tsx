import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
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

const Footer = styled.footer({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '1rem 4rem',
})

export default Layout
