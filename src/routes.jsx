import React from 'react';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import TodoList from './TodoList';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={'/'} component={App} />
      <Route path={'/category/:name'} component={TodoList} />
      <Route path={'*'} component={TodoList} />
    </Switch>
  </Router>
);

export default Routes;
