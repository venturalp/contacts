import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {routes.map(route => (
          <Route {...route} key={route.path} />
        ))}
      </BrowserRouter>
    )
  }
}
