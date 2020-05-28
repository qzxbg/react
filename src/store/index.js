import {createStore, combineReducers} from "redux";
import getAdminData from "./reducer/admin";
const store = createStore(combineReducers({
    getAdminData
}))

export default store;