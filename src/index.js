import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; // provider ekt wad
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Redux_State_Mangement/Reducer_Actions';

const store = configureStore({
  reducer: { userFromIndexjs: userReducer },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* 
<Provider store={Store}>
</Provider>
  */
