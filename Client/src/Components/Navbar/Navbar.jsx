import React, { useContext } from "react";
import "./Navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import sociogramSvg from "./../../../public/sociogram-original.svg";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Navbar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext);

	const svgStyle = {
		width: "115px",
		height: "auto",

		marginTop: "5px", // Add margin
		// padding: "-5px", // Add padding
	};

	const iconColorStyle = {
		color: "rebeccapurple",
	};
	return (
		<div className="navbar">
			<div className="left">
				<Link to="/">
					<span>
						<img src={sociogramSvg} alt="logo" style={svgStyle} />
					</span>
				</Link>
				<HomeIcon />
				{darkMode ? (
					<LightModeIcon onClick={toggle} />
				) : (
					<DarkModeIcon onClick={toggle} />
				)}

				<GridViewRoundedIcon />

				<div className="search">
					<SearchIcon />
					<input type="text" placeholder="Search..." />
				</div>
			</div>
			<div className="right">
				<PersonIcon />
				<EmailIcon />
				<CircleNotificationsIcon />
				<div className="user">
					<img
						src="https://img.freepik.com/free-photo/people-celebrating-new-year-s-eve_23-2151070716.jpg?t=st=1706011558~exp=1706015158~hmac=1114a6033f888cd795d065bf7ca09edf3c0896077a9239a3ca80eca2e61957f5&w=826"
						alt=""
					/>
					<span>xitij.G</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
