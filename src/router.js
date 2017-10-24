import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import HomePage from './routes/HomePage';
import SignUpPage from './routes/SignUpPage';
import TestPage from './routes/TestPage';
import GalleryPage from './routes/GalleryPage'
import PhotoPage from './routes/PhotoPage';
import VideoPage from './routes/VideoPage';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path="/gallery" component={GalleryPage}>
        <IndexRoute components={PhotoPage}/>
        <Route path="/gallery/photo" component={PhotoPage}/>
        <Route path="/gallery/video" component={VideoPage}/>
      </Route>
      <Route path="/test" component={TestPage}/>
    </Router>
  );
}

export default RouterConfig;
