import React, { useContext } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LeftBar from "./Components/LeftBar/LeftBar";
import RightBar from "./Components/RightBar/RightBar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import "./style.scss";
import { DarkModeContext } from "./Context/DarkModeContext.jsx";

const App = () => {
	const currentUser = true;

	const { darkMode } = useContext(DarkModeContext);

	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<div style={{ display: "flex" }}>
					<LeftBar />
					<div style={{ flex: 6 }}>
						<Outlet />
					</div>
					<RightBar />
				</div>
			</div>
		);
	};

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}

		return children;
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: "/",
					element: <Home />,
				},

				{
					path: "/profile/:id",
					element: <Profile />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},

		{
			path: "/register",
			element: <Register />,
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
