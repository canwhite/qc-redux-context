import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//从redux拿出createStore和中间件使用方法
import { createStore,applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
//从react-redux拿出Provider,
//配合Provider使用的是useSelector,和useDispatch
import {Provider} from "react-redux";
//reducer集合
import allReducers from "./redux"

//创建全局store,并且使用中间件
const store = createStore(
  allReducers,
  applyMiddleware(ReduxThunk)//使用中间件
);


//创建全局store
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
reportWebVitals();
