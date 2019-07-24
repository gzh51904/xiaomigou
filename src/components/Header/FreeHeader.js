import React from 'react';
import './Header.css'
export default class FreeHeader extends React.Component {
    render() {
        return (
            <header className='header'>{this.props.title}</header>
        );
    }
};