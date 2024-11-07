import React from 'react';
import Slider from 'react-slick';

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const customerImages = [
    'https://assets.licious.in/oms/771bdb4d-95c9-fc34-2a5a-2da7a0b3c5a3/original/1714641102145.png',
    'https://assets.licious.in/oms/5bf3f0ef-70be-4498-4acb-cee8ad2bbba5/original/1714641145708.png',
    'https://assets.licious.in/oms/bd10cee8-f8ba-96a1-50ed-465bf0986008/original/1714641062748.png',
    'https://assets.licious.in/oms/af88fb24-cc35-10a8-0078-a9dfd8f38efb/original/1714640932931.png',
    'https://assets.licious.in/oms/cd63a44b-a5d9-ab51-2e9e-385afe535a86/original/1714641007912.png'
  ];

  return (
    <div className="customer-reviews-section my-5">
      <h2 className="text-center mb-4">Hear it directly from people like you</h2>
      <Slider {...settings}>
        {customerImages.map((image, index) => (
          <div key={index} className="mx-1">
            <img src={image} alt={`Customer ${index + 1}`} className="customer-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviews;
