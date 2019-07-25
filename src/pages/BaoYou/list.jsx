import React,{Component} from 'react'

class List extends Component{
    constructor(){
        super();
        this.state = {
            GoodList:[],
        }
    }
    render(){
        return <div className="goodlist">
            <h3>精选推荐</h3>
            
        </div>
    }
}
export default List