import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const About: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Header>About page</Header>
      </Container>
    </Layout>
  )
}

const Container = styled.div({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Header = styled.h1(({ theme }) => ({
  color: theme.text.primary,
}))

export default About
