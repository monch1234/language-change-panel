import React, { Component } from 'react';
import Navbar from '../../common/Navbar/index';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Navbar />
            </header>
        )
    }
}