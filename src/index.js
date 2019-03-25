import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
import { HashRouter as Router} from "react-router-dom";
import CustomLink from './containers/CustomLink';

import AuthExample from './Ren/AuthExample';

ReactDOM.render(
    //<Router>
       // <App />
       
   // </Router>, 
//    <CustomLink/>,
<AuthExample/>,
    document.getElementById('root')
)

