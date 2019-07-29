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
    //    获取nav的高度，每次点击就让鼠标滚到这里
       let navHeight = document.querySelector('nav');
       window.scrollTo(0,navHeight.clientHeight+10);
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
        //判断当前点击的是否为0，如果不为0就不显示商品推荐列表
            //获取商品推荐列表的节点
        let commodity = document.querySelector('.commodity_list');
        if(idx!==0){
            commodity.style.display = 'none';
        }else{
            commodity.style.display = 'block';
        }
    }
    componentDidMount() {
        let navs = this.refs.navs
        let navsTop = -45;
        window.onscroll = () => {
            //监听鼠标的移动距离
            var btop = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(btop)
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
