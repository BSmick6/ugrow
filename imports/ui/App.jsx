import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home.jsx';
import DropDown from './DropDown.jsx';

const App = () => (
  <div>
    <DropDown />
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
