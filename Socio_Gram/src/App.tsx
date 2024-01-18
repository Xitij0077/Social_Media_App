import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { Home } from "./_root/pages";
import SignIn from "./_auth/Forms/SignIn";
import SignUp from "./_auth/Forms/SignUp";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
const App = () => {
	return (
		<main className="flex h-screen">
			<Routes>
				{/* Public Routes */}
				<Route element={<AuthLayout />}>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Route>

				{/* Private Routes */}
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</main>
	);
};

export default App;
