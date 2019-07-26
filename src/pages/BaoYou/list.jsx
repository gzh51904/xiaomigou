import React, { Component } from 'react'
import Axios from 'axios';

class List extends Component {
    constructor() {
        super();
        this.state = {
            GoodList: [],
        }
    }
    async componentWillMount() {
        let { data } = await Axios.get('http://localhost:1904/index.php?r=nine/listajax&n_id=58&page=2&cac_id=cXVlcnlUaGVuRmV0Y2g7Njs5OTI0MTE4MDA6NldLYVpVNHVRVEstYmxiWkdueU9HZzs4MDYxOTY2ODQ6NFIxVmgxc2FTelNmNXN1SjlCVXFrZzsxMTk2Nzc2ODMwOjFJSGNjLV9lUTF5bzNTOFRMaEY2QVE7ODA2MTk2NjgzOjRSMVZoMXNhU3pTZjVzdUo5QlVxa2c7OTkyNDExODAyOjZXS2FaVTR1UVRLLWJsYlpHbnlPR2c7MTU2MDM3NDY0Nzp1aUxxcHNfRFJXNlVWb0JhbHlVOUF3OzA7')
        // console.log(data.data.data)
        let GoodList = data.data.data.map(item => item);
        console.log(GoodList)
        this.setState({
            GoodList
        })
    }
    render() {
        let {GoodList} = this.state
        return <div className="goodlist">
            <h3>精选推荐</h3>
            <ul className="list">
                {GoodList.map((item, index) => (
                    <li>
                        <img src={item.pic} alt="" />
                        <p>{item.title}</p>
                    </li>
                ))}


            </ul>
        </div>
    }
}
export default List