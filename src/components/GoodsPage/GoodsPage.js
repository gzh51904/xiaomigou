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
                name: this.isprice ? '价格(高)' : '价格(低)',
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
            // if (this.state.isprice) {
            //     px = 'price_h';
            //     this.setState({
            //         isprice:false
            //     })
            // } else {
            //     px = 'price';
            //     this.setState({
            //         isprice:true
            //     })
            // }
        }
        // console.log(this.state.data.api_cid)
        // http://m.hlxns.com/m/index.php?r=class%2Fcyajaxsub&page=1&cid=20&px=t&cac_id=
        const { data } = await Axios.get(`http://localhost:1904/page/m/index.php?r=class%2Fcyajaxsub&page=1&cid=${this.state.data.api_cid}&px=${px}&cac_id=`)
        this.setState({
            goodsList: data.data.content
        })
    }

    headelToDetails(data) {
        // http://cmsjapi.dataoke.com/api/goods/get-similar-goods?id=21319914&categoryId=50009558&entityId=3&userId=427272  id category_id
        console.log(data);
        // this.props.history.push({ pathname: `/goodsdetails/${data.category_id}/${data.id}`, query: data })
    }

    headelGoback() {
        console.log(this.props);
        this.props.history.goBack();
    }

    async componentWillMount() {
        let goodsPage = JSON.parse(sessionStorage.getItem('goodsPage'));

        const { data } = await Axios.get(`http://localhost:1904/page/m/index.php?r=class%2Fcyajaxsub&page=1&cid=${goodsPage.api_cid}&px=t&cac_id=`);


        this.setState({
            goodsList: data.data.content,
            data: goodsPage
        })
    }



    render() {
        console.log(this.state.goodsList[0])
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
                        <span href="javascript:void(0)" className="goHome" style={{
                            left: '10px',
                            position: 'absolute',
                            background: "url('../../imgs/bg.png') -32px 0px no-repeat",
                            width: '28px',
                            height: '28px',
                            backgroundSize: '287px 800px'
                        }} onClick={this.headelGoback}>返回</span>

                        <a href="javascript:void(0)" className="header_more">
                        </a>
                    </header>
                    <ul style={{ overflow: 'hidden' ,marginTop:'50px'}}>
                        {
                            this.state.navList.map((item, index) => {
                                return <NavLink key={item.name} to={this.props.match.url + item.path} onClick={this.healderLink.bind(this, index)} style={{
                                    width: '25%', float: "left", textAlign: "center", height: '45px', listStyle: 'none',
                                    lineHeight: '45px', color: '#333'
                                }} activeStyle={{ color: '#fe4a65', borderBottom: '1px solid #fe4a65' }}>{item.name}</NavLink>
                            })
                        }
                    </ul>

                    {
                        this.state.goodsList.map((item, index) => {
                            return (
                                <div className="glist" onClick={this.headelToDetails.bind(this, item)} key={index}>

                                    <div className="img_box">
                                        <img src={item.pic} />
                                    </div>
                                    <ul className="teset_box">
                                        <li><h3>{item.dtitle}</h3></li>
                                        <li className="list_2">
                                            <span>天猫价 ¥{item.yuanjia}</span>
                                            <strong>已经售<i>{(item.xiaoliang / 10000).toFixed(2) + '万'}</i>件</strong>
                                        </li>
                                        <li className="list_3">
                                            <span>劵后价 $<i>{item.quanJine}</i></span>
                                            <img></img>
                                        </li>
                                        <p></p>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GoodsPage;