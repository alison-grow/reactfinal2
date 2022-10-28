import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import "../Card/DetailsCard.css";

export default function DetailsCard({ item, addToCart, toggleWishlist, incrementQuantity, decrementQuantity }) {
    const icon = item.inWishlist ? (
		<MdFavorite color="black" fontSize="1em" />
	) : (
		<MdFavoriteBorder fontSize="1em" />
	);
    return (
        <div className="details-card">
            <div className="card-upper">
                <div className="details-card-img">
                    <img src={item.image} alt="product-img" />
                </div>
                <div className="card-title">{item.title}</div>
            </div>
            <div className="card-lower">
                <div className="card-price">${item.price}</div>
            </div>
            <div className="card-button-container">
            <div>
					{"Quantity: "}
					<button
						className="minus-btn"
						onClick={() => decrementQuantity(item.id)}
					>
						-
					</button>
					{` ${item.quantity} `}
					<button
						className="plus-btn"
						onClick={() => incrementQuantity(item.id)}
					>
						+
					</button>
				</div>
					<button
						className="details-add-to-cart-btn"
						onClick={() => addToCart(item.id, item.category)}
					>
						Add to Cart
					</button>
					<button
						className="details-toggle-wishlist-btn"
						onClick={() => toggleWishlist(item.id, item.category)}
					>
						{icon}
					</button>
				</div>
        </div>
    )

}