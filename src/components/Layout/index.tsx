import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer>
        <IconContainer>
          <FaFacebookF color="#696969" />
        </IconContainer>
        <IconContainer>
          <FaInstagram color="#696969" />
        </IconContainer>
        <IconContainer>
          <FaTwitter color="#696969" />
        </IconContainer>
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

const ICON_SIZE = 36

const IconContainer = styled.div({
  display: 'grid',
  placeItems: 'center',
  width: ICON_SIZE,
  height: ICON_SIZE,
  border: '1px solid #696969',
  borderRadius: '50%',
  cursor: 'pointer',
  marginRight: '1rem',
  ':last-child': {
    marginRight: 0,
  },

  '& > *': {
    transition: 'all .5s',
  },
  ':hover': {
    '& > *': {
      transform: 'rotate(360deg)',
    },
  },
})

export default Layout
