import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import "./DetailsCard.css";

export default function DetailsCard({ item, addToCart, toggleWishlist, incrementQuantity, decrementQuantity }) {
	const id = item.info.id;
	const total = (item.info.price * item.quantity).toFixed(2);
	const icon = item.inWishlist ? (
		<MdFavorite color="black" fontSize="1em" />
	) : (
		<MdFavoriteBorder fontSize="1em" />
	);
    return (
        <div className="details-card">
            <div className="card-upper">
                <div className="details-card-img">
                    <img src={item.info.image} alt="product-img" />
                </div>
                <div className="card-title">{item.info.title}</div>
            </div>
            <div className="card-lower">
                <div className="card-price">${item.info.price}</div>
            </div>
            <div className="card-button-container">
            <div>
					{"Quantity: "}
					<button
						className="minus-btn"
						onClick={() => decrementQuantity(id)}
					>
						-
					</button>
					{` ${item.quantity} `}
					<button
						className="plus-btn"
						onClick={() => incrementQuantity(id)}
					>
						+
					</button>
				</div>
				<div>Total: ${total}</div>
					<button
						className="details-add-to-cart-btn"
						onClick={() => addToCart(id, item.category)}
					>
						Add to Cart
					</button>
					<button
						className="details-toggle-wishlist-btn"
						onClick={() => toggleWishlist(id, item.category)}
					>
						{icon}
					</button>
				</div>
        </div>
    )

}