import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
    console.log('feeling', action.type, action.payload)
    return action.payload 
  } else {
    return state
  }
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
    console.log('understanding', action.type, action.payload)
    return action.payload
} else {
    return state
}}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        console.log('support', action.type, action.payload)
        return action.payload
    } else {
        return state
    }};

const comment = (state = 0, action) => {
    if (action.type === 'SET_COMMENT') {
        console.log('comment', action.type, action.payload)
        return action.payload;
    } else {
        return state;
    }};

  const reduxStore = createStore(
    combineReducers({
      feeling,
      understanding,
      support,
      comment
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
