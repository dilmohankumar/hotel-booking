import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ava01 from '../../assets/images/ava-3.png';
import ava02 from '../../assets/images/ava-3.png';
import ava03 from '../../assets/images/ava-3.png';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p className='pp'>
                Absolutely exceptional service! From booking to check-out, every detail was meticulously taken care of. Can't wait to return
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">kamal</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className='pp'>
                A truly unforgettable stay! Impeccable hospitality and attention to detail made our visit truly special. Highly recommend!
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">mayank</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p className='pp'>
                From the moment we arrived, we felt like royalty. The staff went above and beyond to ensure our comfort and satisfaction. Thank you for an amazing experience!
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Rohit</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className='pp'>
                From the warm welcome to the personalized service, every moment was a delight. The attention to detail surpassed my expectations
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Sunil</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p className='pp'>
                Exquisite accommodations and impeccable service. Our stay was nothing short of perfection. We can't wait to return
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">jassi</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

        </Slider>
    );
};

export default Testimonial;
