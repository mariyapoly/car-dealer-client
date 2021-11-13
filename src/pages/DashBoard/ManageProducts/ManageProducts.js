import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import Product from '../../Shared/Product/Product';
import './ManageProducts.css'

const ManageProducts = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get('https://cryptic-dawn-61240.herokuapp.com/allProducts')
            .then(function (response) {
                setproducts(response.data)
            })
    }, [products])

    const handleDeleteBtn = (id) => {

        swal({
            title: "Are you sure?",
            text: "delete this product",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://cryptic-dawn-61240.herokuapp.com/allProducts/${id}`)
                        .then(function (response) {
                            if (response?.data?.deletedCount) {
                                swal("Your Order Canceled!", "", "success");
                            }
                        })

                } else {
                    swal("Your product is safe!");
                }
            });

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