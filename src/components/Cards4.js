import React from 'react';
import CardItem from './CardItem';
import './cards2.css';


function Cards4() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/kbo.jpg'
                            text='The Kuiper Belt, named after planetary scientist Gerard Kuiper, is a region of small worlds beyond Neptune’s orbit between 30 and 50 AU. Some KBOs like Eris and Pluto are large enough to be classified as dwarf planets by the International Astronomical Union.'
                            label='Kuiper Belt Objects'
                            path='/services'
                        />
                        <CardItem
                            src='images/Meteoroids.jpg'
                            text='Meteoroids are objects in space that range in size from dust grains to small asteroids. Think of them as “space rocks." When a meteoroid survives a trip through the atmosphere and hits the ground, it’s called a meteorite.'
                            label='Meteoroids '
                            path='/services'
                        />
                        <CardItem
                            src='images/StarFormation.jpg'
                            text='Stars are born within the clouds of dust and scattered throughout most galaxies. A familiar example of such as a dust cloud is the Orion Nebula. Turbulence deep within these clouds gives rise to knots with sufficient mass that the gas and dust can begin to collapse under its own gravitational attraction. As the cloud collapses, the material at the center begins to heat up.'
                            label='Star Formation'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards4
