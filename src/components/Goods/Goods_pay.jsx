import React from 'react'

import './GoodsList.css'
function GoodSPay(){
    return <div className="goods_pay">
        <ul>
            <li>
                <p>
                    <img src="https://cmsstatic.dataoke.com//wap_new/main/images/detail_tab_share.svg?v=201907171617" alt=""/>
                    分享
                </p>
            </li>
            <li className="mid">
                <p>
                   <span></span>
                    收藏
                </p>
            </li>
            <li className="kouling">
                <p>口令购买</p>
            </li>
            <li className="lingquan">
                <p>领券购买</p>
            </li>
        </ul>
    </div>
}

export default GoodSPay