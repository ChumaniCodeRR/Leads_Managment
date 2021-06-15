import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import "./scss/volt.scss";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import App from './App';
import Signin from './pages/Signin';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers/index'
//import store from './store';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

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
