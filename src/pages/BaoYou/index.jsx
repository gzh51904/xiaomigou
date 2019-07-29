import React,{Component} from 'react'
import Tabbar from '../../components/Tabbar/Tabbar'
import BaoYouHeader from './BaoYouHeader'
import BaoYouMain from './BaoYouMain'
import './Baoyou.scss'

class BaoYou extends Component{
    render(){
        return <div className="baoyou">
           <BaoYouHeader/>
           <BaoYouMain/>
           <Tabbar/>
        </div>
    } 
}
export default BaoYou