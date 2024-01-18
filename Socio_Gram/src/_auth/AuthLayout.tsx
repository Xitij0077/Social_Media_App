import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
	const isAuthenticated = false;
	return (
		<>
			{isAuthenticated ? (
				<Navigate to="/" />
			) : (
				<>
					<section className="flex flex-1 justify-center flex-col py-10 items-center">
						<Outlet />
					</section>
					<img
						src="/public/assets/images/people.jpg"
						alt="logo"
						className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
					/>
				</>
			)}
		</>
	);
};

export default AuthLayout;
