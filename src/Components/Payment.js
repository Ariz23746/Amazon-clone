import React,{useState,useEffect} from 'react'
import "../static/css/payment.css";
import { useStateValue } from "../StateContext";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import CurrencyFormat from "react-currency-format"
import { useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import { db } from "../firebase";
function Payment() {

	const [{basket,user},dispatch] = useStateValue();
	//hooks
	const stripe = useStripe();
	const elements = useElements();

	const history = useHistory();
	const [disable,setDisable] = useState(false);
	const [processing,setProcessing] = useState(false);
	const [succeeded,setSucceeded] = useState(false);
	const [error,setError] = useState(null);
	const [clientSecret,setClientSecret] = useState(null);
	function getBasketTotal() {
		let sum = 0;
		basket.forEach(product => {
			sum = product.price + sum;
		})
		return sum;
	}
	useEffect(() => {
		// generating client secret key

		const getClientSecret = async () => {
			const response = await axios({
				method: "POST",
				url: `/payment/create?total=${Math.floor(getBasketTotal(basket))}`
			});

			setClientSecret(response.data.clientSecret);
		}
		
		getClientSecret();
		
	},[basket])

	console.log(clientSecret);
	function onChangeHandler(event) {

		//listen for changes in cardElement
		// and display any errors as the customer types their card details

		setDisable(event.empty);
		setError(event.error ? event.error.message : "")
	}
	async function onSubmitHandler(e) {
		
		e.preventDefault();
		setProcessing(true);
		console.log("click")
		const payload = await stripe.confirmCardPayment(clientSecret,{
			payment_method: {
				// elements => using useElement Hook
				card: elements.getElement(CardElement)
			}
			// destructuring response came from promise and extract paymentIntent
		}).then(({ paymentIntent }) => {

			
			db.collection("users")
			.doc(user?.uid)
			.collection("orders")
			.doc(paymentIntent.id)
			.set({
				basket: basket,
				amount: paymentIntent.amount,
				created:paymentIntent.created
			})

			setSucceeded(true);
			setProcessing(false);
			setError(null);
			dispatch({
				type: "EMPTY_BASKET",
			})

			// dont use push bcz we dont want our customer to go back to that same cart page 
			history.replace('/orders');
		})
		
	}
	
	return (
		<div className="payment">
			<div className="payment__container">

			<h1>
				Checkout (<Link to="/checkout">{basket?.length} items</Link>)
			</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>503,Grand shere,Exhibition Road</p>
						<p>Patna,Bihar,India</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Items for Delivering</h3>
					</div>
					<div className="payment__items">
						
							{basket.map(product => (
								<div className="payment__product">
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
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* <h3>Stripe</h3> */}
						<form onSubmit={onSubmitHandler}>
							<CardElement onChange={onChangeHandler}/>
							<div className="payment__priceContainer">
								<CurrencyFormat 
								renderText={(total) => (
										
									<h3>
										Order Total: <strong>{total}</strong>
									</h3>
											
									
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"₹"}
								/>
								<button disabled={processing || disable || succeeded } className={`${processing} || ${disable} || ${succeeded}} ? disable ? ""`}>
									<span>{processing ? <p>Processing..</p> : "Buy now!"}</span>
								</button>
								{error && <div>{error}</div>}
							</div>
						</form>
						

							
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment
