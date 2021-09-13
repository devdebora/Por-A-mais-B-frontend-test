import React, { useState, useEffect } from 'react'

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [users, setUsers] = useState(undefined)

  useEffect(() => {
    setLoading(true)
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

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
