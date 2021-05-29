import React,{useState,useEffect} from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateContext';
import { useHistory } from "react-router-dom"
import "../static/css/subtotal.css";
function Subtotal() {

	const history = useHistory();
	const [state,] = useStateValue();
	const [total,setTotal] = useState(() => {
		let p = 0;
		state.basket.forEach(item => {
			p += item.price;
		})
		return p;
	});
	useEffect(() => {
		setTotal(() => {
			
			let p = 0;
			state.basket.forEach(item => {
				p += item.price;
			})
			return p;
		});
	}, [state])
	return (
		<div className="subtotal">
			<CurrencyFormat 
				renderText={(total) => {
					return (
						<>
							<p>
								Subtotal ({state.basket.length} items): <strong>{total}</strong>
							</p>
							<small className="subtotal__gift">
								<input type="checkbox" /> 
								This Order
								contains a gift
							</small>
						</>
					)
				}}
				decimalScale={2}
				value={total}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
			/>
			<button className="subtotal__btn" onClick={e => history.push("/payment")}>Proceed to checkout</button>

		</div>
	)
}

export default Subtotal;
