import React from 'react';
import { Router, Route } from 'dva/router';
import HomePage from './routes/HomePage';
import SignUpPage from './routes/SignUpPage';
import TestPage from './routes/TestPage'
import IndexPage from './routes/GalleryPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path="/gallery" component={IndexPage}/>
      <Route path="/test" component={TestPage}/>
    </Router>
  );
}

export default RouterConfig;
