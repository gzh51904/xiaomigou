import React,{Component} from 'react'

import Swiper from "swiper/dist/js/swiper.js"

    // class FengQiang extends Component{
    //     componentDidMount (){
    //         new Swiper('.swiper-container', {
    //             slidesPerView:4,  
    //             initialSlide: 0,
    //             observer: true,
    //             observeParents: true
    //         })
            
    //     }
    //     render(){
    //         let data = this.props.data
    function FengQiang(data){
        return <div className="list1">
            <h3>
                <span> 近一小时疯抢</span>
            </h3>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                        {data.data.map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <img src={item.pic} alt=""/>
                                <p>{item.title}</p>
                                <span>￥{Math.round((item.yuanjia-item.quan_jine)*100)/100}</span>
                            </div>
                        ))
                        }
                        <div className="swiper-slide end">
                           <p>
                               <span>共{data.data.length}件商品</span>
                               <i></i>
                           </p>
                        </div>
                </div>
            </div>
        </div>
        // }
    
}



export default FengQiang