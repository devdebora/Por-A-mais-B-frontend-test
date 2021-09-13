import React from 'react'
import { render } from '@testing-library/react'
import nock from 'nock'
import { Home } from './Home'

describe('Home page', () => {
  const setup = () => render(<Home />)

  const mockData = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
      },
      {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
      },
      {
        id: 3,
        email: 'emma.wong@reqres.in',
        first_name: 'Emma',
        last_name: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
      },
    ],
  }

  const headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true',
  }

  it('renders title', () => {
    const { container } = setup()
    expect(container).toHaveTextContent('List of users')
  })

  describe('On error API response', () => {
    beforeEach(() => {
      nock('https://reqres.in').get('/api/users').reply(500, {}, headers)
    })

    it('renders error message', async () => {
      const { findByTestId } = setup()
      const message = await findByTestId('error-message')

      expect(message).toHaveTextContent('Houve um erro ao buscar dados')
    })
  })

  describe('On successful API response', () => {
    beforeEach(() => {
      nock('https://reqres.in').get('/api/users').reply(200, mockData, headers)
    })

    it('renders list of users from API response', async () => {
      const { findByTestId } = setup()
      const usersList = await findByTestId('users-list')

      mockData.data.forEach(({ id, first_name, last_name }) => {
        expect(usersList).toHaveTextContent(id)
        expect(usersList).toHaveTextContent(first_name)
        expect(usersList).toHaveTextContent(last_name)
      })
    })
  })
})
