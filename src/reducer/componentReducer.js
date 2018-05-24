import { COMPONENT_FOOTER_INIT } from "../actionTypes/actionTypes"

export default (state, action)=>{
    switch(action.type){
        case COMPONENT_FOOTER_INIT:
            let newState = {...state};
            console.log("footer初始化成功");
            return newState
            break;
        
        default:
            return state
            break;
    }
}