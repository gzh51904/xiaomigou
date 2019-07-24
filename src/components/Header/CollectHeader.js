import React from 'react';
import './Header.css'
export default class CollectHeader extends React.Component {
    render() {
        return (
            <header className='header'>{this.props.title}</header>
        );
    }
};