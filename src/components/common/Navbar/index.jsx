import React, { Component } from 'react';
import Mimo from '../../../assets/images/mimo white.png';
import counterpart from 'counterpart';
import en from '../../leng/en'
import am from '../../leng/am'
import ru from '../../leng/ru'
import Translate from 'react-translate-component';
import './index.css';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('am', am);
counterpart.registerTranslations('ru', ru);
counterpart.setLocale('en')

const Link = (props) => {
    return (
        <Translate
            content={props.content}
            component='a'
            href='//google.com'
            target = '_blank'
        />)
}

export default class Navbar extends Component {
    state = {
        lang: 'en'
    }

    onLangChange = (e) => {
        this.setState({lang:e.target.value})
        counterpart.setLocale(e.target.value);
    }
    render() {
        const link = <Link content = 'link' />
        return (
            <div className='Navbar'>
                <div className='logoContent'>
                    <div className='logo'>
                        <img src={Mimo} alt="" />
                    </div>
                </div>
                <nav>
                    <ul><li><Translate content='link.link_1' component='a' href = '#' with={{ link}} /></li></ul>
                    <ul><li><Translate content='link.link_2' component='a' href = '#' with={{ link}} /></li></ul>
                    <ul><li><Translate content='link.link_3' component='a' href = '#' with={{ link}} /></li></ul>
                    <ul><li><Translate content='link.link_4' component='a' href = '#' with={{ link}} /></li></ul>
                </nav>

                <div>
                    <select value = { this.state.lang } onChange = {this.onLangChange}>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="am">AM</option>
                    </select>
                </div>
            </div>
        )
    }
}