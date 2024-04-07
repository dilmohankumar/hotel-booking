import React from 'react';
import './service-card.css';

const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item;
    return (
        <div className="service">
            <img src={imgUrl} alt='' />
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    );
};

export default ServiceCard;
