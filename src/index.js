import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';

import App from './App';

ReactDOM.render(
  // will have to wrap everything in the Provider to use Redux
  <Provider store={store}>
      {/* will have to wrap the App component in the BrowserRouter to use routing */}
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
