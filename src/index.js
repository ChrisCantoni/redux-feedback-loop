import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feeling = (state = 0, action) => {
    return state + action.payload 
  }
const understanding = (state = 0, action) => {
    return state + action.payload
}

  const reduxStore = createStore(
    combineReducers({
      feeling,
      understanding
    }),
    applyMiddleware(logger)
  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
