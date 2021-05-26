import React,{ useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "../static/css/login.css";
import { auth, db } from "../firebase";

function Login() {

	const history = useHistory();
	const [email,setEmail] = useState('');
	const [error,setError] = useState('');
	const [password,setPassword] = useState('');

	function signIn(e) {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email,password)
		.then((res) => {
			
			if(auth) {
				history.push("/");
			}
			// <Link to="/">

			// </Link>
		})
		.catch((err) => setError(err.message));

		// console.log(error.message)
	}
	function register(e) {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(email,password)
			.then((res) => console.log(res))
			.catch(err => alert(err));
	}
	return (
		<div className="login">
			<Link to="/">
				<img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				{
					error ? 
					<span className="error__message">
						<small>*</small>{error}
					</span>
					:
					null
				}
				<form action="">
					<h5>Email</h5>
					<input className={`${!error ? "" : "login__error"}`} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
					<h5>Password</h5>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
					<button type="submit" onClick={signIn} className="login__signInBtn">SignIn</button>
				</form>
				<p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>
				<button onClick={register} className="login__registerBtn">Create an Amazon account</button>
			</div>
			
		</div>
	)
}
 
export default Login
