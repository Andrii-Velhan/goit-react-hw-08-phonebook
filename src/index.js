import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';
import Spinner from '../src/components/Spinner';
import './styles/base.scss';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store.store}>
    {/* <Provider store={store}> */}
    <PersistGate loading={<Spinner />} persistor={store.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root'),
);
