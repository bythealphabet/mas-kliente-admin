import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

///NAVIGATION
import Header from "./container/navigation/header/Header";
import Footer from "./container/navigation/footer/Footer";

//CORE
import Home from "./container/home/Home";
import About from "./container/about/About";

//USER
import Signup from "./container/user/auth-user/Signup";
import Signin from "./container/user/auth-user/Signin";

function MainRouter() {
  return (
    <div class="main-grid main-router-row-grid ">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default MainRouter;
