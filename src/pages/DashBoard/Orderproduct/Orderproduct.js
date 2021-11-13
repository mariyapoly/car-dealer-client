
import React from 'react';
import './Orderproduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const Orderproduct = ({ order, cancelProducts, approvedProducts }) => {

    const { address, email, img, name, phone, productName, _id, status } = order;


    return (
        // order-product start
        <div className='order-product'>
            <ul className="order-list-lg">
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
                {
                    status === 'shipped' ? '' : <li>
                        <button className="update-btn" onClick={() => approvedProducts(_id)}><FontAwesomeIcon icon={faCheck} /></button>
                    </li>
                }

            </ul>
            <ul className="order-list-sm">
                <li><img src={img} alt="" />
                    <span>{productName}</span>
                </li>
                <li><span>Address:</span> <span>{address}</span></li>
                <li><span>Email:</span> <span>{email}</span></li>
                <li><span>Name:</span> <span>{name}</span></li>
                <li><span>Phone:</span> <span>{phone}</span></li>
                <li><span>Status:</span> <span>{status}</span></li>
                <li> <span>Delete:</span>
                    <button className="cancel-btn" onClick={() => cancelProducts(_id)}><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                {
                    status === 'shipped' ? '' : <li> <span>Approved:</span>
                        <button className="update-btn" onClick={() => approvedProducts(_id)}><FontAwesomeIcon icon={faCheck} /></button>
                    </li>
                }
            </ul>
        </div>
        // order-product end
    );
};

export default Orderproduct;