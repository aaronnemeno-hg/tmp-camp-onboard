import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './pages/login/Login';

import Portal from './routers/';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Portal} />
    </Switch>
  </BrowserRouter>
);

export default App;
