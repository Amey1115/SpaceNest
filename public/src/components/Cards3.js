import React from 'react';
import CardItem from './CardItem';
import './cards2.css';


function Cards3() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/sun.png'
                            text='The Sun is the largest object in our solar system. The Sun’s volume would need 1.3 million Earths to fill it. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris in orbit around it.'
                            label='The Sun'
                            path='/services'
                        />
                        <CardItem
                            src='images/galaxy.jpg'
                            text='A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. Galaxies populate the Universe, mainly residing in clusters and groups. There are thought to be over 100 billion galaxies in the observable Universe. '
                            label='Galaxy'
                            path='/services'
                        />
                        <CardItem
                            src='images/asteroids.jpg'
                            text='Asteroids are irregularly shaped objects ranging in size from a few meters to hundreds of kilometers across. Most are located in the asteroid belt between Mars and Jupiter, but some stray closer, becoming near-Earth asteroids if they get within 1.3 astronomical units of the Sun (the Earth’s average distance to the Sun is 1 AU).'
                            label='Asteroids'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards3
