import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import AuthButton from '../Auth/AuthButton';
<<<<<<< HEAD
import Login from '../Auth/login'; 
=======
>>>>>>> 27a84e5cb5e22cf4bf0c0c05369cddd3947d1156
function AuthExample(){
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
<<<<<<< HEAD
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <Route path="/protected" component={Protected} />
=======
                <Route path="/public" component={public} />
                <Route path="/login" component={login} />
>>>>>>> 27a84e5cb5e22cf4bf0c0c05369cddd3947d1156
            </div>
        </Router>
    )
}

export default AuthExample;