import React from "react";
import { useForm } from "react-hook-form";
import totalPrice from "./Cart";
import CartItems from "../Cart Items/CartItems";


export default function Checkout() {
    const { register, handleSubmit } = useForm();
    // const totalPrice = getTotal(cartItems);
    // const cartItems = useContext(allItemsContext).cartItems;
    const onSubmit = (data) => {

    }
    return (
        <main>
            <h2>
                <img src="https://dl.glitter-graphics.com/pub/2659/2659427jflu9l808s.gif" alt="shopping cart gif" className="main-h2-gif" />
                    Checkout
                <img src="https://dl.glitter-graphics.com/pub/2659/2659427jflu9l808s.gif" alt="shopping cart gif" className="main-h2-gif" />
            </h2>
            <img src="https://i3.glitter-graphics.org/pub/1154/1154233vwjnnz8zai.gif" alt="divider" />
            <div className="checkout-container">
            <div className="cart-total">Your Total: ${totalPrice}</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="firstName">First Name:</label><br></br>
                        <input className="checkout-container-input" placeholder="First Name" {...register("firstName", {required: true, maxLength: 80})} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label><br></br>
                        <input className="checkout-container-input" placeholder="Last Name" {...register("lastName" , {required: true, maxLength: 80})} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label><br></br>
                        <input className="checkout-container-input" placeholder="Email" type="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label><br></br>
                        <input className="checkout-container-input" placeholder="Address" {...register("address", {})} /><br></br>
                        <label htmlFor="City">City:</label><br></br>
                        <input className="checkout-container-input" type="text" placeholder="City" {...register("city")} /><br></br>
                        <label htmlFor="state">State:</label><br></br>
                        <input className="checkout-container-input" type="text" placeholder="State" {...register("state")} /><br></br>
                        <label htmlFor="zipcode">Zip Code:</label><br></br>
                        <input className="checkout-container-input" type="text" placeholder="Zip Code" {...register} /><br></br>
                    </div>
                    <div>
                        <label htmlFor="cardNumber">Card Number:</label><br></br>
                        <input className="checkout-container-input" type="text" placeholder="Card Number" {...register} /><br></br><br></br>
                    </div>
                    <input className="submit-btn" type="submit" />
                </form>
            </div>
            <img src="https://dl.glitter-graphics.com/pub/459/459678zahqqkeudq.gif" alt="glitter butterfly" className="img-below-cards" />
        </main>
    );
}

// function getTotal(items) {
// 	const total = items.reduce((sum, item) => {
// 		return (sum += item.quantity * item.info.price);
// 	}, 0);
// 	return total.toFixed(2);
// }