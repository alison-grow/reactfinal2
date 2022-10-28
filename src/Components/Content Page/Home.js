import React from "react";
import ImageSlider from "../Image Slider/ImageSlider";

export default function Home() {
	return (
		<main>
			<h2>
				<img src="https://dl.glitter-graphics.com/pub/3200/3200321c82crvf9ss.gif" alt="heart gif" className="main-h2-gif" />
					forever 24
				<img src="https://dl.glitter-graphics.com/pub/3200/3200321c82crvf9ss.gif" alt="heart gif" className="main-h2-gif" />
			</h2>
			<h3>
				<img src="https://i3.glitter-graphics.org/pub/1154/1154233vwjnnz8zai.gif" alt="divider" />
			</h3>
			<ImageSlider />
			<div>
				<img src="https://dl.glitter-graphics.com/pub/459/459678zahqqkeudq.gif" alt="glitter butterfly" className="img-below-cards" />
			</div> 
		</main>
	);
}