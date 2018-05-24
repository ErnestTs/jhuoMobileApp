import { HOME_BANNER_INIT } from "../actionTypes/actionTypes"

export default (state, action)=>{
    switch(action.type){
        case HOME_BANNER_INIT:
            let newState = {...state};
            console.log("banner初始化成功");
            return newState
            break;
        
        default:
            console.log(action.type)
            return state
            break;
    }
}