import React from 'react';

const Orderproduct = ({ order }) => {

    const { address, email, img, name, phone, price, productName } = order;

    return (
        <div className='order-product'>
            <img src={img} alt="" />
            <p>{address}</p>
            <p>{email}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{price}</p>
            <p>{productName}</p>
        </div>
    );
};

export default Orderproduct;