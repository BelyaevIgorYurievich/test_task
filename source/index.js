import { AppContainer } from 'react-hot-loader';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store';

import App from './App.js';

const rootEl = document.getElementById('root');

const _render = (Component) =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl
  );
  
_render(App);

if (module.hot) {
	module.hot.accept('./App.js', () => _render(App));	
} 
