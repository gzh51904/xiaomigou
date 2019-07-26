import React from 'react'
import ClassifyHeader from '../../components/Header/ClassifyHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
import aios from 'axios'
import { Tabs, Select } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;
const { Option } = Select;


class Classify extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    async componentDidMount() {
        const { data } = await axios.get('http://m.hlxns.com/m/index.php?r=class/category&type=3');
        console.log(data)
    }

    render() {
        return (
            <div>
                <ClassifyHeader />
                <div>
                    <Tabs tabPosition={'left'}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab 1
                         </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </div>
                <Tabbar />
            </div>
        )
    }
}

export default Classify
