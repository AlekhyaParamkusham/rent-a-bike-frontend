import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Test from "./components/Test";
import About from "./components/About";
import ScrollTop from "./components/ScrollTop";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login";
import SearchList from "./components/SearchList";
import { ValuesProvider } from "./components/context/ValuesContext";
import { DatesProvider } from "./components/context/DatesContext";
import Single from "./components/Single";
import ResetPass from "./components/ResetPass";
import ForgotPass from "./components/ForgotPass";
import Booking from "./components/Booking";
import Thankyou from "./components/SignUp/Thankyou";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { UserProvider } from "./components/context/UserContext";

const App = () => {
  return (
    <>
      <Router>
        <ValuesProvider>
          <DatesProvider>
            <UserProvider>
              <ScrollTop />
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Test />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/register">
                  <SignUp />
                </Route>
                <Route exact path="/signin">
                  <Login />
                </Route>
                <Route exact path="/reset/:id">
                  <ResetPass />
                </Route>
                <Route exact path="/forgot">
                  <ForgotPass />
                </Route>
                <Route exact path="/search">
                  <SearchList />
                </Route>
                <Route exact path="/bike/:id">
                  <Single />
                </Route>
                <Route exact path="/booking/:id">
                  <Booking />
                </Route>
                <Route exact path="/thankyou">
                  <Thankyou />
                </Route>
                <Route exact path="/services">
                  <Services />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </UserProvider>
          </DatesProvider>
        </ValuesProvider>
      </Router>
    </>
  );
};
export default App;
