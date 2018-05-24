import {createStore, applyMiddleware} from "redux"
import reducer from "../reducer/reducer"
import thunk from "redux-thunk"

require("./data")

export default createStore(reducer,window.INIT_DATA,applyMiddleware(thunk))