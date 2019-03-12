import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const {Provider, Consumer} = React.createContext('green');
class Header extends Component {
    render() {
        return (
            <div>
                <Toolbar />
            </div>
        )
    }
}

class Toolbar extends Component {
    render() {
        return (
            <Button />
        )
    }
}

class Button extends Component {
    render() {
        return (
            <Consumer>
                {/* {(value)=><button style={{color:value}}>按钮</button>} */}
                {(value)=><div>{value}</div>}
            </Consumer>
        )
    }
}

ReactDOM.render(
    <Provider value={imgs}>
        {/* <Header /> */}
        <Carousel />
    </Provider>,
    document.getElementById('root')
)
