import React from 'react'
import './GoodsDetails.scss'
import axios from 'axios'
import Header from 'antd/lib/calendar/Header';
import { Flex } from 'antd-mobile';
// import { Icon, Grid } from 'antd-mobile';
class GoodsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            imgPath: [], //商品图
            TJList: [],  //推荐商品
            LSList: {},  //类似商品
            SJList: {}   //商家信息
        }

        this.headelToDetails =  this.headelToDetails.bind(this);
    }


    async componentDidMount() {

        //动态路由参数
        console.log(this.props.match.params)
        console.log(this.props.location.query);
        window.scrollTo({
            left: 0,
            top: 0,
        });

        const { data } = await axios.get(`http://localhost:1904/api/goods/get-goods-detail-img?goodsId=${this.props.match.params.goodsid}&entityId=3&userId=427272`);

        let imgUrl = JSON.parse(data.data);
        // console.log(imgUrl);


        const tuijian = await axios.get(`http://localhost:1904/api/goods/get-recommend-goods?id=${this.props.match.params.id}&entityId=3&userId=427272`);
        // console.log(tuijian.data.data)

        const shangjia = await axios.get(`http://localhost:1904/api/goods/get-goods-shop-info?goodsId=${this.props.match.params.goodsid}&entityId=3&userId=427272`);
        console.log(shangjia.data.data)

        const leisi = await axios.get(`http://localhost:1904/api/goods/get-similar-goods?id=${this.props.match.params.id}&categoryId=50012478&entityId=3&userId=427272`);
        // console.log(leisi.data.data);

        this.setState({
            data: this.props.location.query,
            imgPath: imgUrl,
            TJList: tuijian.data.data,
            SJList: shangjia.data.data,
            LSList: leisi.data.data
        })
    }


    headelToDetails(item){
         console.log(item);
         console.log(this.props);
        //  this.props.history.push({ pathname: `/goodsdetails/${data.goodsId}/${data.id}`, query: item })
         this.props.history.push({
             pathname:`/goodsdetails/${item.goodsId}/${item.id}`,
             query:item
         });
    }


    render() {
        return (
            <div style={{ width: '100%', overflow: 'header' }}>
                <div className="swiper">
                    {/* <img src={this.state.data.pic} /> */}
                </div>
                {/* <div className="goods_quan row-s">

                    <a className="row getGoodsLink" data-dtk-satc="{gid:'21251497',desc:'立即领券-大',name:'DetailGoodsEvent'}" ui-open-taobao="" data-money="10" data-id="21251497">
                        <div className="col-12-8 money">
                            <p><span>{this.state.data.quanJine}</span> 元优惠券</p>
                            使用期限:{this.state.data.createTime}                    </div>
                        <div className="col-12-4 name">
                            <span>立即领券</span>
                        </div>
                    </a>

                    <img src="https://cmsstatic.dataoke.com//wap_new/main/images/goods_quan.png?v=201907171617" alt="" />
                </div> */}
                {/* <div className="goods_desc col-mar col-888">
                    {this.state.data.title}
                 </div> */}

                <div id="goodsShopShow">
                    <div className="goods_shop">
                        <div className="info col-mar">
                            <img ui-lazyload="" src={this.state.SJList.shopLogo} alt="" isload="true" style={{ background: 'rgb(245, 245, 245)' }} />
                            <div className="text">
                                <h3>{this.state.SJList.shopName}</h3>
                                <p className="col-main">
                                    <i className="iconfont icon-detail_tmall "></i>
                                </p>
                                <p className="new">店铺所有优惠 >
                                </p>
                            </div>
                        </div>
                        <div className="tab row-s">
                            <div className="col-12-4">宝贝描述:{this.state.SJList.dsrScore}
                                <span className="iconfont  icon-point_high lv_g">

                                </span>
                            </div>
                            <div className="col-12-4">卖家服务:{this.state.SJList.serviceScore}
                                <span className="iconfont icon-point_high lv_g">

                                </span>
                            </div>
                            <div className="col-12-4">物流服务:{this.state.SJList.shipScore}
                                <span className="iconfont icon-point_high lv_g">
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="hr">
                    </div>
                </div>
                <div className="goods_reco">
                    <h3>相似推荐</h3>
                    <div className="goods_reco_swiper">
                        <div className="swiper-container swiper-container-horizontal">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide active swiper-slide-prev">
                                    <div className="swiper-cent">
                                        <img src="https://img.alicdn.com/imgextra/i3/1772727399/O1CN01IukZxg24Wn1JZ8Mod_!!1772727399.jpg_310x310.jpg_.webp" alt="" />
                                        <p className="name">森草堂婴儿洗护二合一沐浴乳洗发水</p>
                                        <p className="quan"><span>20元券</span></p>
                                        <p className="money col-money">券后价  <span>¥9.9</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imglist">
                    <h3>宝贝详情</h3>
                    {
                        this.state.imgPath.map(item => {
                            return <img src={item.img} key={item.img} alt="" isload="true" style={{ background: 'rgb(245, 245, 245)', display: "block" }} />
                        })
                    }
                </div>
                <div id="anchors_ant">
                    <h3>今日热销</h3>
                    <div className="g_cent">
                        {
                            this.state.TJList.map((item, index) => {
                                return (
                                    <div className="cent" key={index} onClick={this.headelToDetails.bind(this,item)}>
                                        <img className="lazy" src={item.pic} alt="" isload="true" style={{ background: 'rgb(245, 245, 245)', display: "block" }} />
                                        <div className="mar">
                                            <h3 className="bt tianmao">
                                                {item.dtitle}
                                            </h3>
                                            <div className="row-s num" style={{ opacity: 1 }}>        <div className="col-12-6">
                                                天猫价 ¥{item.yuanjia}
                                            </div>
                                                <div className="col-12-6 text-right">已售<span className="col-red" style={{ color: 'red' }}>{(item.xiaoliang / 10000).toFixed(2)}万</span>件
                                            </div>
                                            </div>
                                            <div className="row-s but">
                                                <div className="col-12-6 money" style={{ color: 'red', fontSize: '14px' }}>
                                                    <span style={{ fontSize: '12px' }}>券后价&nbsp;¥</span>{(item.yuanjia - item.quanJine).toFixed(2)}
                                                </div>
                                                <div className="col-12-6 ">
                                                    <span className="quan" style={{ color: 'red' }}><i>{item.quanJine}元券</i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )   
                            })
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default GoodsDetails