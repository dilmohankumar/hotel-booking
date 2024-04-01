import React from 'react';
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard';

import customizationImg from '../assets/images/customization.png';
import guideImg from '../assets/images/guide.png';
import weatherImg from '../assets/images/weather.png';


const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
