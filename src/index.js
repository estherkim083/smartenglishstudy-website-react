import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from './utils/history';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { GoogleOAuthProvider } from '@react-oauth/google';

const initialState = {};
const store = configureStore(initialState, history);



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <App />
          </GoogleOAuthProvider>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();