import React from 'react'
import axios from 'axios'
import Header from '../../components/Header/HomeHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
import HomeComment from '../Content/HomeContent'

import GoodsPage from '../../components/GoodsPage/GoodsPage'
import GoodList from '../../components/Goods/GoodsList'
import { connect } from 'react-redux'

import { add_info, revision_info, revision_goods_data, add_goods_data } from '../../store/InfoActios.js'
import './Home.css'

// import {  withRouter } from 'react-router-dom';
// import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            Ary: [],
            pageId: 1,
            codeType: true,
            top: ''
        }
        this.loadingData = this.loadingData.bind(this);
        this.bindScroll = this.bindScroll.bind(this);
        this.headelGoTo = this.headelGoTo.bind(this);
    }


    async loadingData() {

        const { data } = await axios.get(`http://localhost:1904/api/category/index/lingquan-live?pageSize=20&pageId=${this.state.pageId}&entityId=3&userId=427272`);

        this.setState({
            Ary: [...this.state.Ary, ...data.data.list]
        })
    }



    componentDidMount() {

        this.loadingData();

        //添加滚动监听
        window.addEventListener('scroll', this.bindScroll)
    }

    componentWillUnmount() {
        // 移除滚动监听
        window.removeEventListener('scroll', this.bindScroll);
    }


    bindScroll(event) {

        // 滚动的高度
        const scrollTop = event.srcElement.documentElement.scrollTop;

        // console.log(scrollTop);
        // 视窗高度
        const clientHeight = event.srcElement.documentElement.clientHeight;
        // console.log(clientHeight);

        // 页面高度
        const scrollHeight = event.srcElement.documentElement.scrollHeight;
        // console.log(scrollHeight);

        // 距离页面底部的高度
        const height = scrollHeight - scrollTop - clientHeight;
        // console.log(height);


        //但页面的高度小于500px ,加载更多
        if (height < 800) {
            this.setState({
                pageId: ++this.state.pageId
            })
            this.loadingData();
        }
    }

    /* 点击子组件路由传参 */
    headelGoTo(data) {
        // sessionStorage.setItem('id', data.id)
        this.props.history.push({ pathname: `/goodsdetails/${data.goodsId}/${data.id}`, query: data });
        let info = { goodsId: data.goodsId, data: data.id }

        let { addinfo, addgoodsdata, revisiongoodsdata, revisioninfo, state } = this.props;


         if (state.info != info) {
            revisioninfo(info);
        }

        if (state.goodsData != data) {
            revisiongoodsdata(data);
        }

        // console.log(this.props.state);

        sessionStorage.setItem('Info', JSON.stringify(info));
        sessionStorage.setItem('goodsData', JSON.stringify(data));
    }

    async componentWillMount() {

        /* 首页轮播图 */
        const { data } = await axios.get('http://localhost:1904/api/category/product/model-detail-by-model-id?entityId=3&modelId=1&source=3&userId=427272');

        this.setState({
            imgUrlAry: data.data.config
        })
    }


    render() {
        return (
            <div className="main" >
                <Header />
                <HomeComment />
                <div >
                    <p style={{ fontSize: '16px', color: 'black' }}>
                        <span style={{ display: 'inline-block', width: '5px', height: '12px', background: 'red', margin: '0 8px' }}></span>领劵直播</p>
                    {
                        this.state.Ary.map((item, index) => {
                            return <GoodList data={item} key={index} onClick={this.headelGoTo.bind(this, item)} />
                        })
                    }
                </div>
                <Tabbar />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state);
    return {
        state: state.InfoReducer
    }
}
/* 将添加,修改映射到props上 */
let mapDispathTopops = (dispatch, ownProps) => {
    // console.log(ownProps)
    return {
        addinfo(info) {
            dispatch(add_info(info));
        },
        revisioninfo(info) {
            dispatch(revision_info(info));
        },
        addgoodsdata(data) {
            dispatch(add_goods_data(data));
        },
        revisiongoodsdata(data) {
            dispatch(revision_goods_data(data));
        }
        // dispatch
    }
}

Home = connect(mapStateToProps, mapDispathTopops)(Home);

export default Home