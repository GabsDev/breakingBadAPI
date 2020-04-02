import React from 'react';

const Card = ( {image, name, occupation, status, birthday, portrayed}) => {
    return (
        <div className='tc gold bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='characters' src={image}/>
            <div>
                <h2>{name}</h2>
                <p>{occupation}</p>
                <p>{status}</p>
                <p>{birthday}</p>
                <p>{portrayed}</p>
            </div>
        </div>
    );
}

export default Card;