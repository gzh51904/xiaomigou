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
        
        const { data } = await axios.get('http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id?entityId=3&modelId=1&source=3&userId=427272');
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