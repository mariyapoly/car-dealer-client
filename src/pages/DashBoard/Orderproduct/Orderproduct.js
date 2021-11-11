
import React from 'react';
import './Orderproduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const Orderproduct = ({ order, cancelProducts, approvedProducts }) => {

    const { address, email, img, name, phone, productName, _id, status } = order;


    return (
        <div className='order-product'>
            <ul>
                <li><img src={img} alt="" />
                    <span>{productName}</span>
                </li>
                <li>{address}</li>
                <li>{email}</li>
                <li>{name}</li>
                <li>{phone}</li>
                <li>{status}</li>
                <li>
                    <button className="cancel-btn" onClick={() => cancelProducts(_id)}><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                <li>
                    <button className="update-btn" onClick={() => approvedProducts(_id)}><FontAwesomeIcon icon={faCheck} /></button>
                </li>
            </ul>
        </div>
    );
};

export default Orderproduct;