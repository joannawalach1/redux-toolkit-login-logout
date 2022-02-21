import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FakeLoginComponent from './components/fakeLoginComponent';
import Login from "./components/login";
import ProtectedRoute from "./protectedroute";

const App = () => {
  return (
    <div>
      <h2>App</h2>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FakeLoginComponent}></Route>
          <ProtectedRoute exact path="/login" component={Login}></ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App