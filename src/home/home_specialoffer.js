import { Link } from "react-router-dom"

export class Specialoffer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="specialoffer">
                <Link to="/good" className="SOtitle">
                    <div className="actionGo"></div>
                </Link>
            </div>
        )
    }
}

