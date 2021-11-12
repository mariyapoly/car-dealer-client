import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './AddProducts.css'

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://cryptic-dawn-61240.herokuapp.com/addProduct', {
            name: data.name,
            img: data.img,
            price: data.price,
            des: data.des
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                }
            })
    };

    return (
        // add-product-area start
        <div className="add-product-area">
            <Container>
                <div className="section-title dashboard">
                    <h2>Add a Product</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required placeholder="Product Name" {...register("name")} />
                    <input required placeholder="Product image"  {...register("img")} />
                    <input required placeholder="Price" {...register("price")} />
                    <textarea required placeholder="Description" {...register("des")} />
                    <input className="regular-btn" type="submit" value="Add Product" />
                </form>
            </Container>
        </div>
        // add-product-area end
    );
};

export default AddProducts;