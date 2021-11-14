import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import  './Booking.css'
const Book = () => {
    const { bedType } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user } = useAuth()
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className="booking-form">
            <div>
                <h1>Let's book a {bedType} Room.</h1>
                <p>Want a <Link to="/home">different room?</Link> </p>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Book;