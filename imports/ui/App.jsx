import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home.jsx';
import About from './About.jsx';
import HowItWorks from './hiw.jsx';
import Privacy from './Privacy.jsx';
import Resources from './Resources.jsx';
import DropDown from './DropDown.jsx';

const App = () => (
  <div>
    <DropDown />
    <Switch>
      <Route path="/Resources" component={Resources} />
      <Route path="/Privacy" component={Privacy} />
      <Route path="/HowItWorks" component={HowItWorks} />
      <Route path="/About" component={About} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
