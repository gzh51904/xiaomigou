import React,{Component} from 'react'

import {withRouter} from 'react-router-dom'

import ActionCreator from '../../../store/cartActions.js'

/* 此方法将 store->cartActions文件中 的方法导出 */
import { bindActionCreators } from 'redux';

import {connect} from 'react-redux'

// import axios from 'axios'

import './y.css'
// import './w.css'

const plainOptions = ['Apple', 'Pear', 'Orange'];

class  Y extends Component{
  constructor(){
    super();
    this.state = {
      isShow:"none",
      inters:[],
      intersAll:[],
      checkAll: false,
    }
    this.toHome = this.toHome.bind(this)
   
  }
  toHome(){
    this.props.history.push({
      pathname:'/home'
    })
  }
  onChange = (e) => {
    let checked = e.target.checked;
    let inters = this.state.inters;
    let checkAll = this.state.inters.length === this.state.intersAll.length ? true : false;
    if(checkAll)  this.setState({checkAll});
    if(checked && !inters.includes(e.target.value)){
      inters.push(e.target.value);
    }else{
     inters =  inters.filter(item=>{
        return e.target.value !== item*1
      })
    }
    this.setState({
      inters:inters
    });
  };
  chooseAll = (e)=>{
    let {checked} = e.target;
    let inters = this.state.intersAll.map(item=>item.id.toString())
   if( checked){
      this.setState({
          inters,
        checkAll:checked
      })}else {
        this.setState({
          inters:[],
          checkAll:checked
        })
      }
  }
  remove = ()=>{
    this.state.inters.forEach(item=>{
      this.props.createRemGoodsAction(item*1)
    })
    this.setState({
      inters:[]
    })
  }

  componentWillMount(){
    let intersAll = this.props.intersAll;
    let isShow = ""
    if(intersAll.length === 0){
      isShow = "block"
    }else{
      isShow = "none"
    }
    this.setState({
      intersAll,
      isShow
    })
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    let intersAll = nextProps.intersAll;
    let isShow = ""
    if(intersAll.length === 0){
      isShow = "block"
    }else{
      isShow = "none"
    }
     this.setState({
      isShow
    })
  }
    render(){
      let {isShow} = this.state
      let bottom = this.props.height
      let left = this.props.left
      // console.log(isShow);
      
      return (
        
        <div className="layout-shoucang">
          <div>
        <ul style={{marginLeft:left + "px"}}>
       <li style={{display:isShow}}>
          <div className="default_msg">
          <i className="iconfont"></i>
          暂无收藏
          <p className="col-mar">
            <a onClick={this.toHome.bind(this)}>去首页逛逛吧</a>
          </p>
          </div>
       </li>
      {
        this.props.intersAll.map(item=>{
          return  <li className="row-s" key={item.id}>
          <div className="label">
          <label>
            <input type="checkbox" className="checkbox-input" onChange={this.onChange} value={item.id} checked={this.state.inters.includes(item.id.toString())}/>
          </label>
            <p className="sc-img">
              <a>
                <img src={item.pic}/>
              </a>
            </p>
            <div className="sc-r">
              <a>
                <h3>{item.dtitle}</h3>
              </a>
              <div className="num-sc-c">
                <span>天猫价{item.yuanjia}</span>
                <span style={{float:"right"}}>已售{
                  item.xiaoliang/10000 > 1 ? 
                  (item.xiaoliang/10000).toFixed(2) + "万件" : item.xiaoliang + "件"
                  }</span>
              </div>
              <div className="num-sc-b">
                <p className="quan">
                  <i>
                    {item.quanJine}元卷
                  </i>
                </p>
                卷后价
                <span>
                  <i>￥</i>
                 {(item.yuanjia)*1 - (item.quanJine)*1}
                </span>
              </div>
            </div>
          </div>
        </li>
        })
      }
        </ul>
        <div className="coll_btm" style={{bottom:bottom + "px"}}>
      <div className="sc_b">
        <div className="sc_b_left">
          <label style={{marginLeft:"10px"}}>
            <input type="checkbox" name="all" onChange={this.chooseAll} checked={this.state.checkAll}/>
            <span user-num="">全选 <i>{this.state.inters.length}</i></span>
          </label>
        </div>
        <div className="sc_b_right">
        <a className="sc_b_right_delete" onClick={this.remove.bind(this)}>删除</a>
        </div>
      </div>
        </div>
          </div>
        </div>
     )
    }
}
Y = withRouter(Y)
function mapStateToProps(state){
  return {
    intersAll:state.CarReducer.CarGoodsList
  }
};
function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators(ActionCreator,dispatch),
    dispatch
  }
}
Y = connect(mapStateToProps,mapDispatchToProps)(Y)
export default Y