import React from "react";
import './App.css';
import Cart from "./Content Page/Cart";
import Checkout from "./Content Page/Payment";
import Men from "./Content Page/Men";
import Wishlist from "./Content Page/Wishlist";
import Women from "./Content Page/Women";
import Jewelry from "./Content Page/Jewelry"
import Home from "./Content Page/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

export default function Main({
	addToCart,
	toggleWishlist,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	clearCart,
}) {
	console.log("main");
	return (
		<>
			<HashRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path="/Men"
						element={
							<>
								<Header />
								<Men
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/Women"
						element={
							<>
								<Header />
								<Women
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/Jewelry"
						element={
							<>
								<Header />
								<Jewelry
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Cart
									incrementQuantity={incrementQuantity}
									decrementQuantity={decrementQuantity}
									removeFromCart={removeFromCart}
									clearCart={clearCart}
								/>
							</>
						}
					/>
					<Route
						path="wishlist"
						element={
							<>
								<Header />
								<Wishlist
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Checkout
								/>
							</>
						}
					/>
				</Routes>
			</HashRouter>
		</>
	);
}