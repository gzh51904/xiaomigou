import React, { Component } from 'react'
import axios from 'axios'


import FengQiang from './components/fengqiang'
import TouShi from './components/toushi'
import BiJiBen from './components/bijiben'
import NeiKu from './components/neiku'
class CommodityList extends Component {
    constructor() {
        super();
        this.state = {
            fengqiang: [],
            toushi:[],
            bijiben:[],
            neiku:[]
        }
    }
    
    async componentWillMount() {
        let { data } = await axios.get('http://localhost:1904/aa/index.php?r=nine/listajax&n_id=58&page=1&cac_id=');
        console.log(data);
        
        let fengqiang = data.data.data.map(item => item)
        let  data2= await axios.get('http://localhost:1904/aa/index.php?r=nine/listajax&page=1&storey=1&n_id=15569&cac_id=');
        let toushi = data2.data.data.data.map(item=>item);
        let data3 = await axios.get('http://localhost:1904/aa/index.php?r=nine/listajax&page=1&storey=1&n_id=17292&cac_id=');
        let bijiben = data3.data.data.data.map(item=>item);
        let data4 = await axios.get('http://localhost:1904/aa/index.php?r=nine/listajax&page=1&storey=1&n_id=15169&cac_id=');
        let neiku = data4.data.data.data.map(item=>item);
        this.setState({
            fengqiang,
            toushi,
            bijiben,
            neiku
        })
    }
    render() {
        // let { fengqiang } = this.state;
        // console.log(datalist)
        return <div className="commodity_list">
            <FengQiang data={this.state.fengqiang} title="1"></FengQiang>
            <TouShi data={this.state.toushi} title="1"></TouShi>
            <BiJiBen data={this.state.bijiben}title="1"></BiJiBen>
            <NeiKu data={this.state.neiku} title="1"></NeiKu>
        </div>
        
    }
}

export default CommodityList