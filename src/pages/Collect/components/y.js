import React,{Component} from 'react'

import {withRouter} from 'react-router-dom'

// import axios from 'axios'

import './y.css'
// import './w.css'

class  Y extends Component{
  constructor(){
    super();
    this.state = {
      isShow:"block"
    }
    this.toHome = this.toHome.bind(this)
  }
async componentWillMount(){
  // let {data} = await axios.get("http://m.hlxns.com/m/index.php?r=user/listajax")
  // console.log(data);
  
}
  toHome(){
    this.props.history.push({
      pathname:'/home'
    })
  }
    render(){
      return (
        <div className="layout">
          <div>
        <ul>
       <li style={{display:{"":this.isShow}}}>
          <div className="default_msg">
          <i className="iconfont"></i>
          暂无收藏
          <p className="col-mar">
            <a onClick={this.toHome}>去首页逛逛吧</a>
          </p>
          </div>
       </li>
       <li className="row-s">
         <div className="label">
           <label></label>
           <p className="img"></p>
           <div className="cent"></div>
         </div>
       </li>
        </ul>
        <div></div>
          </div>
        </div>
     )
    }
}
Y = withRouter(Y)
export default Y