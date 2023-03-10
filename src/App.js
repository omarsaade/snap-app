import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainN from "./shared/components/Navigation/MainN";
import Footer from "./shared/components/Footer/Footer";

import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

import Users from "./user/pages/Users";

import { AuthContext } from "./shared/context/auth-context";

import { useAuth } from "./shared/hooks/auth-hook";

/*
import Auth from "./user/pages/Auth";
import UserSnaps from "./snap/pages/UserSnaps";

import NewSnap from "./snap/pages/NewSnap";

Lazy-Laod : It is a new function in react that lets you load 

react components lazily through code splitting 
without help from any additional   libraries
*/

const Auth = React.lazy(() => import("./user/pages/Auth"));
const UserSnaps = React.lazy(() => import("./snap/pages/UserSnaps"));
const NewSnap = React.lazy(() => import("./snap/pages/NewSnap"));
const UpdateSnap = React.lazy(() => import("./snap/pages/UpdateSnap"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  // react router v5 => update to v6
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserSnaps />
        </Route>
        <Route path="/places/new" exact>
          <NewSnap />
        </Route>
        <Route path="/places/:snapId">
          <UpdateSnap></UpdateSnap>
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserSnaps />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router basename="/snap-app">
        <MainN />
        <main>
          <Suspense
            fallback={
              <div className="center-text">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

/*
without lazy code




import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import MainN from "./shared/components/Navigation/MainN";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
const App = () => {
  const { token, login, logout, userId } = useAuth();
  let routes;
  if (token) {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Users />} />
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <MainN />
      <main>
        <Routes>{routes}</Routes>
      </main>
    </AuthContext.Provider>
  );
};
export default App;
*/
