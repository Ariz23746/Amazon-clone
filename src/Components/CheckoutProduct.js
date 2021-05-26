import React from 'react'
import { useStateValue } from "../StateContext";
import "../static/css/checkoutProduct.css";
function CheckoutProduct({ id, image, title, price, rating}) {
	
	const [,dispatch] = useStateValue();
	function removeItem(id) {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			payload: id,
		})
		
	}
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" className="checkoutProduct__image"/>
				<div className="checkoutProduct__description">
					<p className="checkoutProduct__descriptionTitle">
					{title}
					</p>
					<p className="checkoutProduct__descriptionPrice">
						<small>₹</small>
						{price}
					</p>
					<p className="checkoutProduct__descriptionRating">
						{Array(rating).fill().map((_,i) => {
							return (
								<span>🌟</span>
							)
						})}
					</p>
					<button onClick={removeItem.bind(this, id)} className="checkoutProduct__descriptionRemoveBtn">Remove from basket</button>
				</div>
		</div>
	)
}

export default CheckoutProduct;
