import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../Storage/UserStorage";

export default function Shipment() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [user] = useContext(UserContext)

    return (
        <div className="container">
            <h4 className='my-4'>Shipping Address</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.name} class="form-control mt-4" placeholder='Enter Your Full Name' name="name" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Name is required</span>}

                <input defaultValue={user.email} class="form-control mt-4" placeholder='Enter Your Email' name="email" ref={register} />
                {errors.email && <span className="text-danger">Email is required</span>}

                <input class="form-control mt-4" placeholder='Enter Your Phone Number' name="phone" ref={register({ required: true })} />
                {errors.phone && <span className="text-danger">Phone is required</span>}

                <input class="form-control mt-4" placeholder='Enter Your Address' name="address" ref={register({ required: true })} />
                {errors.address && <span className="text-danger">Address is required</span>} <br />

                <input class="btn btn-primary my-4" placeholder='Enter Your Full Name' type="submit" />
            </form>
        </div>
    );
}