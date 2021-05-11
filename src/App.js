import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './helpers/privateRouter';
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import Signin from './pages/examples/Signin';

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"> </div>
    </div>
  )

// Pages
const SignIn = React.lazy(() => import('./pages/examples/Signin'));
const Signup = React.lazy(() => import('./pages/examples/Signup'));
const ResetPassowrd = React.lazy(() => import('./pages/examples/ResetPassword'));
const ForgotPassword = React.lazy(() => import('./pages/examples/ForgotPassword'));
const Presentation = React.lazy(() => import('./pages/Presentation'));
const Transaction = React.lazy(() => import('./pages/Transactions'));
const Sidelay = React.lazy(() => import('./components/Sidebar'));

class App extends Component {
    render () {
        return (
            <HashRouter>
              <HomePage/>
              <ScrollToTop />
              
            </HashRouter>
        )
    }
}

export default App;