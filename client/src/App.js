import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/home'
import Login from './views/Authentication/Login'
import Signup from './views/Authentication/Signup'

const App = () => {
  
  return (

    <BrowserRouter>
        <Switch>
        <Route exact path="/" name="Home Page" render={props => <Home {...props} />} />
        <Route exact path="/login" name="Home Page" render={props => <Login {...props} />} />
        <Route exact path="/signup" name="Home Page" render={props => <Signup {...props} />} />
        </Switch>
      </BrowserRouter>

  );
}
 
export default App;