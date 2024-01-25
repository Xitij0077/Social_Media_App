import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Nice to see you again!</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa
						sed eos corrupti accusamus labore nihil re pellat laborum! Dolore,
						dolorem.
					</p>
					<span>Don't you have an account</span>
					<Link to="/register">
						<button>Register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form>
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
