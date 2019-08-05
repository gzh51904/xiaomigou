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
            isLgn : false,
            y_height:-49,
            y_left:-42
        }
    };
    async componentWillMount(){
        let {data} = await axios.get('http://localhost:19041/verify')
        let {code,msg} = data;
        if(code==401 && msg=="unauthorized"){
            console.log("buchenggong",this);
            
           this.setState({
               isLgn:false
           })
        }else if(code==1000){
            this.setState({
                isLgn:true
            })
        }
    }
    edit = (val)=>{
        let y_height = 0;
        let y_left = 0;
        if(val == "完成"){
            y_height= -49;
            y_left = -43;
        }else{
            y_height= 0;
            y_left = 0;
        }
        this.setState({
            y_height,
            y_left
        })
    }
    render() {
        console.log(this.state.isLgn);
        
        return (
            <div style={{overflow:"hidden"}}>
                <CollectHeader title="我的收藏" name={this.edit}/>
                {/* <Switch>
                    <Route path={url + "/w"} component={w}/>
                    <Route/>
                </Switch> */}
                
              {this.state.isLgn ? <Y height={this.state.y_height} left = {this.state.y_left}/> : <W/>}
                <Tabbar/>
            </div>
        )
    }
}

export default Collect