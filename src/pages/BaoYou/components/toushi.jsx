import React from 'react'

function TouShi(data) {
        return <div className="list2">
            <h3>
                <span>精致头饰</span>
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

                </div>
            </div>
        </div>
    
}

export default TouShi