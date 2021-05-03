import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { device } from '../constants'
import Hero from '../images/hero.png'

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet title="Landing Page" defer={false} />
      <Layout>
        <Container>
          <Content>
            <Title>CREATE YOUR FUTURE WITH US.</Title>
            <Header>The Best Workspace</Header>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque aliquam
              repellendus corporis ut, earum asperiores harum corrupti saepe error.
            </Paragraph>
            <ContactUsButton>Contact Us</ContactUsButton>
          </Content>
          <HeroWrapper>
            <img style={{ width: '100%', height: 'auto' }} src={Hero} alt="hero-img" />
          </HeroWrapper>
        </Container>
      </Layout>
    </>
  )
}

const Container = styled.div({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem 5rem',
  [device.laptop]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const Content = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  order: 1,
  [device.laptop]: {
    order: 1,
    marginTop: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Title = styled.h4({
  color: '#7962ad',
  textTransform: 'uppercase',
  fontSize: '16px',
  marginBottom: '1rem',
})

const Header = styled.h1({
  marginBottom: '1rem',
  fontSize: '4rem',
  width: '80%',
  textTransform: 'uppercase',
  '::selection': {
    background: 'none',
    color: '#7962ad',
  },
  [device.laptop]: {
    width: 'auto',
    textAlign: 'center',
  },
})

const Paragraph = styled.p({
  color: '#646464',
  width: '50%',
  marginBottom: '1rem',
  [device.laptop]: {
    width: 'auto',
    textAlign: 'center',
  },
})

const Button = styled.button`
  & {
    width: 10em;
    border-radius: 9999px;
    font-size: 16px;
    padding: 0.5em 1em;
    margin-right: 1em;
    font-weight: 500;
    cursor: pointer;
  }
`

const ContactUsButton = styled(Button)({
  background: '#7962ad',
  color: '#fff',
  border: 0,
  transition: 'background .3s ease-in',
  '&:hover': {
    background: '#bab8ff',
  },
})

const HeroWrapper = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  order: 2,
  [device.laptop]: {
    order: 2,
    marginTop: '2rem',
  },
})

export default IndexPage
