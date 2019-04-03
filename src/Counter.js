
import Reace,{Component} from 'react';
import store from './store';
//store连接action和Reducer的一个对象
//action是一个对象，描述state的变化
//Reducer定义了如何响应active描述的state变化，并发送至store
export default class counter extends Component(){
  constructor(){
    super();
    this.state={
      num:store.getStore()
    }
    store.subscribe(()=>{
      this.setState({
        num:store.getStore()
      })
    })
  }
  handleAdd=()=>{
    let action = {type:'ADD',value:10};
    store.dispatch(action);
  }
  handleDec=()=>{
    let action = {type:'ADD'};
    store.dispatch(action);
  }
  render(){
    return(
      <div>
        <p>
          Clicked: <span>{this.state.num}0</span> times
          <button onclick={this.handleAdd}>+</button>
          <button onclick={this.handleDec}>-</button>
          <button>Increment if odd</button>
          <button>Increment async</button>
        </p>
      </div>
    )
  }
}