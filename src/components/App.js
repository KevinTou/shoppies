import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Test from './Test';

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
