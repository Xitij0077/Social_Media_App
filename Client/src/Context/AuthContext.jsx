// import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = () => {
		setCurrentUser({
			id: 1,
			name: "Kshitij Gudekar",
			profilePic:
				"https://img.freepik.com/free-photo/people-celebrating-new-year-s-eve_23-2151070716.jpg?t=st=1706011558~exp=1706015158~hmac=1114a6033f888cd795d065bf7ca09edf3c0896077a9239a3ca80eca2e61957f5&w=826",
		});
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};
