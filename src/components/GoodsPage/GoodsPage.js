import React from 'react'
import { node } from 'prop-types';
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
import { tuple } from 'antd/lib/_util/type';


class GoodsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            goodsList: [],
            isprice: true,
            isshow: true,
            navList: [{
                name: '人气',
                path: '/renqi'
            }, {
                name: '最新',
                path: '/zuixing'
            }, {
                name: '销量',
                path: '/xiaoliang'
            }, {
                name: '价格',
                path: '/jiage',
            }]
        }
        this.healderLink = this.healderLink.bind(this);
        this.headelToDetails = this.headelToDetails.bind(this);
        this.headelGoback = this.headelGoback.bind(this);
    }

    async  healderLink(index) {


        let px = ''
        if (index == 0) {
            px = 't'
        } else if (index == 1) {
            px = 'latest'
        } else if (index == 2) {
            px = 'sell'
        } else {
            if (this.state.isprice) {
                px = 'price_h';
            } else {
                px = 'price';
            }
        }

        let item = JSON.parse(sessionStorage.getItem(this.state.data.api_cid + px));
        if (item) {
            this.setState({
                goodsList: item,
                isshow: false
            })
            return;
        }

        this.setState({
            isshow: true
        })

        const { data } = await Axios.get(`http://localhost:1904/page/m/index.php?r=class%2Fcyajaxsub&page=1&cid=${this.state.data.api_cid}&px=${px}&cac_id=`);
        
        sessionStorage.setItem(this.state.data.api_cid + px, JSON.stringify(data.data.content));

        this.setState({
            goodsList: data.data.content,
            isshow: false
        })


    }

    headelToDetails(data) {
        // console.log(data)
        // sessionStorage.setItem('goodsData',JSON.stringify(data));
        // sessionStorage.setItem('imgAry',JSON.stringify(data.pic))
        // // http://cmsjapi.dataoke.com/api/goods/get-similar-goods?id=21319914&categoryId=50009558&entityId=3&userId=427272  id category_id
        // // sessionStorage.setItem('goodsData', JSON.stringify(data));
        // this.props.history.push({ pathname: `/goodsdetails/${data.category_id}/${data.id}`, query: data })

    }

    headelGoback() {
        // console.log(this.props);
        this.props.history.push('/classify')
    }

    async componentWillMount() {
        let goodsPage = JSON.parse(sessionStorage.getItem('goodsPage'));

        const { data } = await Axios.get(`http://localhost:1904/page/m/index.php?r=class%2Fcyajaxsub&page=1&cid=${goodsPage.api_cid}&px=t&cac_id=`);

        this.setState({
            goodsList: data.data.content,
            data: goodsPage,
            isshow: false
        })
    }


    render() {
        return (
            <div className="goods_page">
                <div className="goodslist">
                    <header style={{
                        width: '100vw',
                        boxSizing: 'border-box',
                        padding: '8px 10px',
                        height: '44px',
                        zIndex: 110,
                        background: "linear-gradient(to right, #FBAA58 0%, #FA4EBE 100%)",
                        position: 'fixed',
                        top: 0
                    }}>
                        <span className="goHome" style={{
                            left: '10px',
                            position: 'absolute',
                            background: "url('../../imgs/bg.png') -32px 0px no-repeat",
                            width: '28px',
                            height: '28px',
                            backgroundSize: '287px 800px'
                        }} onClick={this.headelGoback}>返回</span>

                        <a className="header_more" style={{ color: 'white', fontSize: '16px', fontWeight: "bolder" }}>
                            {this.state.data.name}
                        </a>
                    </header>
                    <ul style={{ overflow: 'hidden', position: 'fixed', top: '44px', background: 'white' }}>
                        {
                            this.state.navList.map((item, index) => {
                                return <NavLink key={item.name} to={this.props.match.url + item.path} onClick={this.healderLink.bind(this, index)} style={{
                                    width: '25%', float: "left", textAlign: "center", height: '45px', listStyle: 'none',
                                    lineHeight: '45px', color: '#333'
                                }} activeStyle={{ color: '#fe4a65', borderBottom: '1px solid #fe4a65' }}>{item.name}</NavLink>
                            })
                        }
                    </ul>
                    <div style={{ display: this.state.isshow ? 'block' : 'none', textAlign: 'center', lineHeight: '300px' }}>正在加载中...</div>
                    <div style={{ paddingTop: '85px', display: !this.state.isshow ? 'block' : 'none' }}>
                        {
                            this.state.goodsList.map((item, index) => {
                                return (
                                    <div className="glist" onClick={this.headelToDetails.bind(this, item)} key={index}>
                                        <div className="img_box">
                                            <img src={item.pic} />
                                        </div>
                                        <ul className="teset_box">
                                            <li><h4>{item.d_title}</h4></li>
                                            <li className="list_2" style={{ textAlign: "left" }}>
                                                <span>天猫价 ¥{item.yuanjia}</span>
                                                <strong>已经售<i>{item.xiaoliang > 10000 ? ((item.xiaoliang / 10000).toFixed(2) + '万') : item.xiaoliang}</i>件</strong>
                                            </li>
                                            <li className="list_3" style={{ textAlign: "left" }}>
                                                <span>劵后价 $<i>{item.jiage}</i></span>
                                                <img></img>
                                            </li>
                                            <p></p>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <Spin indicator={antIcon} /> */}
                </div>
            </div>
        )
    }
}

export default GoodsPage;