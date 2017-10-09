import React from 'react';
import { Router, Route } from 'dva/router';
import HomePage from './routes/HomePage';
import SignUpPage from './routes/SignUpPage';
import IndexPage from './routes/IndexPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path="/test" component={IndexPage}/>
    </Router>
  );
}

export default RouterConfig;
