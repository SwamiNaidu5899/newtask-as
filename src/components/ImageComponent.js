import React from 'react';

const ImageComponent = () => {
    return (
        <div className="image-container">
            <img
                className="d-block w-100"
                src="https://assets.licious.in/oms/9bf88c1d-be9c-7185-605d-516865f85480/original/1726211448357.png"
                alt="Featured Product"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
        </div>
    );
};

export default ImageComponent;
