import { connect } from "react-redux"
import { Link } from "react-router-dom"

// component
import { SearchHeader } from "../components/SearchHeader"
import { Banner } from "../components/Banner"
import { FooterNav } from "../components/Footer"

// home_
import { Specialoffer } from "./home_specialoffer"
import { ManWoman } from "./home_ManOrWoman"

// actions
import { hBannerInit } from "../actions/action"

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.bannerInit()
    }

    render(){
        return(
            <div className="homeMain">
                <SearchHeader />
                <div className="main">
                    <Banner 
                        cname="banner" 
                        list={this.props.bannerList} 
                    />
                    {/* marquee */}
                    <div className="marqueeBox">
                        <div className="marqueeTitle">
                            <span>健货</span>
                            <span className="marqueeYellow">动态</span>
                        </div>
                        
                        <div className="marqueeText">
                            <span className="marqueeTextBall"></span>
                            <span className="marqueeTextList">请替换为marquee数据</span>
                        </div>
                    </div>

                    {/* 今日上新 */}
                    <div className="todayNew">
                    
                        <div className="todayNewLeft">
                            <div className="TNLtitle">
                                <span className="TNLtitleBall fl"></span>
                                <span>今日上新</span>
                                <span className="TNLtitleBall fr"></span>
                            </div>
                            <p className="TNLtext">
                                热卖中
                            </p>
                            <div className="TNLimgBox">
                            </div>
                        </div>

                        <div className="todayNewRight">
                            <div className="TNRtop">
                                <div className="TNRLeft fl">
                                    <h4>
                                        新品抢先
                                    </h4>
                                    <div>
                                        <span></span>
                                    </div>
                                    <h5>
                                        好货提前看
                                    </h5>
                                </div>
                                <div className="TNRRight fl">
                                    <h6 className="TNRRightImgBox"></h6>
                                </div>
                            </div>
                            <div className="TNRbottom">
                                <div className="TNRLeft fl">
                                    <h4>
                                        特色馆
                                    </h4>
                                    <div>
                                        <span></span>
                                    </div>
                                    <h5>
                                        好货继续约
                                    </h5>
                                </div>
                                <div className="TNRRight fl">
                                    <h6 className="TNRRightImgBox"></h6>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 特价商品 */}
                    <Specialoffer />

                    {/* 男女专区 */}
                    <ManWoman />
                </div>
                <FooterNav />
            </div>
        )
    }
}

let mapStateToProps = ({home}) => ({bannerList:home.banList});
let mapDispatchToProps = dispatch => ({
    bannerInit(){
        dispatch(hBannerInit())
    }
})

export const HomeController = connect(mapStateToProps,mapDispatchToProps)(Home);