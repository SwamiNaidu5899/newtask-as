import React from 'react';
import Slider from 'react-slick';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ image, title, description, price, discount, deliveryTime }) => {
  const handleAddToCart = () => {
    toast.success(`${title} added to cart!`);
  };

  return (
    <Card className="product-card p-3 custom-card">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Text className="product-description">{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="product-price">{price}</h5>
            <p className="text-muted">
              <span className="text-success">{discount}</span> off
            </p>
          </div>
          <Button variant="link" onClick={handleAddToCart}>
            <FaPlusCircle size={24} />
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="fas fa-truck"></i> {deliveryTime}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const Bestsellers = () => {
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

  const products = [
    {
      id: 1,
      image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F6fc425d4-2c62-058c-9718-64a2a92161c5%2Foriginal%2F1716979971362.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Chicken Curry Cut - Small Pieces',
      description: '500 g | 12-18 Pieces | Serves 4',
      price: '₹150',
      discount: '23%',
      deliveryTime: 'Today in 90 mins',
    },
    {
      id: 2,
      image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F469c9ea4-4c1a-fe2a-0f2b-7dba03860c67%2Foriginal%2F1716980533039.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Prawn Masala - Large',
      description: '1 kg | 15-20 Pieces | Serves 5',
      price: '₹250',
      discount: '10%',
      deliveryTime: 'Today in 90 mins',
    },
    {
      id: 3,
      image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2Fb1b27aed-5dd7-b09b-f2da-63e64aafb003%2Foriginal%2F1716976077502.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Fish Fillet - Boneless',
      description: '750 g | 10-15 Pieces | Serves 3',
      price: '₹200',
      discount: '15%',
      deliveryTime: 'Today in 90 mins',
    },
    {
      id: 4,
      image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F145d3e25-9567-e1a7-d7f6-acb4e55e9619%2Foriginal%2F1716982461273.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Lobster Tail',
      description: '500 g | 8-10 Pieces | Serves 2',
      price: '₹400',
      discount: '5%',
      deliveryTime: 'Today in 90 mins',
    },
    {
      id: 5,
      image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F81388200-4572-512c-0588-b43ea15b1e69%2Foriginal%2F1716974900400.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Mussels - Fresh',
      description: '300 g | 20-25 Pieces | Serves 2',
      price: '₹120',
      discount: '30%',
      deliveryTime: 'Today in 90 mins',
    },
    {
      id: 6,
      image: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F6fc425d4-2c62-058c-9718-64a2a92161c5%2Foriginal%2F1716979971362.png%3Fformat%3Dwebp&w=1920&q=75',
      title: 'Crab Meat - Chunks',
      description: '200 g | 5-8 Pieces | Serves 3',
      price: '₹250',
      discount: '18%',
      deliveryTime: 'Today in 90 mins',
    }
  ];

  return (
    <div className="bestsellers-section my-5">
      <h2 className="text-center mb-4">Bestsellers</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="mx-1">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bestsellers;
