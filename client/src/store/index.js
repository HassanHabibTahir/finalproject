import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
// import logger from 'redux-logger'
import rootReducer from './rootReducer/rootreducer'
const initialState = {};
const middleware = [thunk];
//logger is also a middleware it is used to track the  redux state
//

const Store = createStore(rootReducer,
  initialState,

  compose(
    //  when you writes the looget it is write afer the middleware
    //   applyMiddleware(...middleware,logger),
    applyMiddleware(...middleware),

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

);
export default Store;
