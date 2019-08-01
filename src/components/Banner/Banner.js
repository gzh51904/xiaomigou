import React from 'react'
import { Carousel } from 'antd';
import axios from 'axios'

class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            imgAry: [],
        }
    }


    async componentWillMount() {
        
        // http://localhost:1904/api/category/index/lingquan-live?pageSize=20&pageId=${this.state.pageId}&entityId=3&userId=427272

        const { data } = await axios.get('http://localhost:1904/api/category/product/model-detail-by-model-id?entityId=3&modelId=1&source=3&userId=427272');
        // console.log(data.data.config)
        this.setState({
            imgAry: data.data.config,
        })
    }

    render() {
        return (
            
            <Carousel autoplay >
                {
                    this.state.imgAry.map(item => {
                        return (
                            <div key={item.pic} >
                                <img src={item.pic} style={{ height: '160px', width: "100%" }} />
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }
}


export default Banner