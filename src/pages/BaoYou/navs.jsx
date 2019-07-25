import React, { Component } from 'react'

import { Row, Col } from 'antd';

class Navs extends Component {
    constructor() {
        super()
        this.state = {
            navs: [
                {
                    title: '9块9每日精选',
                    msg: '十元封顶',
                    img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB24BorFamWBuNjy1XaXXXCbXXa-2053469401.jpg',
                    path: '/nine_nine',
                    num: 1,
                    color: '#FC4073'
                }, {
                    title: '29.9专区',
                    msg: '半价抢不停',
                    img: 'https://img.alicdn.com/imgextra/i4/2053469401/O1CN012JJhs4JIkJiFavo-2053469401.jpg',
                    path: '/twenty_nine',
                    num: 2,
                    color: '#FC4302'
                }, {
                    title: '3.9元区',
                    msg: '居家小件',
                    img: 'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01r7M5Zr2JJhxbOE8fo_!!2053469401.png',
                    path: '/three_nine',
                    num: 3,
                    color: '#1889FF'
                }, {
                    title: '5.9元区',
                    msg: '文娱用品',
                    img: 'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01pm4tz22JJhxagW7ge_!!2053469401.png',
                    path: '/nine_nine',
                    num: 4,
                    color: '#7250FD'
                }, {
                    title: '7.9元区',
                    msg: '母婴系列',
                    img: 'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01he5hTP2JJhxcLWUas_!!2053469401.png',
                    path: '/nine_nine',
                    num: 5,
                    color: '#07C6B3'
                }, {
                    title: '新品专区',
                    msg: '美食专场',
                    img: 'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01JZti9I2JJhxaFAljJ_!!2053469401.png',
                    path: '/nine_nine',
                    num: 6,
                    color: '#FF3E90'
                }
            ],
        }

    }
    render() {

        let { navs } = this.state
        //左边的渲染数据
        let flNavs = navs.filter(item => item.num <= 2);
        // 右边的渲染数据
        let frNavs = navs.filter(item => item.num > 2);
        return <nav>

            <div className="navLeft" >
                <Row>
                    {flNavs.map(item => (
                        <Col span={12} key={item.num}>
                            <h3 style={{ color: item.color }}>{item.title}</h3>
                            <span>{item.msg}</span>
                            <img src={item.img} alt="" />
                        </Col>
                    ))}

                </Row>
            </div>
            <div className="navRight">
                <Row>
                    {frNavs.map(item => (
                        <Col span={6} key={item.num}>
                            <h3 style={{ color: item.color }}>{item.title}</h3>
                            <span>{item.msg}</span>
                            <img src={item.img} alt="" />
                        </Col>
                    ))}
                </Row>
            </div>
        </nav>

    }
}

export default Navs