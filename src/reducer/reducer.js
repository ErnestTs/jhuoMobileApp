import homeReducer from "./homeReducer";
import componentReducer from "./componentReducer";


export default (state , action)=>{
        return {
                home: homeReducer(state.home,action),
                component: componentReducer(state.component,action)
        }
}