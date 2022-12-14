import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card/Card";

export default function Wishlist({ addToCart, toggleWishlist }) {
	const wishlistItems = useContext(allItemsContext).wishlist;
	let wishlist;
	if (wishlistItems.length === 0) {
		wishlist = <h4>Your Wishlist Is Empty!</h4>;
	} else {
		wishlist = (
			<div className="card-container">
				{wishlistItems.map((item) => {
					return (
						<Card
							item={item}
							key={item.id}
							addToCart={addToCart}
							toggleWishlist={toggleWishlist}
						/>
					);
				})}
			</div>
		);
	}
	return (
		<main>
			<h2>
			<img src="https://dl.glitter-graphics.com/pub/3200/3200321c82crvf9ss.gif" alt="heart gif" className="main-h2-gif" />
				Your Wishlist
				<img src="https://dl.glitter-graphics.com/pub/3200/3200321c82crvf9ss.gif" alt="heart gif" className="main-h2-gif" />
			</h2>
			<img src="https://i3.glitter-graphics.org/pub/1154/1154233vwjnnz8zai.gif" alt="divider" />
			{wishlist}
		</main>
	);
}