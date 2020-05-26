import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store';
import MusicProvider from './MusicContext';

const renderApp = () => ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MusicProvider>
        <App />
      </MusicProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp();