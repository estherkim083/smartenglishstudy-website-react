import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Application from "./Application";
import ThemeWrapper from "./ThemeWrapper";
import { Login, Register } from "../pageListAsync";

export default function App() {
  // useEffect(() => {

  //   console.warn('I\'ll appear as a warning');

  //   console.warn('warning text - I will not');
  // }, []);

  // console.warn = () => {};
  // console.error = () => {};
  // console.info = () => {};
  // console.log= () => {};

  // console.log("I am just another dummy console log, suppose to be suppressed 🙂");

  return (
    <ThemeWrapper>
      <Router>
        <Switch>
          <Route exact path="/auth/:type">
            <Login />
          </Route>
          <Route exact path="/auth/register/:type">
            <Register />
          </Route>
          <Route path="/">
            <Application />
          </Route>
        </Switch>
      </Router>
    </ThemeWrapper>
  );
}
