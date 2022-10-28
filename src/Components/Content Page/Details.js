import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setItem(data);
        }
        getProduct();
    }, [id]);
    return (
        <main>
            <h2>
                <img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
                    Product Details
                <img src="https://dl.glitter-graphics.com/pub/3365/3365183h29y7c86k4.gif" alt="shopping cart gif" className="main-h2-gif" />
            </h2>
            <img src="https://i3.glitter-graphics.org/pub/1154/1154233vwjnnz8zai.gif" alt="divider" />
            <div className="product-details-container">
                <img className="product-details-img" src={item.image} alt="product" />
                <div className="product-title">{item.title}</div>
                <div className="product-category">{item.category}</div>
                <div className="product-price">Price: ${item.price}</div>
                <div className="product-description">{item.description}</div>
            </div>
            <img src="https://dl.glitter-graphics.com/pub/459/459678zahqqkeudq.gif" alt="glitter butterfly" className="img-below-cards" />
        </main>
    )
};
