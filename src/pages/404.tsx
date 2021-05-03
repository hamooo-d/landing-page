import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Message>
          🎉 Surprise It's <FourOFour>404</FourOFour> page.
        </Message>
        <GoBack to="/">Go back</GoBack>
      </Container>
    </Layout>
  )
}

const Container = styled.div({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const Message = styled.h1(({ theme }) => ({
  color: theme.text.primary,
  marginBottom: 24,
}))

const FourOFour = styled.h1(({ theme }) => ({
  color: '#E53E3E',
}))

const GoBack = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#fff',
  borderRadius: 5,
  padding: '.5em 1em',
  background: theme.primary.main,
  ':visited': {
    color: '#fff',
  },
}))

export default NotFoundPage
