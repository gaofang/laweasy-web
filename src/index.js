/**
 * Created by work on 17/5/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/repos" component={Home}/>
      <Route path="/about" component={Home}/>
  </Router>,
  document.getElementById('approot')
);