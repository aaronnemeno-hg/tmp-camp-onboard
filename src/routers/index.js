import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect
} from "react-router-dom";
import axios from "axios";

import Login from '../pages/login/Login';
import Onboarding from "../pages/onboarding/Onboarding";
import SegmentDashboard from "../pages/segment_dashboard/SegmentDashboard";


// Authentication Object
export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload) {
        console.log("LOGIN CASE ACTION PAYLOAD");
        console.log(action.payload);
        localStorage.setItem("token", action.payload.token)
      } else {
        localStorage.clear();
      }
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.token,
        token: action.payload.token
      }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  //const token = {}
  const { token } = useSelector((state) => state.authentication)  
  
  console.log("ROUTES INDEX - HAS TOKEN?");
  console.log(token);
  let routes;
  if (token && token.access.length > 0) {
    console.log("GOT THE TOKE NOW BITCH");
    console.log(token);
    routes = (
      <Switch>
        <Route exact path="/">
          <Redirect to="/onboarding" />
        </Route>
        <Route path="/dashboard">
          <SegmentDashboard /> 
        </Route>
        <Route path="/onboarding">
          <Onboarding />
        </Route>
      </Switch>
    )
  } else {
    console.log("HAS TOKEN BUT REDIRECTING YOU STILL TO LOGIN HAHA");
    console.log(token);

    routes = (
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch> 
    )
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <main id="main-container">
        <Router>
          {routes}
        </Router>
      </main> 
    </AuthContext.Provider>
  )
}

export default App;