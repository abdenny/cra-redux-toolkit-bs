import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App/App';
import BaseLayout from './components/layout/BaseLayout';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
