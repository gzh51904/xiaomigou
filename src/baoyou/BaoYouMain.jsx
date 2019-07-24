import React,{Component} from 'react'

import { Row, Col,Button } from 'antd';

class BaoYouMain extends Component{
    constructor(){
        super();
        this.state = {
        navs:[
            {
                title:'9块9每日精选',
                msg:'十元封顶',
                img:'https://img.alicdn.com/imgextra/i1/2053469401/TB24BorFamWBuNjy1XaXXXCbXXa-2053469401.jpg',
                path:'/nine_nine',
            }, {
                title:'29.9专区',
                msg:'半价抢不停',
                img:'https://img.alicdn.com/imgextra/i4/2053469401/O1CN012JJhs4JIkJiFavo-2053469401.jpg',
                path:'/twenty_nine',
            }, {
                title:'3.9元区',
                msg:'居家小件',
                img:'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01r7M5Zr2JJhxbOE8fo_!!2053469401.png',
                path:'/three_nine',
            }, {
                title:'5.9元区',
                msg:'文娱用品',
                img:'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01pm4tz22JJhxagW7ge_!!2053469401.png',
                path:'/nine_nine',
            }, {
                title:'7.9元区',
                msg:'母婴系列',
                img:'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01he5hTP2JJhxcLWUas_!!2053469401.png',
                path:'/nine_nine',
            },{
                title:'新品专区',
                msg:'美食专场',
                img:'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01JZti9I2JJhxaFAljJ_!!2053469401.png',
                path:'/nine_nine',
            }
        ]
    }
}
    render(){

    return <main>
        <nav>  
            <div className="navLeft">
                <Row>
                    <Col span={12}>
                        <h3></h3>
                        <span></span>
                        <img src="" alt=""/>
                    </Col>
                    <Col span={12}></Col>
                </Row>
            </div>  
            <div className="navRight">
                <Row>
                <Col span={6}>3</Col>
                <Col span={6}>4</Col>
                <Col span={6}>5</Col>
                <Col span={6}>6</Col>
                </Row>
            </div>  
        </nav>
    </main>
}
}

export default BaoYouMain