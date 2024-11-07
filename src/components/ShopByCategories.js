import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const categories = [
    { id: 1, name: 'Salmon', img: 'https://assets.licious.in/OMS-Category/efd78703-fe0e-e9f3-c4b7-95833ba8dd35/original/1705579467212.png' },
    { id: 2, name: 'Tuna', img: 'https://assets.licious.in/OMS-Category/d66ae4d6-a29a-3d76-3bfe-4950c01d2767/original/1714038104830.png' },
    { id: 3, name: 'Shrimp', img: 'https://assets.licious.in/OMS-Category/37b0d9df-4474-1c4e-ace3-d36dfb26a772/original/1715753771878.png' },
    { id: 4, name: 'Lobster', img: 'https://assets.licious.in/OMS-Category/70a0a0aa-289f-5030-d250-3a4b5cb509c4/original/1730082691203.png' },
    { id: 5, name: 'Crab', img: 'https://assets.licious.in/OMS-Category/cc22d943-1237-b9b0-0f66-14730f811590/original/1729230959764.png' },
    { id: 6, name: 'Mussels', img: 'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2119874c-38a6-df8c-22f1-5cd8a2eb4d80/original/Mutton_(1)_(1).png' },
    { id: 7, name: 'Oysters', img: 'https://assets.licious.in/OMS-Category/2b1d8de6-4083-ea97-281f-5c48a68dce9d/original/1701430415338.png' },
    { id: 8, name: 'Clams', img: 'https://assets.licious.in/OMS-Category/bfd348af-bbcf-1ef4-cfc0-e6c962692419/original/1697219789195.png' },
    { id: 9, name: 'Squid', img: 'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/544bddc9-5775-cd44-511c-8e7e78f75a10/original/Eggs.png' },
    { id: 10, name: 'Anchovies', img: 'https://assets.licious.in/OMS-Category/cf13a412-3f09-263e-1ace-06652a968936/original/1704968980564.png' },
    { id: 11, name: 'Scallops', img: 'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4ad0a144-8830-a4b5-90ee-216753328bbd/original/Masala_1.png' },
    { id: 12, name: 'Sea Bass', img: 'https://assets.licious.in/OMS-Category/894f6c43-d07c-4ba9-2c7d-e53c53ef2e14/original/1704969151486.png' },
    { id: 13, name: 'Tilapia', img: 'https://assets.licious.in/OMS-Category/accf7322-fc76-79e6-8d7f-509b76ee3961/original/1713945689275.png' },
    { id: 14, name: 'Flounder', img: 'https://assets.licious.in/OMS-Category/f950203f-5abe-c1f0-c3e4-0ec37dbdccd3/original/1714043483773.png' }
];

const ShopByCategories = () => {
    return (
        <div>
            <div className="container my-5">
                <h2 className="text-center mb-4">Shop by Seafood Categories</h2>
                <Row>
                    {categories.map(category => (
                        <Col key={category.id} xs={12} sm={6} md={4} lg={2} className="mb-4">
                            <Card className="category-card h-100 shadow-sm border-0" style={{ cursor: 'pointer' }}>
                                <Card.Img
                                    variant="top"
                                    src={category.img}
                                    alt={category.name}
                                    style={{
                                        objectFit: 'cover',
                                        width: '150px',
                                        height: '150px', 
                                        borderRadius: '50%',
                                        margin: '0 auto' 
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title className="text-center">{category.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default ShopByCategories;
