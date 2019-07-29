import React from 'react'

function NeiKu(data) {
     
        return <div className="list4">
            <h3>
                <span>女士内裤</span>
            </h3>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {data.data.map((item, index) => (
                        <div className="swiper-slide" key={item.id}>
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
    
}

export default NeiKu