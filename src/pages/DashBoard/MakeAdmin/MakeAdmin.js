import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './MakeAdmin.css'

const MakeAdmin = () => {


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.put(`https://cryptic-dawn-61240.herokuapp.com/admin/${data.email}`)
            .then(function (response) {
                if (response.data.modifiedCount) {
                    swal({
                        text: "admin added successfully",
                        icon: "success",
                    });
                    reset();
                } else {
                    swal({
                        text: "admin already added",
                    });
                    reset();
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
                    <input required placeholder="Email" {...register("email")} />
                    <input className="regular-btn" type="submit" value="Make Admin" />
                </form>
            </Container>
        </div>
        // make-admin end
    );
};

export default MakeAdmin;