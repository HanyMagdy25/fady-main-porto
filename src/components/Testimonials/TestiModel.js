import React from 'react';
import './Testimonials.css';

const TestiModel = ({title,image,position,qoute}) => {
    return (
        <div className='testimonials-model'>
            <div className='testimonials-model-container'>
                <div className='testi-pic'>
                    <img src={image} alt="test"/>
                </div>
                <div className='under-testi-pic'>
                    <h2 className='name-testi'>{title}</h2>
                    <span className='position-testi'>{position}</span>
                    <q className='qoute-testi'>{qoute}</q>
                </div>
            </div>
        </div>
    )
}

export default TestiModel
