import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function Checkout() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

    }
    return (
        <main>
            <h2>
                <img src="https://dl.glitter-graphics.com/pub/2659/2659427jflu9l808s.gif" alt="shopping cart gif" className="main-h2-gif" />
                    Checkout
                <img src="https://dl.glitter-graphics.com/pub/2659/2659427jflu9l808s.gif" alt="shopping cart gif" className="main-h2-gif" />
            </h2>
            <div className="checkout-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input placeholder="First Name" {...register("firstName", {required: true, maxLength: 80})} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input placeholder="Last Name" {...register("lastName" , {required: true, maxLength: 80})} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input placeholder="Email" type="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input placeholder="Address" {...register("address", {})} />
                        <label htmlFor="City">City</label>
                        <input type="text" placeholder="City" {...register("city")} />
                        <label htmlFor="state">State</label>
                        <input type="undefined" placeholder="State" {...register("state")} />
                        <label htmlFor="zipcode">Zip Code</label>
                        <input type="undefined" placeholder="Zip Code" {...register} />
                    </div>
                    <div>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="undefined" placeholder="Card Number" {...register} />
                    </div>
                    <input type="submit" />
                    <Link to="">
                        <button>
                            Submit!
                        </button>
                    </Link>
                </form>
            </div>
        </main>
    );
}