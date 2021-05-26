import React from 'react'
import "../static/css/product.css"
import { useStateValue } from "../StateContext";
function Product({ title, price, image, rating, id}) {

	const [,dispatch ] = useStateValue();
	
	function addToBasket() {
		dispatch({
			type: "ADD_TO_BASKET",
			payload: {
				id:id,
				title:title,
				price:price,
				image:image,
				rating:rating
			},

		})
	}
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<p className="product__rating">
					{Array(rating).fill().map((_,i) => {
						return (
							<span>🌟</span>
						)
					})}
				</p>
			</div>
			<img src={image} alt="" className="product__image"/>
			<button onClick={addToBasket} className="product__btn">Add to Basket</button>
		</div>
	)
}

export default Product
