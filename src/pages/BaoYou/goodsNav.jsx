import React, { Component } from 'react'

class GoodsNav extends Component {
    constructor() {
        super();
        this.state = {
            goodNav: [{
                title: '精选',
                path: '/jingxuan',
            }, {
                title: '居家百货',
                path: '/jvjia',
            }, {
                title: '美食',
                path: '/meishi',
            }, {
                title: '服装',
                path: '/fuzhuang',
            }, {
                title: '配饰',
                path: '/peishi',
            }, {
                title: '美妆',
                path: '/meizhuang',
            }, {
                title: '内衣',
                path: '/neiyi',
            }, {
                title: '母婴',
                path: '/muying',
            }, {
                title: '箱包',
                path: '/xiangbao',
            }, {
                title: '数码配件',
                path: '/shuma',
            }, {
                title: '文娱车品',
                path: '/wenyu',
            }],
            idx:0,
        }
        this.navActive = this.navActive.bind(this)
    }

    //导航栏改变颜色
    navActive(idx){
       this.setState({
           idx,
       })
    }
    render(){
        let {goodNav} = this.state
        return <div className="goods_nav">
            <ul>
                {
                    goodNav.map((item,index)=>(
                        <li key={index} onClick={this.navActive.bind(this,index)} className={this.state.idx===index?"active":""}>{item.title}</li>
                    ))
                }
                
            </ul>
        </div>
    }
}

export default GoodsNav
