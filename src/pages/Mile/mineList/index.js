import React from 'react'

import './mineList.css'
function MineList(){
    return (
        <div>
            <ul className="ul_nav_list">
                <li className="row-s-list"><p className="col-8 text-left">
                    <i className="iconfont">
                        <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg"/>
                    </i>
                    我的收藏
                </p>
                <p className="col-4 text-right">
                    <i className="iconfont icon-youjiantou"></i>
                    </p></li>
            </ul>
            <div className="hr"></div>
            <ul className="ul_nav_list">
            <li className="row-s-list"><p className="col-8 text-left">
                    <i className="iconfont">
                        <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg"/>
                    </i>
                    意见反馈
                </p>
                <p className="col-4 text-right">
                    <i className="iconfont icon-youjiantou"></i>
                    </p></li>
            </ul>
            <div className="hr"></div>
        </div>
    )
}
export default MineList