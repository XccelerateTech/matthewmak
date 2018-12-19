import React from 'react';

const Weather = (props) => {
    return (
        <div className='card weather'>
            <h3 className='card-header'>{props.DoW}</h3>
            <i className="fas fa-sun card-title"></i>
            <p className='card-text'>{props.max}<span>&#8451;</span> {props.min}<span>&#8451;</span></p>
        </div>
    )
}

export default Weather;