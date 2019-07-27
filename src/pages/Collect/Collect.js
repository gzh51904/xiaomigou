import React from 'react'
import CollectHeader from '../../components/Header/CollectHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
import axios from 'axios'

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
        let {data} = await axios.get('http://localhost:1904/verify')
        let {code,msg} = data;
        if(code==401 && msg=="unauthorized"){
            this.isLgn = false
        }else if(code==1000){
            this.isLgn = true
        }
    }
    render() {
        
        return (
            <div style={{overflow:"hidden"}}>
                <CollectHeader/>
                {/* <Switch>
                    <Route path={url + "/w"} component={w}/>
                    <Route/>
                </Switch> */}
                {
                   this.state.isLgn=true ? <Y/> : <W/>
                }
                <Tabbar/>
            </div>
        )
    }
}

export default Collect