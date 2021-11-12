import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css'

const MakeAdmin = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.put(`https://cryptic-dawn-61240.herokuapp.com/makeAdmin?email=${user.email}`)
            .then(function (response) {
                console.log(response.data)
                if (response.data.matchedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Make Admin Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                }
            })
    };

    return (
        // make-admin start
        <div className="make-admin">
            <Container>
                <div className="section-title dashboard">
                    <h2>Make Admin</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required placeholder="Email" {...register("eamil")} />
                    <input className="regular-btn" type="submit" value="Make Admin" />
                </form>
            </Container>
        </div>
        // make-admin end
    );
};

export default MakeAdmin;