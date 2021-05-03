import React from 'react'
import styled, { ThemeContext, useTheme } from 'styled-components'
import Navbar from './Navbar'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import SwitchTheme from '../SwitchTheme'

const Layout: React.FC = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <Container>
        <Navbar />
        {children}
        <Footer>
          <IconContainer>
            <FaFacebookF color={theme.text.light} />
          </IconContainer>
          <IconContainer>
            <FaInstagram color={theme.text.light} />
          </IconContainer>
          <IconContainer>
            <FaTwitter color={theme.text.light} />
          </IconContainer>
        </Footer>
      </Container>
      <SwitchTheme />
    </>
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
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  padding: '1rem 4rem',
})

const ICON_SIZE = 36

const IconContainer = styled.div(({ theme }) => ({
  display: 'grid',
  placeItems: 'center',
  width: ICON_SIZE,
  height: ICON_SIZE,
  border: `2px solid ${theme.text.light}`,
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
    border: `2px solid ${theme.mode === 'dark' ? theme.text.primary : theme.primary.main}`,
    '& > *': {
      transform: 'rotate(360deg)',
    },
    '& > :nth-child(1)': {
      color: `${theme.primary.main} !important`,
    },
  },
}))

export default Layout
