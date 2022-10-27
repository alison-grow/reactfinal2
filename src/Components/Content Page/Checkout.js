import React from "react";
import { Link } from "react-router-dom";


export default function Checkout() {

    return (
        <main>
            <h2>
                <img src="https://dl.glitter-graphics.com/pub/2659/2659427jflu9l808s.gif" alt="shopping cart gif" className="main-h2-gif" />
                    Checkout
                <img src="https://dl.glitter-graphics.com/pub/2659/2659427jflu9l808s.gif" alt="shopping cart gif" className="main-h2-gif" />
            </h2>
            <div className="checkout-container">
                <form>
                    <label>
                        Name
                        <input type="text" name="name" />
                    </label>
                    <Link to="">
                        <button>
                            Submit!
                        </button>
                    </Link>
                </form>
            </div>









        </main>
    );
}