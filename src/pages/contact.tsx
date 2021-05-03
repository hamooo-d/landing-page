import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Features: React.FC = () => {
  return (
    <Layout>
      <Container>
        <h1>Contact page</h1>
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

export default Features
