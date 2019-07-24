import React from 'react'
import CollectHeader from '../../components/Header/CollectHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
class Collect extends React.Component {
    render() {
        return (
            <div>
                <CollectHeader/>
                <Tabbar/>
            </div>
        )
    }
}

export default Collect