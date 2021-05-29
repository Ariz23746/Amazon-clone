import React from 'react'
import "../static/css/order.css";
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";



function Order({ order }) {
	
	const basket = order.data.basket;
	function getBasketTotal() {
		let sum = 0;
		basket.forEach(product => {
			sum = product.price + sum;
		})
		return sum;
	}
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("MMMM Do YYYYY,h:mma")}</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map(item => (
				<CheckoutProduct 
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					hideButton
				/>
			))}
			<CurrencyFormat 
				renderText={(total) => (
						
					<h3 className="order__total">
						Order Total: <strong>{total}</strong>
					</h3>
							
					
					)}
					decimalScale={2}
					value={getBasketTotal(basket)}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"₹"}
				/>
		</div>
		
	)
}

export default Order;
