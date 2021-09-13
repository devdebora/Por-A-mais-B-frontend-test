import React from 'react'
import { useUsers } from './data/users'
import { Section, Box, Hero, Heading } from 'react-bulma-components'

export const Home = () => {
  const { loading, error, users } = useUsers()

  return (
    <Section renderAs="section">
      <Hero>
        <Heading renderAs="h2">List of users</Heading>
      </Hero>

      <Section>
        {loading && 'Loading content...'}

        {error && (
          <div data-testid="error-message">Houve um erro ao buscar dados</div>
        )}

        {users?.data.map(({ id, first_name, last_name }) => (
          <Box key={id} renderAs="article">
            {id} - {first_name} {last_name}
          </Box>
        ))}
      </Section>
    </Section>
  )
}
