import React from "react";
import "./Register.scss";
import sociogram from "./../../../public/sociogram.svg";
import { Link } from "react-router-dom";

const svgStyle = {
	width: "100%",
	height: "auto",
	marginTop: "15px", // Add margin
	filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.2))",
	// padding: "-5px", // Add padding
};
const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="left">
					<h1>Welcome To!</h1>
					<img src={sociogram} alt="logo" style={svgStyle} />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa
						sed eos corrupti accusamus labore nihil re pellat laborum! Dolore,
						dolorem.
					</p>
					<span>Do you have an account</span>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
				<div className="right">
					<h1>Register</h1>
					<form>
						<input type="text" placeholder="Username" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<input type="text" placeholder="Name" />
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
