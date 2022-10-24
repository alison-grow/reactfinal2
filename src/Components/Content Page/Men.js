import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card/Card";

export default function Men({ addToCart, toggleWishlist }) {
	const menItems = useContext(allItemsContext).menItems;
	if (!menItems) return;
	return (
		<main>
			<h2>
				<img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
					Men's Clothing
				<img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
			</h2>
			<div className="card-container">
				{menItems.map((item) => {
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
		</main>
	);
}