import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

// REQUEST API
const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const { login } = useContext(AuthContext);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			navigate("/");
		} catch (error) {
			setError(error.response.data);
		}
	};

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
						<input
							type="text"
							placeholder="Username"
							name="username"
							onChange={handleChange}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
						/>
						{error && error}
						<button onClick={handleLogin}>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
