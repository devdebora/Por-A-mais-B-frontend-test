import React from 'react'
import { useUsers } from './data/users'
import { Section, Box, Hero, Heading, Switch } from 'react-bulma-components'
import './Avatar.css'
import { Link } from 'react-router-dom'

export const Home = (props) => {
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
        {users && (
          <div data-testid="users-list">
            {users?.data.map(({ avatar, id, first_name, last_name, email }) => (
              <Box key={id} renderAs="article">
                <Link to="/user" className="boxes">
                  <div className="name">
                    {id} - {first_name} {last_name}
                  </div>
                  <img className="avatar" alt="avatar" src={avatar} />
                </Link>
              </Box>
            ))}
          </div>
        )}
      </Section>
    </Section>
  )
}
