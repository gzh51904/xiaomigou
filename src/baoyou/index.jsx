import React,{Component} from 'react'

import BaoYouHeader from './BaoYouHerder'
import BaoYouMain from './BaoYouMain'

class BaoYou extends Component{
    render(){
        return <div class="baoyou">
           <BaoYouHeader/>
           <BaoYouMain/>
        </div>
    }
}
export default BaoYou