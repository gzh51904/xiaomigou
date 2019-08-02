import React,{Component} from 'react'

import {withRouter} from 'react-router-dom'

import { Checkbox } from 'antd';


// import axios from 'axios'

import './y.css'
// import './w.css'

const plainOptions = ['Apple', 'Pear', 'Orange'];
const CheckboxGroup = Checkbox.Group;
class  Y extends Component{
  constructor(){
    super();
    this.state = {
      isShow:"block",
      inters:[],
      intersAll:[],
      checkAll: false,
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
  onChange = (e) => {
    let checked = e.target.checked;
    let {inters} = this.state
    if(checked && !inters.includes(e.value)){
      inters.push(e.value);
    }else{
      inters =  inters.filter(item=>e.value != item)
    }
    this.setState({
      inters
    });
  };
    render(){
      return (
        <div className="layout-shoucang">
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
         <label>
           <input type="checkbox" className="checkbox-input" onChange={this.onChange} value={a} checked={this.state.inters.includes(a)}/>
         </label>
           <p className="sc-img">
             <a>
               <img src="https://img.alicdn.com/imgextra/i4/3054826079/O1CN01bEKAgy1umEDcoAXKg_!!0-item_pic.jpg_310x310.jpg_.webp"/>
             </a>
           </p>
           <div className="sc-r">
             <a>
               <h3>标题标题</h3>
             </a>
             <div className="num-sc-c">
               <span>天猫价222.2</span>
               <span style={{float:"right"}}>已经开卖</span>
             </div>
             <div className="num-sc-b">
               <p className="quan">
                 <i>
                   15元卷
                 </i>
               </p>
               卷后价
               <span>
                 <i>￥</i>
                 6.9
               </span>
             </div>
           </div>
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