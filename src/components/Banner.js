import Swiper from "swiper"

require("swiper/dist/css/swiper.min.css");

export class Banner extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let option = {
            loop: true
        }

        let oname = this.props.cname ? 
            `.${this.props.cname}` : ".banner"

        this.swiper = new Swiper(oname, option)
    }

    render(){
        let sl = this.props.list.map((ban,i)=>{
            return (
                <div className="swiper-slide" key={i}>
                    { ban }
                </div>
            )
        }) 

        // //如果hasBtn的值为true  则让banner的html结构上存在按钮
        // let pb = this.props.hasBtn ? <div className="swiper-button-prev"></div> : null;
        
        // let nb = this.props.hasBtn ? <div className="swiper-button-next"></div> : null;
        
        //如果hasBtn的值为true  则让banner的html结构上存在分页器
        let pag = <div className="swiper-pagination"></div>;
        
        return (
            <div className={"banner swiper-container" + this.props.cname}>
                <div className="swiper-wrapper">
                    { sl }
                </div>
                {pag}
            </div>
        )
    }
}