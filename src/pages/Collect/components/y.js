import React from 'react'

// import './w.css'

function y(props){
    return (
        <div className="user_coll_def">
          <p className="img"></p>
          <div className="text">登录后收藏哈哈哈啊哈哈<p>收藏云端同步，不错过任何优惠哦</p></div>
          <div className="but">
          <a className="btn btn-secondary btn-max" onClick={()=>{props.history.push({pathname:'/reg'})}}>登录/注册</a>
          </div>
        </div>
    )
}
export default y