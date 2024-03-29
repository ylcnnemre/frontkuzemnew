import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserStore } from './context/user';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from "./slices/index";
import "./i18n"
const root = ReactDOM.createRoot(document.getElementById('root'));
Document.title="asd"
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <UserStore>
          <ToastContainer />
          <App />
        </UserStore>

      </BrowserRouter>
    </Provider>


  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
