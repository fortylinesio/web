import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import './index.scss';

import * as AppRedux from './redux';
import * as Components from './components';

const App = () => {
  return (
    <div className=''>
      <Components.Navbar />
      <Components.Cover />
      <Components.WhatWeDo />
      <Components.Services />
      <Components.Projects />
      <Components.Team />
      <Components.Contact />
      <Components.Footer />
    </div>
  );
};

const store = Redux.createStore(AppRedux.appReducer);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
);
