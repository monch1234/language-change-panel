import React, { Component } from 'react';
import MyPhoto from '../../assets/images/IMG_6629.JPG'
import './index.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className='About'>

                        <div className=' About_me '>
                            <h1>I'M STEPAN BADALYAN</h1>
                            <h2>FRONT-END DEVELOPER</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                Repellat quas, voluptatem harum corporis repudiandae odit <br />
                                velit sequi, at consectetur quo consequuntur fugiat a qui <br />
                                suscipit ipsam dolores maiores aut necessitatibus?</p>
                        </div>
                        <div className='About_me_images'>
                                <img src={MyPhoto} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}