import React from 'react';
import "../static/css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom";
import { useStateValue } from "../StateContext";
import { auth } from '../firebase';

function Header() {

	
	const [ state, ] = useStateValue();
	function authHandle() {

		if(state.user) {
			auth.signOut();
		}
	}
	return (
		<div className="header">
			<Link to="/">
				<img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text"/>
				<SearchIcon className="header__searchIcon"/>
				{/* logo */}
			</div>
			<div className="header__nav">
				<Link to={!state.user && "/login"}>
					<div onClick={authHandle} className="header__option">
						<span className="header__optionLineOne">Hello, {state.user ? state.user.email : "Guest"}</span>
						<span className="header__optionLineTwo">{ !state.user ? "SignIn" : "SignOut"}</span>			
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				
					<Link to="/checkout">
						<div className="header__optionBasket">
							<ShoppingBasketIcon />
							<span className="header__optionLineTwo header__basketCount">{state.basket?.length}</span>
						</div>
					</Link>
					
				
				
			</div>
		</div>
	)
}

export default Header
