import { useState, useEffect } from 'react'

export const useUsers = () => {
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

  return { loading, error, users }
}
