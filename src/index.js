// import React,{Component,Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//  import App from './App';
// import Types from './Types';
// import Controlled from './controlled';

// ReactDOM.render(<Types type="str" name="hello"/>,document.getElementById('root'));
// ReactDOM.render(<Controlled><h1>title</h1></Controlled>,document.getElementById('root'));

// import * as serviceWorker from './serviceWorker';



// // const str = "hello react";
// // // const ele = <h1 className="tit" id="title">{str}</h1>;
// // console.log(ele);
// // let obj = {
// //     type:'h1',
// //     className:'tit',
// //     props:{
// //             id:'title',
// //             children:['hello world']
// //     }
// // }
// // // const ele = <h1>hello</h1>;
// // let ele = React.createElement('h1',{id:'title',className:'tit'},['hello']);
// // ReactDOM.render(<div>hello</div>,document.getElementById('root'));




// // function render(obj,container){
// //     let {type,props} = obj;
// //     var ele = document.createElement(type);
// //     Object.keys(props).forEach((item)=>{
// //         // console.log(item);
// //         if(item === 'className'){
// //             ele.className = props[item];  
// //             // ele.setAttribute('class',props[item]);
// //         }else if(item ==='children'){
// //            props[item].forEach(item=>{
// //                let textNode = document.createTextNode(item); 
// //                ele.appendChild(textNode);
// //                 // ele.innerHTML = item;
// //             })
          
// //         }else{
// //             ele[item] = props[item];

// //     }})
// // }
// // render(obj,document.getElementById('root'));


// // --------------------------------------------------------------------用一个函数定义一个组件
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // function Hello(props){
// //     return <h1>React{props.name}</h1>;
// // }
// // function App(){
// //     console.log(props);
// //     return <Hello name="world"/>;
// // }

// // ReactDOM.render(<App name="world" wd="react"/>,document.getElementById('root'));



// // ---------------------------------------------------------------------用类定义一个组件
// let num = 10;
// function Hello(props){
//     return <h1>React{props.name}</h1>;
// }
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {    //固定的，state不能变
//             course:'移动web开发',
//             time:new Date().toLocaleString()
//         }
//         //state一变，页面就会重新渲染
//         setInterval(()=>{
//             this.setState({
//                 time:new Date().toLocaleString()
//             })
//         },1000)
        
//     }
//     render(){
//         // console.log(this.props);//从父组件传来的数据
//         // return <Hello name="react"/>;
//         // return (
//         //     //div必须加上，当有多个标签时，必须要包裹，但是标签不显示，
//         //     <div>
//         //         <p>react</p>
//         //         <Hello name={this.props.wd}/>
//         //     </div>
//         // );
//         return (
//             //div可以替换为Fragment,渲染包裹子元素,如果只有一个子元素，就不用包裹
//             <Fragment>
//                 <p>react</p>
//                 <p>{this.state.course}</p>
//                 <Hello name={this.props.wd}/>
//                 <h1>{this.state.time}</h1>                
//             </Fragment>
//         );
//         // return(<div>
//         //     <p>{this.props.name}</p>;
//         // </div>)
//     }
// }
// ReactDOM.render(<App wd={num}/>,document.getElementById('root'));


//=================================================================================================== 第三次课

//创建组件的两种方式：2种（函数式（无状态组件），类声明式）
//组件生命周期
//组件中的propS(父组件传到子组件的数据，子组件不能修改)
//state(组件内置管理组件中的数据，作用域当前组件，组件外不能修改)
//setState()----修改state
//JSX ==>对象
//元素渲染
//事件绑定。传参
//状态提升
//=========================================================================================== 第三次课:点击修改字体颜色
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// class Header extends Component {
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         color:'red'
//     //     }
//     // }
//     // handleChange=()=>{
//         //-------------------三种方法
//         //------------1
//         // this.setState.color === 'red'?'green':'red'
//         //------------2
//         // this.setState((state)=>{
//         //     return {
//         //         color:state.color === 'red'?'green':'red'
//         //     }
//         // });
//         //------------3
//         // this.setState((state)=>({
//         //         color:state.color === 'red'?'green':'red'
//         //     }),
//         // );
//         // console.log(this.state.color);
//     // }
    
//     render() {
//         return (
//             <div>
//                 {/* <h1 style={{color:this.state.color}}>Header</h1>, */}
//                 <h1 style={{color:this.props.color}}>Header</h1>,
//                 <button onClick={this.props.handleChange}>改变字体颜色</button>
//             </div>
//         )
//     }
// }

// class Footer extends Component {
//     // constructor(){
//     //     super();
//     //     this.state = {

//     //     }
//     // }
//     render() {
//         return (
//             <h1 style={{color:this.props.color}}>Footer</h1>
//         )
//     }
// }
// class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             color:'red'
//         }
//     }
//     handleChange = ()=>{
//         this.setState(
//             {
//                 color: this.state.color==='red'?'green':'red'
//             }
//         );
//     }

//     render(){
//         return [
//             <Header color={this.state.color} handleChange = {this.handleChange} key='a'/>, //要将所有的state换成props
            
//             <Footer color={this.state.color} key='b'/>
//         ]
//     }
// }
// ReactDOM.render(<App />,document.getElementById('root'));

//==================================================================================================第三次课轮播图
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// class Carousel extends Component {
//     constructor(){
//         super();
//         this.state = {
//             index:0
//         }
//     }
//     componentDidMount(){
//         // setTimeout(()=>{
//         //     this.ul.style.left = '-800px';
//         // },1000)     

//         setInterval(()=>{
//             if(this.state.index==5){
//               this.ul.style.transitionDuration = '0s';
//               this.ul.style.left = 0;  
//               setTimeout(()=>{
//                 this.ul.style.transitionDuration = '0s';
//                 this.setState({
//                     index:1
//                 })
//               },0)
             
//                 return;
//             }
//             this.setState({
//                 index:this.state.index+1
//             })
//         },2000)
//     }
//     render(){
//         let style = {
//             left:-800*this.state.index
//         }
//         return (
//             // <div className ='wrap'>
//                 <div className ='box'>
//                     <ul style={style} ref={(ul)=>this.ul=ul} className="slides">
//                         <li><img src = {require('./images/banner01.jpg')} alt="" /></li>
//                         <li><img src = {require('./images/banner02.jpg')} alt="" /></li>
//                         <li><img src = {require('./images/banner03.jpg')} alt="" /></li>
//                         <li><img src = {require('./images/banner04.jpg')} alt="" /></li>
//                         <li><img src = {require('./images/banner05.jpg')} alt="" /></li>
//                         <li><img src = {require('./images/banner01.jpg')} alt="" /></li>
//                     </ul>
//                     <ul clsaaName = 'dots'>
//                         <li clsaaName = {this.state.index == 0?'active':''}>1</li>
//                         <li clsaaName = {this.state.index == 0?'active':''}>2</li> 
//                         <li clsaaName = {this.state.index == 0?'active':''}>3</li> 
//                         <li clsaaName = {this.state.index == 0?'active':''}>4</li>
//                         <li clsaaName = {this.state.index == 0?'active':''}>5</li>
//                     </ul>
//                 </div>
//             // </div>
//         )
//     }
// }
// ReactDOM.render(<Carousel />,document.getElementById('root'));

//=*****************************************************************************************************************第四次课

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Dots from './Dots';
// import Slide from './Slide';
// import axios from 'axios'
// class Carousel extends Component {
//     constructor(){
//         super();
//         this.state = {
//             index:0
//         }
//     }
//     move=()=>{
//             if(this.state.index>=5){
//               this.ul.style.transitionDuration = '0s';
//               this.ul.style.left = 0;  
//               setTimeout(()=>{
//                 this.ul.style.transitionDuration = '1s';
//                 this.setState({
//                     index:1
//                 })
//               },0)
             
//                 return;
//             }
//             this.setState({
//                 index:this.state.index+1
//             })
       
//     }
//     leftclick=()=>{
//         if(this.state.index>=5){
//             this.ul.style.transitionDuration = '0s';
//             this.ul.style.left = -4000+'px';  
//             setTimeout(()=>{
//               this.ul.style.transitionDuration = '1s';
//               this.setState({
//                   index:1
//               })
//             },0)
           
//               return;
//           }
//           this.setState({
//               index:this.state.index-1
//           })
//     }
//     componentDidMount(){
//         this.timer = setInterval(this.move,2000);
//     }
//     hadleOver=()=>{
//         clearTimeout(this.timer);
//     }
//     handleOut=()=>{
//         this.timer = setInterval(this.move,2000);
//     }
//     handleClick=(idx)=>{
//         this.setState({
//             index:idx
//         })
//     }
//     render(){
//         let style = {
//             width:800*(this.props.imgs.length+1),
//             left:-800*this.state.index
//         }
//         return (
//                 <div className ='box' onMouseOut={this.hadleOut} onMouseOver={this.hadleOver}>
//                     <ul style={style} ref={(ul)=>this.ul=ul} className="slides">
//                         {
//                             this.props.imgs.map((item,index)=>{
//                                 return <li key={index}><img src={item} alt=""/></li>
//                             })
//                         }
//                         <li><img src = {this.props.imgs[0]} alt="" /></li>                      
//                     </ul>
//                     {/* <ul className = 'dots'>
//                         {
//                             //当img的下标和index相同时，加上类active；
//                             // this.props.imgs.map((item,index)=><li className={this.state.index?"active":""}>{index +1}</li>)
//                             this.props.imgs.map((item,index)=><li className={this.state.index===index || (index==0 && this.state.index===this.props.imgs.length)?"active":""}>{index +1}</li>)
//                         }
//                     </ul> */}
//                     <Dots handleClick={this.handleClick} imgs={this.props.imgs} index={this.state.index} />
//                     <ul className="arrow">
//                         <li onClick={()=>this.leftclick()} calassName="arrow-left">&lt;</li>
//                         <li onClick={()=>this.move()} calassName="arrow-right">&gt;</li>
//                     </ul>
//                 </div>
//         )
//     }
// } 
// let imgs = [
//         require('./images/banner01.jpg'),
//         require('./images/banner02.jpg'),
//         require('./images/banner04.jpg'),
//         require('./images/banner05.jpg'),
//         require('./images/banner01.jpg')
//     ]

// ReactDOM.render(<Carousel imgs={imgs} />,document.getElementById('root'));



//*****************************************************************************************************************第五次课
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'
class App extends Component{
    constructor(){
        super();
        this.state={
            authors:'',
            content:'',
            title:''
        }
    }
    componentDidMount=()=>{
        // get请求
        // axios.get('https://api.apiopen.top/recommendPoetry')
        // .then((data)=>{
        //     let {authors,content,title} = data.data.result;
        //     this.setState({
        //         authors,content,title
        //     })
        // })
        fetch('https://api.apiopen.top/recommendPoetry')
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
        })
    }
        // get请求传参，node中通过req.query获取
        // axios.get('/api/courses',{
        //     params: {
        //       id: 1
        //     }
        //   }).then(res=>console.log(res))
        // post请求，参数在node中通过req.body 获取
        // axios.post('/api',{name:11}).then(res=>console.log(res));

        render(){
            return <h1>{this.state.title}</h1>
        }
    }

ReactDOM.render(<App/>,document.getElementById('root'));