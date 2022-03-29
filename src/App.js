import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LazyLoadImg from "./components/LazyLoadImg";
import NavBar from "./components/NavBar";

const Lazy = lazy(() => import("./components/Lazy"));

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" />
          <Route path="/lazy-load-img" component={LazyLoadImg} />
          <Suspense fallback="Loading...">
            <Route path="/lazy" component={Lazy} />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}

export default App;
