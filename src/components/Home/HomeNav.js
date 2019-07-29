import React from 'react'
import axios from 'axios'
import './HomeNav.css'
class HomeNav extends React.Component {
    constructor() {
        super();
        this.state = {
            newdata: []
        }
    }

    async componentWillMount() {
        const { data } = await axios.get('http://localhost:1904/api/category/product/model-detail-by-model-id?entityId=3&modelId=2&source=3&userId=427272');
        // console.log(data.data.config.data)
        this.setState({
            newdata: data.data.config.data
        })
    }


    render() {
        return (
            <ul className="home_nav">
                {
                    this.state.newdata.map(item => {
                        return (
                            <li key={item.name}>
                                <img src={item.address} />
                                <span>{item.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default HomeNav