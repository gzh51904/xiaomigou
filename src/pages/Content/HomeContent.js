import React from 'react'
import ConTab from '../../components/ConTab/ConTab'
import Banner from '../../components/Banner/Banner'
import HomeNav from '../../components/Home/HomeNav'
import HomeExperss from '../../components/Home/HomeExpress '
import HomeList from '../../components/Home/HomeList'

import HomeVoucher from '../../components/Home/HomeVoucher'
import { Flex } from 'antd-mobile';
// import axios from 'axios'

class HomeComment extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div style={{width:'100%'}} className="homecomment">
                {/* <ConTab /> */}
                {/* <Banner /> */}
                <HomeNav />
                {/* <HomeExperss /> */}
                <HomeList />
                {/* <HomeVoucher /> */}
            </div>
        )
    }
}

export default HomeComment