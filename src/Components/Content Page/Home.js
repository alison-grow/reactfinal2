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
				<img src="https://dl.glitter-graphics.com/pub/2639/2639246sxx578ntof.gif" alt="welcome banner" className="welcome-banner" />
			</h3>
			<ImageSlider />
			<div>
				<img src="https://dl.glitter-graphics.com/pub/459/459678zahqqkeudq.gif" alt="glitter butterfly" className="img-below-cards" />
			</div> 
		</main>
	);
}