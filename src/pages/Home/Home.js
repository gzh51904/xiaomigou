import React from 'react'
import Header from '../../components/Header/HomeHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
import HomeComment from '../Content/HomeContent'

import './Home.scss'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            imgUrlAry: [],
        }
    }

    // async componentWillMount() {
    //     const { data } = await axios.get('http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id?entityId=3&modelId=1&source=3&userId=427272');

    //     console.log(data.data.config);

    //     this.setState({
    //         imgUrlAry: data.data.config
    //     })
    // }

    render() {
        return (
            <div className="Home">
                <Header />
                <HomeComment />
                <Tabbar />
            </div>
        )
    }
}

export default Home