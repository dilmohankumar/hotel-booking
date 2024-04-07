import React from 'react';
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard';

import customizationImg from '../assets/images/customization.png';
import guideImg from '../assets/images/guide.png';
import weatherImg from '../assets/images/weather.png';


const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'UPDATES',
        desc: 'Real-time updates on room availability and pricing.',
    },
    {
        imgUrl: guideImg,
        title: 'CUSTOMER',
        desc: 'Guest reviews and ratings for each room.',
    },
    {
        imgUrl: customizationImg,
        title: 'SEARCH',
        desc: 'Advanced search filters for specific room types.',
    },
];

const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}

        </>
    );
};

export default ServiceList;
