import React,{useState,useEffect} from 'react'
import { db } from '../firebase'
import "../static/css/orders.css"
import { useStateValue } from "../StateContext";
import Order from "./Order";
import { Link } from "react-router-dom";

function Orders() {

	const [orders, setOrders] = useState([])
	const [{basket,user},dispatch] = useStateValue();
	
	useEffect(() => {
		if(user) {
			db.collection('users')
			.doc(user?.uid)
			.collection("orders")
			.orderBy('created','desc')
			.onSnapshot(snapshot => {
				return (
					setOrders(snapshot.docs.map(doc => {
						return {
							id: doc.id,
							data: doc.data(),
						}
					}))
				)
			})
		}
		else {
			setOrders([]);
		}

	},[user])
	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders__order">
				{orders?.map(order => (
					<Order order={order} />
				))}
			</div>
			{!user && 
				
				<div className="orders__link">
					<Link to="/login">Login </Link> 
					to see your orders
					
				</div>
			}
			{
				user && orders.length === 0 && <p>You haven't placed any order yet </p>
			}
		</div>
	)
}

export default Orders
