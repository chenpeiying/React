import {ADD_TODO_ITEM, DEL_TODO_ITEM} from '../actions/ActionTypes'
import {combineReducers} from  'redux';
let initValue = {

    list:[1,2,3]
}

export default(state = initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            // let newState = JSON.parse(JSON.stringify(state));
            // newState.list.push(action.value);
            // return newState;
            return [...state,action.value];
        case DEL_TODO_ITEM:
            // let newState1 = JSON.parse(JSON.stringify(state));
            // newState1.list.splice(action.index,1);
            // return newState1;
            // return state.splice(action.index,1);
            return state.filter((item,index)=>{
                return index !== action.index
            });
        default:
            return state;
    }
}

// import {combineReducers} from './reducer'
// export default(state=12,action)=>{
//     switch(action.type){
//         case 'ADD':
//             return state + action.value;
//         case 'DEC':
//             return state-1;
//         default:
//             return state;
//     }
// }

// let initValue = {
//     list:[1,2,3]
// }
// export default (state,action)=>{
//     switch(action,type){
//         case 'add item':
//             //把state编程一个字符串
//             let newState = JSON.parse(JSON.stringify(state));
//             newState.list.push('123');
//             Object.assign({},state)
//             return newState;
//         default:
//             return state;
//     }
// }