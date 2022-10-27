import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card/Card";

export default function Jewelry({ addToCart }) {
	const jewelryItems = useContext(allItemsContext).jewelryItems;
	if (!jewelryItems) return;
	return (
		<main>
			<h2>
			<img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
				Jewelry
				<img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
			</h2>
			<img src="https://cur.glitter-graphics.net/pub/3587/3587556ld2n4khvoz.gif" alt="divider" />
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
			<div>
				<img src="https://dl.glitter-graphics.com/pub/459/459678zahqqkeudq.gif" alt="glitter butterfly" className="img-below-cards" />
			</div> 
		</main>
	);
}