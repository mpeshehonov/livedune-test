import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage';

export default () => {
  return (
    <Switch>
      <Route path="/" component={LoginPage} exact />
    </Switch>
  );
};