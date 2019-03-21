import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import colorContext from './context/colorContext'

class Theme extends Component{
    constructor(){
        super();
        this.state = {
            value:'red'
        }
    }
    changeColor=()=>{
        this.setState({
            value:'green'
        })
    }
    render(){
        return (
            ReactDOM.createPortal(
                <div>
                    <colorContext.Provider value={this.state.value}>
                        <App/>
                    </colorContext.Provider>
                    <button onClick={this.changeColor}>变色</button>   
                </div>,
                document.querySelector("#app")
            )            
        )
    }
}

ReactDOM.render(

    <Theme />,
    document.getElementById('root')
)