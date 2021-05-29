import React from 'react'
import "../static/css/checkout.css";
import Subtotal from "./Subtotal"
import { useStateValue } from "../StateContext";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
function Checkout() {

	const [state,] = useStateValue();

	return (
		
		<div className="checkout">
			<div className="checkout__left">
				<img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon-Ad" className="checkout__ad" />

				<div>
					<h2 className="checkout__title">
						Your Shopping Basket
					</h2>
				
					{ state.basket.map((product,key) => (
						<div key={key} className="checkout__product">
							<CheckoutProduct 
								image={product.image} 
								title={product.title} 
								id={product.id} 
								rating={product.rating} 
								price={product.price}
							/>
						</div>
					))}
					

				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
		
	)
}

export default Checkout;
