import React from 'react'
import { Home } from './Home'
import { BrowserRouter, Route } from 'react-router-dom'

export const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/user" />
  </BrowserRouter>
)
