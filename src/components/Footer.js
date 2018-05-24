import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let footerlist = this.props.list.map((item , i)=>{
            return (
                <NavLink to={item.routerName} className="footerBtn" activeClassName="action" key={ i }>
                    <div>
                        <i className={`icon iconfont ` + item.iconName}/>
                        <p>{item.name}</p>
                    </div>
                </NavLink>
            )
        })
        return(
            <div className="footerBox">
                {footerlist}
            </div>
        )
    }
}

let mapStateToProps = ({component}) => ({list: component.footerNav})
let mapDispatchToProps = dispatch => ({
    bannerInit(){
        dispatch(hBannerInit())
    }
})

export const FooterNav  = connect(mapStateToProps,mapDispatchToProps)(Footer);