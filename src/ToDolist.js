import React, { Component } from 'react';
import { Input } from 'antd';
import store from './store';
import {add_todo,del_todo} from './actions/index';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            list:store.getState().list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().list
            })
        })
    }
    //添加item
    handleAdd = (e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            })
            document.getElementById('text').value = '';
        }
        // if(e.keyCode===13){
        //     store.dispatch(add_todo(e.target.value));
        //     document.getElementById('text').value = '';
        // }
    }
    //点击item删除
    handleDel(i){
        store.dispatch({
            type:'del_item',
            value:i
        })
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd} type='text' id="text"/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index} onClick={()=>(this.handleDel(index))}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;