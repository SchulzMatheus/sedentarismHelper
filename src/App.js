import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Form from './pages/Login';
import DetailsAcima from './pages/DetailsAcimaDoPeso';
import DetailsAbaixo from './pages/DetailsAbaixoDoPeso';
import DetailsIdeal from './pages/DetailsPesoIdeal';
import DetailsSobrePeso from './pages/DetailsSobrepeso';
import Userinfo from './pages/userPage';
import NotFound from './Components/Notfound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Form } />
      <Route exact path="/details/Abaixo" component={ DetailsAbaixo } />
      <Route exact path="/details/Acima" component={ DetailsAcima } />
      <Route exact path="/details/Ideal" component={ DetailsIdeal } />
      <Route exact path="/details/Sobrepeso" component={ DetailsSobrePeso } />
      <Route exact path="/details/userinfo" component={ Userinfo } />
      <Route path="/" component={ NotFound } />
    </Switch>
  );
}

export default App;
