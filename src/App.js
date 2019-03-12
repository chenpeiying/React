import React,{Component,Fragment} from 'react';
class App extends Component{
    //   constructor(props){
        // super(props);
        // console.log(props);
    constructor(){
        super();
       
        this.state = {
            course:'移动web开发',
            time:new Date().toLocaleString()
        }
        this.headclick = this.headclick.bind(this);//绑定this

        // setInterval(()=>{
        //     this.setState({
        //         time:new Date().toLocaleString()
        //     })
        // },1000)
        console.log('constructor')
  }
    // static getDerivedStateFromProps(nextProps,prewState){
    //     console.log('getDerivedStateFromProps');
    //     return null;
    // }
    // //判断是否要更新
    // shouldComponentUpdate = (nextProps,prewStat)=>{
    //     console.log('shouldComponentUpda');
    //     if(nextProps.a == this.props.a)
    //     return 1;
    // }

    // ComponentDidUpdate(prevProps,prevStatr){
    //     console.log('ComponentDidUpdate');
    //    // console.log(a);
    // }
    headclick(){
        console.log('点击事件');
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    //箭头函数声明是不用绑定this，直接就能声明
    render(){
        console.log('render');
        return(
            // <Fragment>
            //     <p>react</p>
            //     {/* <Hello name={this.props.wd}/> */}
            //     <p>{this.state.course}</p>
            //     <h1>{this.state.time}</h1>                
            // </Fragment>
            <div>
                <div>{this.state.time}</div>
                {/* 点击事件的处理+绑定this */}
                {/* <button onClick={this.headclick}>开始</button> */}
                {/* <button onClick={this.headclick.bind(this)}>开始</button> */}
                {/* <button onClick={this.headclick.bind(this:100)}>开始</button> */}
                <button onClick={(e)=>{this.headclick(200,e)}}>开始</button>
               
            </div>
        );      
        console.log('e');
    }  
} 
export default App;