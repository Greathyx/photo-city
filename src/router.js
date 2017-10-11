import React from 'react';
import { Router, Route } from 'dva/router';
import HomePage from './routes/HomePage';
import SignUpPage from './routes/SignUpPage';
import GalleryPage from './routes/GalleryPage'
import IndexPage from './routes/IndexPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path="/gallery" component={GalleryPage}/>
      <Route path="/test" component={IndexPage}/>
    </Router>
  );
}

export default RouterConfig;
