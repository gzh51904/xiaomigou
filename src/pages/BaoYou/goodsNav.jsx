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
            idx: 0,
        }
        this.navActive = this.navActive.bind(this)
    }

    //导航栏改变颜色
    navActive(idx) {
       let navs = this.refs.navs;
       let navsTop = -45;
        //监听鼠标的移动距离
        var btop = document.body.scrollTop || document.documentElement.scrollTop;
        if (navsTop < btop) {
            navs.className = 'fix'
        } else {
            navs.className = ''
        }
    
        this.setState({
            idx,
        })
    }
    componentDidMount() {
        let navs = this.refs.navs
        let navsTop = -45;
        window.onscroll = () => {
            //监听鼠标的移动距离
            var btop = document.body.scrollTop || document.documentElement.scrollTop;
            if (navsTop < btop) {
                navs.className = 'fix'
            } else {
                navs.className = ''
            }
        }
    }

    render() {
        let { goodNav } = this.state
        return <div className="goods_nav">
            <ul ref="navs">
                {
                    goodNav.map((item, index) => (
                        <li key={index} onClick={this.navActive.bind(this, index)} className={this.state.idx === index ? "active" : ""}>{item.title}</li>
                    ))
                }

            </ul>
        </div>
    }
}

export default GoodsNav
