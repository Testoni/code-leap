import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

const App = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path='/login' component={Login} />
        <RoutesPrivate path='/' component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default App;
