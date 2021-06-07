import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import App from './App';
import Signin from './pages/examples/Signin';

import store from './store';

ReactDOM.render(
  //<HashRouter>
    //<ScrollToTop />
    //<HomePage />
    <Provider store={store}>
      <App/>
    </Provider>,
  //</HashRouter>,
  document.getElementById("root")
);
