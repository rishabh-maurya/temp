import React from 'react';
import './MagicianCard.scss';

const MagicianCard = ({ cardData }) => {
    return (
        <div className="magician-card">
            <div className="icon-container">
                <cardData.icon />
            </div>
            <h3>{cardData.title}</h3>
            <p>{cardData.description}
            </p>
        </div>
    )
}

export default MagicianCard;