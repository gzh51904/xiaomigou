import React, { Component } from 'react'
import Axios from 'axios';

class List extends Component {
    constructor() {
        super();
        this.state = {
            GoodList: [],
            goodheight:null,
        }
    }
    async componentDidMount() {
        let { data } = await Axios.get('http://localhost:1904/aa/index.php?r=nine/listajax&n_id=58&page=1&cac_id=')
        // console.log(data.data.data)
        let GoodList = data.data.data.map(item => item);
        console.log(GoodList)
        // alert(123)
        this.setState({
            GoodList,
            goodheight:this.refs.goodlist.offsetHeight
        })
    }
     componentWillUpdate(nextProps,nextState){
         if(nextState.goodheight===this.state.goodheight){

         }else{
             this.setState({
                 goodheight:this.refs.goodlist.offsetHeight
             })
         }
         console.log(nextState.goodheight,this.state.goodheight)
        let goodlist = this.refs.goodlist
        console.log(this.state.goodheight)
        // alert(123)
        // 获取列表的高度
        let listHeight = goodlist.offsetHeight||goodlist.clientHeight
        console.log(listHeight)

    }
    render() {
        let { GoodList } = this.state
        return <div className="goodlist" ref="goodlist">
            <h3>精选推荐</h3>
            <ul className="list" >
                {GoodList.map((item, index) => (
                    <li key={item.id}>
                        <img src={item.pic} alt="" />
                        <div className="content">
                            <p className="top">{item.title}</p>
                            <p className="mid">
                                <span>天猫价 ￥{item.yuanjia}</span>
                                <i>已售<em>{item.xiaoliang>10000?((item.xiaoliang)/10000).toFixed(1)+'万':item.xiaoliang}</em>件</i>
                            </p>
                            <p className="btm">
                                <span>券后价￥{(item.yuanjia-item.quan_jine).toFixed(1)}</span>
                                <i><em>{item.quan_jine}元券</em></i>
                            </p>
                        </div>
                    </li>
                ))}


            </ul>
        </div>
    }
}
export default List