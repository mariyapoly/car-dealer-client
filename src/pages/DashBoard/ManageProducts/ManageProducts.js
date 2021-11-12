import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Product from '../../Shared/Product/Product';
import './ManageProducts.css'

const ManageProducts = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allProducts')
            .then(function (response) {
                setproducts(response.data)
            })
    }, [])

    const handleDeleteBtn = (id) => {
        axios.delete(`http://localhost:5000/allProducts/${id}`)
            .then(function (response) {
                if (response?.data?.deletedCount) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Delete this Product",
                        icon: 'warning',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted',
                                'success'
                            )
                            const remainingOrders = products.filter(products => products._id !== id);
                            setproducts(remainingOrders);
                        }
                    })
                }
            })
    }

    return (
        // manage-products start
        <div className="manage-products">
            <Container>
                <div className="section-title dashboard">
                    <h2>Manage Products</h2>
                </div>
                {
                    products.length ? <Row>
                        {
                            products.map(product => <Product
                                key={product._id}
                                handleDeleteBtn={handleDeleteBtn}
                                product={product}></Product>)
                        }
                    </Row> : <Spinner style={{ position: 'absolute', top: '50%', left: '50%' }} animation="border" variant="danger" />
                }
            </Container>
        </div>
        // manage-products end
    );
};

export default ManageProducts;