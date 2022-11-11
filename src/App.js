import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Form from './pages/login';
import Details from './pages/Details';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Form } />
      <Route exact path="/details" component={ Details } />
    </Switch>
  );
}

export default App;
