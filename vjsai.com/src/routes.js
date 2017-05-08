/**
 * Created by vijay on 20/3/17.
 */
import React from 'react';
import { Route } from 'react-router';
import IndexContainer from './containers/IndexContainer';
import App from './components/App';

export default (
  <Route path="/" component={IndexContainer}>
    <Route path="index" component={IndexContainer} />
  </Route>
);

