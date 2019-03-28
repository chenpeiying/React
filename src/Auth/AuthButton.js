import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import fakeAuth from "./fakeAuth";
import {withRouter} from 'react-router-dom';

function AuthButton(props){
    return (
     
        fakeAuth.isAuthenticated?
        <p>
            welcome!
            <button onClick={()=>{
                fakeAuth.signout(props.history.push("/"));
            }}>退出</button>
        </p>:
        <p>
            你进不去了
        </p>
    )
}

const AuthButton = withRouter(button);

export default AuthButton;