//reducer接收action岁state进行变化，最终创建全局统一的store
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import thunkReducer from "./thunkReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter:counterReducer,
    auth:authReducer,
    thunk:thunkReducer
})
export default allReducers;