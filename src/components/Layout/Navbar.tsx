import { Link } from 'gatsby'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Navigators>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Features</StyledLink>
        <StyledLink to="/">About</StyledLink>
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
})

const Logo = styled.div({
  flex: 1,
  textTransform: 'uppercase',
  fontSize: '30px',
  fontFamily: 'Montserrat',
})

const Navigators = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
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
  background: '#A9A8F6',
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
