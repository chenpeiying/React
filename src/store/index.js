import {createStore} from 'redux';
import reducer from './reducer';

let store = createStore(reducer,window._REDUCX_DEVTOOLS_EXTENSION_ && window._REDUCX_DEVTOOLS_EXTENSION_());

// const store = createStore(
//     reducer,
// );
export default store;
