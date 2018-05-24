import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { Provider } from "react-redux";
import { HomeController } from "./home/HomeController";
import store from "./store/store";


export const App = props => {
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/home" component={ HomeController } />
                    <Redirect from="/" to="/home" exact={ true } />
                </Switch>
            </Router>
        </Provider>
    )
}
