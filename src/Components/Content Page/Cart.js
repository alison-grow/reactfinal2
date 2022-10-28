import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allItemsContext } from "../../App";
import CartItems from "../Cart Items/CartItems";

export default function Cart({
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	clearCart,
}) {
	const cartItems = useContext(allItemsContext).cartItems;

	let cart;
	if (cartItems.length === 0) {
		cart = <h4>Your Cart is Empty!</h4>;
	} else {
		const totalPrice = getTotal(cartItems);
		cart = (
			<div className="cart-items-container">
				{cartItems.map((item) => {
					return (
						<CartItems
							item={item}
							key={item.id}
							incrementQuantity={incrementQuantity}
							decrementQuantity={decrementQuantity}
							removeFromCart={removeFromCart}
						/>
					);
				})}
				<div className="cart-items-total">
					<div>Total: ${totalPrice}</div>
					<Link to="/payment">
						<button className="proceed-btn">Proceed to Checkout</button>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<main>
			<h2>
			<img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
				Shopping Cart
			<img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
			</h2>
			<img src="https://i3.glitter-graphics.org/pub/1154/1154233vwjnnz8zai.gif" alt="divider" />
			{cart}
			<div>
			<img src="https://dl.glitter-graphics.com/pub/459/459678zahqqkeudq.gif" alt="glitter butterfly" className="img-below-cards" />
			</div>
		</main>
	);
}

function getTotal(items) {
	const total = items.reduce((sum, item) => {
		return (sum += item.quantity * item.info.price);
	}, 0);
	return total.toFixed(2);
}