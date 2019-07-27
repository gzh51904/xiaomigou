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
        let { data } = await Axios.get('http://localhost:1904/index.php?r=nine/listajax&n_id=58&page=3&cac_id=cXVlcnlUaGVuRmV0Y2g7NjsxMDI4MzQ1MTE0OjZXS2FaVTR1UVRLLWJsYlpHbnlPR2c7ODQyMTMxMzEyOjRSMVZoMXNhU3pTZjVzdUo5QlVxa2c7MTIxNDgwNDkzOToxSUhjYy1fZVExeW8zUzhUTGhGNkFROzg0MjEzMTMxMzo0UjFWaDFzYVN6U2Y1c3VKOUJVcWtnOzEwMjgzNDUxMDg6NldLYVpVNHVRVEstYmxiWkdueU9HZzsxNTc4NDAyMDQ4OnVpTHFwc19EUlc2VVZvQmFseVU5QXc7MDs%3D')
        // console.log(data.data.data)  
        let GoodList = data.data.data.map(item => item);
        console.log(GoodList)
        this.setState({
            GoodList
        })
    }
    render() {
        let {GoodList} = this.state
        console.log(GoodList)
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