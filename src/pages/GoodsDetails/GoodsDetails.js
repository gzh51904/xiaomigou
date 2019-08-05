import React from 'react'
import './GoodsDetails.scss'
import axios from 'axios'
import store from '../../store/index.js'
import Header from 'antd/lib/calendar/Header';
import { Flex } from 'antd-mobile';
// import { Icon, Grid } from 'antd-mobile';
import GoodsPay from '../../components/Goods/Goods_pay'
import { connect } from 'react-redux'
import ActionCreator, { createAdd2careAction } from '../../store/cartActions.js'

/* 此方法将 store->cartActions文件中 的方法导出 */
import { bindActionCreators } from 'redux';


class GoodsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollTop2: 0,
            scrollTop3: 0,
            index: 0,
            data: {},
            h_op: 0,
            imgPath: [], //商品图
            TJList: [],  //推荐商品
            LSList: {},  //类似商品
            SJList: {}   //商家信息
        }
        this.headelToDetails = this.headelToDetails.bind(this);
        this.headerAddCare = this.headerAddCare.bind(this);
        this.bindScroll = this.bindScroll.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.MianscrollHeight = this.MianscrollHeight.bind(this);
        this.headelGoBack = this.headelGoBack.bind(this)
    }


    componentWillMount() {

        this.setState({
            data: JSON.parse(sessionStorage.getItem('goodsData'))
        })
    }


    componentDidMount() {

        this.refreshData();
        window.addEventListener('scroll', this.bindScroll)

    }


    MianscrollHeight(index) {
        console.log(index);
        // let offsetTop = 0;
        // if (index == 1) {
        //     offsetTop = this.state.scrollTop2;
        // } else if (offsetTop == 2) {
        //     offsetTop = this.state.scrollTop3;
        // } else {
        //     offsetTop = 0;
        // }
        // console.log(offsetTop);
        // window.scrollTo({
        //     left: 0,
        //     top: offsetTop,
        // });
    }

    bindScroll(event) {
        const scrollTop = event.srcElement.documentElement.scrollTop;
        let heder_opacity = (scrollTop / 50) > 1 ? 1 : (scrollTop / 50);
        let top = this.refs.imgcomRef.offsetTop;
        let anchors_ant_top = this.refs.anchors_ant.offsetTop - 5;

        this.setState({
            scrollTop2: top,
            scrollTop3: anchors_ant_top,
            h_op: heder_opacity,
            index: scrollTop >= anchors_ant_top ? 2 : (scrollTop >= top ? 1 : 0)
        })

    }

    async refreshData() {

        console.log(this.props);
        const tuijian = await axios.get(`http://localhost:1904/api/goods/get-recommend-goods?id=${this.props.match.params.id}&entityId=3&userId=427272`);
        // console.log(tuijian.data.data)

        const shangjia = await axios.get(`http://localhost:1904/api/goods/get-goods-shop-info?goodsId=${this.props.match.params.goodsid}&entityId=3&userId=427272`);
        // console.log(shangjia.data.data)


        let a = JSON.parse(sessionStorage.getItem('Info'));
        // console.log(a)
        let b = JSON.parse(sessionStorage.getItem('goodsData'));


        // const leisi = await axios.get(`http://localhost:1904/api/goods/get-similar-goods?id=${this.props.match.params.id}&categoryId=50012478&entityId=3&userId=427272`);
        // console.log(leisi);

        const { data } = await axios.get(`http://localhost:1904/api/goods/get-goods-detail-img?goodsId=${this.props.match.params.goodsid}&entityId=3&userId=427272`);
       console.log(this)
        let imgAry = JSON.parse(data.data);
        let imgUrl = JSON.stringify(imgAry);
        sessionStorage.setItem('imgUrl', imgUrl)

        this.setState({
            data: b,
            imgPath: imgAry,
            TJList: tuijian.data.data,
            SJList: shangjia.data.data,
            // LSList: leisi.data.data
        })

        window.scrollTo({
            left: 0,
            top: 0,
        });

    }

    headelGoBack() {
        // this.props.history.goBack();
        this.props.history.push('/home');
    }

    headerAddCare(item) {
       
        /* 
        1.  this.props.dispatch({ type: 'ADD_TO_CART', payload: item });
        2.  this.props.add2cart(item)
        */
       
        this.props.createAdd2careAction(item)
    }

    componentWillUnmount() {
        // 移除滚动监听
        window.removeEventListener('scroll', this.bindScroll);
    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.refreshData()
        this.setState({
            caseDetail: nextProps.caseDetail
        });
        setTimeout(this.changeHeight, 0);
    }


    headelToDetails(item) {

        this.props.history.push({ pathname: `/goodsdetails/${item.goodsId}/${item.id}`, query: item })

        let info = { goodsId: item.goodsId, data: item.id }
        sessionStorage.setItem('Info', JSON.stringify(info));
        sessionStorage.setItem('goodsData', JSON.stringify(item));
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }


    render() {
        return (
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <header className='details_header' style={{ background: 'white', position: 'fixed', top: '0px', opacity: this.state.h_op, zIndex: 98 }}>
                    <ul className='title'>
                        <li className='fl_li'></li>
                        <li style={{ borderBottom: (this.state.index == 0) ? '4px solid #FC3F78' : 'none' }} onClick={() => this.scrollToAnchor('swiper')}>商品</li>
                        <li style={{ borderBottom: (this.state.index == 1) ? '4px solid #FC3F78' : 'none' }} onClick={() => this.scrollToAnchor('imglist')}>详情</li>
                        <li style={{ borderBottom: (this.state.index == 2) ? '4px solid #FC3F78' : 'none' }} onClick={() => this.scrollToAnchor('anchors_ant')}>推荐</li>
                        <li>...</li>
                    </ul>
                </header>
                <div style={{ position: 'fixed', top: '5px', left: '20px', width: "40px", height: '40px', backgroundColor: `rgba(234, 234, 234,${1 - this.state.h_op})`, zIndex: 99, lineHeight: '40px', textAlign: "center", borderRadius: '50%' }} onClick={this.headelGoBack}>返回</div>
                <div className="swiper" id="swiper">
                    <img src={this.state.data.pic ? this.state.data.pic : ''} />
                </div>
                <div className="goods_quan row-s">

                    <a className="row getGoodsLink" data-dtk-satc="{gid:'21251497',desc:'立即领券-大',name:'DetailGoodsEvent'}" ui-open-taobao="" data-money="10" data-id="21251497">
                        <div className="col-12-8 money">
                            <p className="p1">
                                <span>{this.state.data.quanJine}</span>
                                元优惠券
                            </p>
                            <p className="p2">使用期限:{this.state.data.createTime}</p>
                        </div>
                        <div className="col-12-4 name">
                            立即领券
                        </div>
                    </a>

                    <img src="https://cmsstatic.dataoke.com//wap_new/main/images/goods_quan.png?v=201907171617" alt="" />
                </div>
                <div className="goods_desc col-mar col-888">
                    {this.state.data.title}
                </div>

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
                            <div className="col-12-4">宝贝描述:
                                <span className="iconfont  icon-point_high lv_g" style={{ color: 'red' }}>
                                    {this.state.SJList.dsrScore}
                                </span>
                            </div>
                            <div className="col-12-4">卖家服务:
                                <span className="iconfont icon-point_high lv_g" style={{ color: 'red' }}>
                                    {this.state.SJList.serviceScore}
                                </span>
                            </div>
                            <div className="col-12-4">物流服务:
                                <span className="iconfont icon-point_high lv_g" style={{ color: 'red' }}>
                                    {this.state.SJList.shipScore}
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="hr">
                    </div>
                </div>
                <div className="goods_reco" style={{ width: '100%' }}>
                    <h3>相似推荐</h3>
                    <div className="" style={{ width: '100%' }}>
                        <div style={{ overflow: 'auto' }}>
                            {
                                // this.state.LSList.map(item => {
                                //     console.log(item)
                                //     return (
                                //    
                                // <div className="goods_reco_swiper" style={{ display: "inline-block", width: '120px', margin: '10px' }}>
                                //     <div className="swiper-cent">
                                //         <img src="https://img.alicdn.com/imgextra/i3/1772727399/O1CN01IukZxg24Wn1JZ8Mod_!!1772727399.jpg_310x310.jpg_.webp" alt="" style={{ margin: 0 }} />
                                //         <p className="name">森草堂婴儿洗护二合一沐浴乳洗发水</p>
                                //         <p className="quan"><span>20元券</span></p>
                                //         <p className="money col-money">券后价  <span>¥9.9</span></p>
                                //     </div>
                                // </div>
                                //     )
                                // })
                            }
                        </div>
                    </div>
                </div>
                <div className="imglist" ref="imgcomRef" id="imglist">
                    <h3>宝贝详情</h3>
                    {
                        this.state.imgPath.map(item => {
                            return <img src={item.img} key={item.img} alt="" isload="true" style={{ background: 'rgb(245, 245, 245)', display: "block" }} />
                        })
                    }
                </div>
                <div id="anchors_ant" ref="anchors_ant">
                    <h3>今日热销</h3>
                    <div className="g_cent">
                        {
                            this.state.TJList.map((item, index) => {
                                return (
                                    <div className="cent" key={index} onClick={this.headelToDetails.bind(this, item)}>
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
                <GoodsPay onClick={this.headerAddCare.bind(this, this.state.data)}></GoodsPay>
            </div >
        )
    }
}

/* 
state reducer中的数据通过高阶组件父子传参(this.props获取) ownProps 原来的props  
mapStateToProps(将state映射到props)有两个参数
*/
let mapStateToProps = (store, ownProps) => {
    // console.log(store)
    return {
        /* 此处这里需要用到redux中的什么取什么 */
        InfoReducer:store.InfoReducer,
        CarReducer:store.CarReducer
    }
}
/* 
将方法映射到props中 此方法可以不写默认有dispath修改方法
*/
let mapDispathTopops = (dispatch, ownProps) => {
    //  return {
    //     /* 将方法写入此处 直接调用 */
    //     /* 
    //     将操作方法写入至 store->cartActions文件中
    //      add2cart(data) {
    //          dispatch({ type: 'ADD_TO_CART', payload: data })
    //      }
    //     */
    //     add2cart(data) {
    //         dispatch(createAdd2careAction(data))
    //     }
    // } 


    // return {
    //     addAction(goods){
    //         dispatch(addAction(goods))
    //     },
    //     removeAction(id){
    //         dispatch(removeAction(id))
    //     },
    //     changeQtyAction({id,qty}){
    //         dispatch(changeQtyAction({id,qty}))
    //     }
    // }

    // 等效于上面代码
    /* 
    将ActionCreator默认导出的方法放入bindActionCreators方法中,就可以自己了通过this.props获取到所有的操作方法,省去一个引用出来
    dispatch是操作redux数据的唯一方法
    */
    // return bindActionCreators(ActionCreator, dispatch)

    return {
        /* 此处如需扩展其他方法 需扩展bindActionCreators */
        ...bindActionCreators(ActionCreator,dispatch),
        dispatch
    }

}

GoodsDetails = connect(mapStateToProps, mapDispathTopops)(GoodsDetails)

export default GoodsDetails