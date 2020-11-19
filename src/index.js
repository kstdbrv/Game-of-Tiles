import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer';


const store = createStore(
  rootReducer,
  composeWithDevTools()
) 

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>
)

render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
