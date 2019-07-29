import React from 'react'

import './w.css'

import {withRouter} from 'react-router-dom'
function W(props){
    return (
        <div className="user_coll_def">
          <p className="img"></p>
          <div className="text">登录后收藏<p>收藏云端同步，不错过任何优惠哦</p></div>
          <div className="but">
          <a className="btn btn-secondary btn-max" onClick={()=>{props.history.push({pathname:'/login',
           params: { url:props.match.url }
          })}}>登录/注册</a>
          </div>
        </div>
    )
}

W = withRouter(W)
export default W