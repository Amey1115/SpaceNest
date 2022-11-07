import React from 'react';
import CardItem from './CardItem';
import './cards2.css';


function Allcards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/universe.jfif'
                            text='The universe is everything. It includes all of space, and all the matter and energy that space contains. It even includes time itself and, of course, it includes you.'
                            label='Universe'
                            path='/services'
                        />
                        <CardItem
                            src='images/star.jfif'
                            text='Stars are the most basic building blocks of galaxies. The age, distribution, and composition of stars trace the history, dynamics, and evolution of their galaxy. '
                            label='Stars'
                            path='/services'
                        />
                        <CardItem
                            src='images/stars.jpg'
                            text='Statistically, there should be more than 100 billion planets in our Milky Way galaxy. They come in a wide range of sizes and characteristics. Complex organisms arose on Earth only 500 million years ago, and modern humans have been here for only 200,000 years'
                            label='Star Cluster'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Allcards
