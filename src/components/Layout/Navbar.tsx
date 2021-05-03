import { Link } from 'gatsby'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'
import { device } from '../../constants'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <StyledMenuIcon />
        <LogoText style={{ marginLeft: 16 }}>Logo</LogoText>
      </Logo>
      <Navigators>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Features</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/">Contact</StyledLink>
      </Navigators>
      <Entry>
        <SignupButton>SIGN UP</SignupButton>
        <LoginButton>LOG IN</LoginButton>
      </Entry>
    </Container>
  )
}

const Container = styled.nav({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  padding: '1rem 4rem',
  [device.tablet]: {
    padding: '1rem 1rem',
  },
})

const Logo = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  fontSize: '30px',
  fontFamily: 'Montserrat',
})

const LogoText = styled.span({
  marignLeft: 16,
  [device.tablet]: {
    display: 'none',
  },
})

const StyledMenuIcon = styled(AiOutlineMenu)({
  display: 'none',
  [device.laptop]: {
    display: 'block',
  },
})

const Navigators = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [device.laptop]: {
    display: 'none',
  },
})

const StyledLink = styled(Link)({
  color: '#575757',
  textDecoration: 'none',
  fontSize: '16px',
  marginRight: '1.5em',
  ':hover': {
    color: '#000000',
  },
  ':last-child': {
    marginRight: 0,
  },
})

const Entry = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  [device.laptop]: {
    flex: 'inherit',
  },
})

const scale = keyframes`
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1.1);
  }
`

const Button = styled.button`
  & {
    border-radius: 9999px;
    font-size: 16px;
    padding: 0.5em 1em;
    margin-right: 1em;
    font-weight: 500;
    cursor: pointer;
  }

  &:active {
    animation: ${scale} 0.3s linear;
  }
`
const SignupButton = styled(Button)({
  background: '#7962ad',
  color: '#fff',
  border: 0,
  transition: 'background .3s ease-in',
  '&:hover': {
    background: '#bab8ff',
  },
})

const LoginButton = styled(Button)({
  background: '#fff',
  color: '#2F2F2F',
  border: '1px solid #4b4b4b',
  transition: 'all .1s ease-in',
  '&:hover': {
    color: '#797979',
    border: '1px solid #797979',
  },
})

export default Navbar
