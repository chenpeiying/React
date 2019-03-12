//受控组件
import React, { Component } from 'react';

export default class Controlled extends Component {
    constructor(){
        super();
        this.state = {
            inputValue:'hello',
            list:[1,2,3]
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
            
        })
    }
    handleClick=()=>{
       // console.log(this.inp);
       // let li = this.state.list;
       // li.push(this.state.inputValue);
       this.setState({
            // isClick:!this.state.isClick
            // list:li
            list:[...this.state.list,this.state.inputValue]
       })
       
    }
    componentDidMount=()=>{  //页面加载完的时间
        // this.inp.focus();   //获取焦点
        // this.ref.b.focus();
    }
    render() {
        let style = {
            width:100,
            height:200,
            background:'#ccc'
        }
        return (
            <div>
                {/* {this.prop.children} */}
                 <label htmlFor="inp">输入待办事项</label>  {/* 加大点击范围 */}
                 <input id="inp" onChange={this.handleChange} value={this.state.inputValue}/>  
                 <button onClick={this.handleClick}>提交</button>
                 {/* <ul style={{width:100,height:200,background:'#ccc'}}></ul> */}
                 <ul style={style}>
                     {this.state.list.map((item,index)=>{
                        //  return <li>{item}</li>
                        return <li dangerouslySetInnerHTML={{__html:item}}></li>
                     })}
                 </ul>
               
                 {/* 受控组件
                <input onChange={this.handleChange} type="text" value={this.state.inputValue}/>
               非受控组件，指定表单初始值 
                <input defaultValue='hello 培莹' onChange={this.handleChange} type="text"/>
                使用refs获取表单的值  */}
                {/* <input defaultValue="你好" ref={(inp)=>{this.inp = inp}} type="text" /> */}
                {/* 两种写法对应不同页面加载方法 */}
                {/* <button className={this.props.bgcolor} ref="b" onClick={this.handleClick}>提交</button>  */}
                {/* <button className={this.state.isClick?'red':'gray'} ref="b" onClick={this.handleClick}>提交</button>  */}
                {/* <button onClick={this.handleClick}>提交</button> */}
        </div>
        );
    }
}


