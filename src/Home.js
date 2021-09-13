import React from 'react'
import { useUsers } from './data/users'

export const Home = () => {
  const { loading, error, users } = useUsers()

  return (
    <section>
      <header>
        <h2>List of users</h2>
      </header>

      <section>
        {loading && 'Loading content...'}

        {error && (
          <div data-testid="error-message">Houve um erro ao buscar dados</div>
        )}

        {users && (
          <ul data-testid="users-list">
            {users.data.map(({ id, first_name, last_name }) => (
              <li key={id}>
                {id} - {first_name} {last_name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  )
}
