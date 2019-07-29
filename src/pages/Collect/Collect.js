import React from 'react'
import CollectHeader from '../../components/Header/CollectHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
import axios from 'axios'

import {Switch,Route} from 'react-router-dom'

import W from './components/w.js'

import Y from './components/y.js'

class Collect extends React.Component {
    constructor(){
        super();
        this.state = {
            isLgn : false
        }
    };
   async componentWillMount(){
       console.log("aaa");
       
        let {data} = await axios.get('http://localhost:1904/verify')
        console.log(this.props,data);
        let {code,msg} = data;
        if(code==401 && msg=="unauthorized"){
            // this.props.history.push({
            //     pathname:this.props.match.url + "/w"
            // })
            this.isLgn = false
        }
    }
    render() {
        let {url} = this.props.match
        return (
            <div style={{overflow:"hidden"}}>
                <CollectHeader/>
                {/* <Switch>
                    <Route path={url + "/w"} component={w}/>
                    <Route/>
                </Switch> */}
                {
                    this.state.isLgn ? <Y/> : <W/>
                }
                <Tabbar/>
            </div>
        )
    }
}

export default Collect