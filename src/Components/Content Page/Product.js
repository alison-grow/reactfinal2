import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import DetailsCard from "../Card/DetailsCard";
import { useParams } from "react-router-dom";

export default function Product({ item, addToCart, toggleWishlist, incrementQuantity, decrementQuantity }) {
    const id = item.info.id;
    const { productId } = useParams();
    const setItem = useContext(allItemsContext).setItem;
    if (!setItem) return;
    return (
        <main>
            <h2>
                <img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
                    Product Details
                <img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
            </h2>
            <img src="https://i3.glitter-graphics.org/pub/1154/1154233vwjnnz8zai.gif" alt="divider" />
            <div className="product-details-container">
                {setItem.map((item) => {
					return (
						<DetailsCard
							item={item}
							key={item.id}
							addToCart={addToCart}
							toggleWishlist={toggleWishlist}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
						/>
					);
				})};
            </div>
            <img src="https://dl.glitter-graphics.com/pub/459/459678zahqqkeudq.gif" alt="glitter butterfly" className="img-below-cards" />
        </main>
    );
};

