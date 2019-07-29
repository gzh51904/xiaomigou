import React from 'react'
import './HomeList.css'
import Axios from 'axios';
import Banner from './HomeBanner'

class HomeList extends React.Component {
    constructor() {
        super();
        this.state = {
            newdata_one: [],
            newdata_two: [],
            newdata_three: [],
            imgList_one: [],
            imgList_two: '',
            imgList_three: '',
            timeString: '',
            newdata: ''
        }

        // let startTime = new Date(); // 开始时间
        // let endTime = new Date(1563944400000); // 结束时间
        // console.log("毫秒数:", endTime - startTime); // 毫秒数
        // console.log('秒数:', Math.floor((endTime - startTime) / 1000)); // 秒数
        // console.log('分钟:', Math.floor((endTime - startTime) / 1000 / 60)); // 分钟
        // console.log('小时:', Math.floor((endTime - startTime) / 1000 / 60 / 60)); // 小时
        // console.log('天数:', Math.floor((endTime - startTime) / 1000 / 60 / 60 / 24)); // 天数
    }

    async componentWillMount() {
        const { data } = await Axios.get('http://localhost:1904/api/category/product/model-detail-by-model-id?entityId=3&modelId=17&source=3&userId=427272');
<<<<<<< HEAD
=======

        // console.log(data.data.config[0].imgList)
>>>>>>> 007e19f13a7abc9a55dd2afe86099c7a137bc560

        let time = parseInt((data.data.config[1].downTime.time - new Date()) / 1000);
        this.setState({
            newdata_one: data.data.config[0],
            imgList_one: data.data.config[0].imgList,
            newdata_two: data.data.config[1],
            timeString: data.data.config[1].downTime.field,
            newdata: time,
            imgList_two: data.data.config[1].imgList[0],
            newdata_three: data.data.config[2],
            imgList_three: data.data.config[2].imgList[0]
        })
    }


    // 倒计时
    time = () => {

        // 清除可能存在的定时器
        clearInterval(this.timer)
        // 创建（重新赋值）定时器

        this.timer = setInterval(() => {
            // 当前时间回显-1
            this.setState({
                time: this.state.newdata - 1
            }, () => {
                // console.log(this.state.newdata);
                // 判断修改后时间是否小于1达到最小时间
                if (this.state.newdata <= 0) {
                    // 清除定时器
                    clearInterval(this.timer)
                    // 结束定时器循环
                    return
                }
                // 循环自调用
                this.time()
            })
        }, 1000)
    }

    render() {
        return (
            <div className="home_list">
                <div className="box_fl">
                    <h3>{this.state.newdata_one.name}</h3>
                    <p>{this.state.newdata_one.dname}</p>
                    <div className="banner">
                        <Banner one={this.state.imgList_one} />
                        {/* {console.log(this.state.imgList_one)} */}
                    </div>
                </div>
                <div className="box_fr">
                    <div className="box_fr_top">
                        <h3>{this.state.newdata_two.name}</h3>
                        <p><span>{this.state.timeString}</span>
                            {this.state.newdata}
                        </p>
                        <img src={this.state.imgList_two} />
                    </div>
                    <div className="box_fr_bot">
                        <h3>{this.state.newdata_three.name}</h3>
                        <p>{this.state.newdata_three.dname}</p>
                        <img src={this.state.imgList_three} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeList