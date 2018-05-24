import { NavLink } from "react-router-dom"

export class ManWoman extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="genderBox">
                <div className="gendertitle">
                    <div className="genderLine"></div>
                    <h3>男女专区</h3>
                </div>
            </div>
        )
    }
}