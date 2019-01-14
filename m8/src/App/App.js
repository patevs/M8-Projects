
/*
  src/App/App.js
*/

// import react component lib
import React, { Component } from 'react';
// import react-router-dom libs
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import react-loadable lib
import Loadable from 'react-loadable';

// import styles
import './App.css';

// Loading component
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// home page
const Home = Loadable({
  loader: () => import('./views/pages/Home/Home'),
  loading
});

// error page
const Error = Loadable({
  loader: () => import('./views/pages/Error/Error'),
  loading
});

// login page
const Login = Loadable({
  loader: () => import('./views/pages/Login/Login'),
  loading
});

// register page
const Register = Loadable({
  loader: () => import('./views/pages/Register/Register'),
  loading
});

// App component class
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path={'/'} component={ Home } />
            <Route exact path={'/login'} component={ Login } />
            <Route exact path={'/register'} component={ Register } />
            <Route component={ Error } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
