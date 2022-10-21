import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card/Card";

export default function Jewelry({ addToCart }) {
	const jewelryItems = useContext(allItemsContext).jewelryItems;
	if (!jewelryItems) return;
	return (
		<main>
			<h2>~ Jewelry ~</h2>
			<div className="card-container">
				{jewelryItems.map((item) => {
					return (
						<Card
							item={item}
							key={item.id}
							addToCart={addToCart}
						/>
					);
				})}
			</div>
		</main>
	);
}