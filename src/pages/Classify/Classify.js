import React from 'react'
import ClassifyHeader from '../../components/Header/ClassifyHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
import aios from 'axios'
import './Classify.scss'
import { Tabs, Select } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;
const { Option } = Select;


class Classify extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.headelToPage = this.headelToPage.bind(this);
    }

    async componentDidMount() {
        const { data } = await axios.get('https://www.easy-mock.com/mock/5d1f2db0c87ced485ced1cde/example/fenlei');
        console.log(data.data.data)


        this.setState({
            data: data.data.data
        })
    }

    async headelToPage(item) {
        // console.log(item.api_cid);
       
        this.props.history.push('/goodspage/renqi');
        sessionStorage.setItem('goodsPage',JSON.stringify(item));
    }

    render() {
        return (
            <div className="classify">
                <ClassifyHeader />
                <div className="a"></div>
                <div className="cat_fr_box" >
                    <Tabs tabPosition={'left'} style={{ paddingLeft: 0 }}>
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <TabPane tab={item.name} key={index}>
                                        {
                                            item.floors.map(item => {
                                                return (
                                                    <div key={item.name}>
                                                        <h4>{item.name}</h4>
                                                        <ul className="main-cat1" >
                                                            {
                                                                item.list.map(item => {
                                                                    return (
                                                                        <li key={item.img} onClick={this.headelToPage.bind(this, item)}>
                                                                            <img src={item.img} />
                                                                            <h4>{item.name}</h4>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
                </div>
                <Tabbar />
            </div>
        )
    }
}

export default Classify
