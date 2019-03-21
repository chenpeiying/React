import React, { Component } from 'react'
import CommentList from './hoc-components/CommentList';
import AddComment from './components/AddComment';
import BlogPost from './hoc-components/BlogPost';
import { BrowserRouter as Router,Route,Link,NavLink, Redirect, Switch} from 'react-router-dom';

// 组件：UI组件（展示数据）和容器组件（请求数据，写逻辑）
// 木偶组件和智能组件
// components // containers
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><NavLink activeStyle={{background:'red'}} to="/CommentList">CommentList</NavLink></li>
                        <li><NavLink activeStyle={{background:'red'}} to="/AddComment">AddComment</NavLink></li>
                    </ul>
                    <Switch>
                        <Route path="/CommentList" component={CommentList}/>
                        <Route path="/AddComment" component={AddComment}/>    
                        {/* <Route from="/home" to="/addComment"/>      */}
                        {/* <Route path="/home" render = {()=><Redirect to="/addComment"></Redirect>}/> */}
                    </Switch>
                    {/* <CommentList/><AddComment/>
                    <BlogPost id={2}/> */}
                </div>
            </Router>
            
        )
    }
}
