import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
// import App from './App';
import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
import AuthExample from './Auth/AuthExample';
// import Counter from './Counter';
import ToDolist from './ToDolist';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

ReactDOM.render(
    <div>
        {/* <Counter/> */}
        {/* <Provider> */}
             <ToDolist />
        {/* </Provider> */}
       
    </div>,
    document.getElementById('root')
)



// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

