import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1 > Visit our Quick Facts pages for more such space facts</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/comet.jpg'
                            text='Comets are cosmic snowballs of frozen gases, rock, and dust that orbit the Sun.'
                            label='Neowise Comet'
                            // path='/services'
                        />
                        <CardItem
                            src='images/moon.jpg'
                            text='The Moon makes Earth a more livable planet by moderating the wobble of our home planet on its axis'
                            label='Moon'
                            // path='/services'
                        />
                        <CardItem
                            src='images/blackhole.jpg'
                            text='A black hole is a place in space where gravity pulls so much that even light can not get out.'
                            label='Blackhole'
                            // path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
