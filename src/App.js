import React from 'react'
import { Routes } from './Routes'
import 'bulma/css/bulma.min.css'
import {
  Hero,
  Section,
  Container,
  Heading,
  Footer,
} from 'react-bulma-components'
import './Avatar.css'

function App() {
  return (
    <div>
      <Hero size="large" color="primary" gradient>
        <Section className="head">
          <Heading>Por A Mais B - Teste Front-end</Heading>
        </Section>
      </Hero>

      <main>
        <Routes />
      </main>

      <Footer>
        <Container>
          <a href="https://poramaisb.com" tg>
            Por A Mais B
          </a>
        </Container>
      </Footer>
    </div>
  )
}

export default App
