import React from 'react'
import axios from 'axios'
import { Carousel, WingBlank } from 'antd-mobile';
import './HomeExpress.css'
class HomeExpress extends React.Component {
    constructor() {
        super();
        this.state = {
            newdata: []
        }
    }


    async componentWillMount() {
        const { data } = await axios.get('http://localhost:1904/api/category/product/model-detail-by-model-id?entityId=3&modelId=13&source=3&userId=427272')
        // console.log(data.data.config.list[0].name);

        this.setState({
            newdata: data.data.config.list
        })
    }


    render() {
        return (
            <div className="home_express">
                <img className="img" src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN012JJhrsTXsatcg9H-2053469401.gif" alt="" />
                <div className="goodslist">
                    <WingBlank>
                        <Carousel className="my-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite={true}
                        >
                            {
                                this.state.newdata.map(item => {
                                    return (
                                        <div className="v-item" key={item.name}>{item.name}</div>
                                    )
                                })
                            }
                        </Carousel>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default HomeExpress
