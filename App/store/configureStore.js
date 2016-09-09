import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducer";

//这里配置全局store   //preloadedState 可用于前后端同构渲染
export default function configureStore(initialState) {
    //定义中间件，环境变量可使用nodejs赋值，也可使用webpack的server模式赋值
    const middleware = process.env.NODE_ENV === 'production' ?
        [thunk] :
        [thunk, logger()]

    const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

    return store
}

