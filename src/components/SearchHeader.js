import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export class SearchHeader extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router>
                <header>
                    <div className="logoBox">
                        <Link to="/home">
                            <img src="./images/logo.png" />
                        </Link>
                    </div>
                    <Link to="/home">
                        <div className="searchBox">
                            <i className="icon iconfont icon-search"></i>
                            <input type="text" placeholder="搜索" />
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className="ask">
                            <i className="icon iconfont icon-icon-_lianxi"></i>
                        </div>
                    </Link>
                </header>
            </Router>
        )
    }
} 