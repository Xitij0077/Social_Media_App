import React from "react";
import "./Profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import Posts from "../../Components/Posts/Posts";

const Profile = () => {
	return (
		<div className="profile">
			<div className="images">
				<img
					src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1706336230~exp=1706336830~hmac=d3b0460e1f10aa348bacae7290b1c5924e68ea0777aac36e9f539cac06f33cad"
					alt=""
					className="cover"
				/>
				<img
					src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1706313760~exp=1706317360~hmac=d8dacd51e341043bbd03480bd535e729a914d1fe67441dfb43f42f20288dc96d&w=900"
					alt=""
					className="profilePic"
				/>
			</div>
			<div className="profileContainer">
				<div className="uInfo">
					<div className="left">
						<a href="http://facebook.com">
							<FacebookIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<InstagramIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<XIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<LinkedInIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<PinterestIcon fontSize="large" />
						</a>
					</div>
					<div className="center">
						<span>Kshitij Gudekar</span>
						<div className="info">
							<div className="item">
								<PlaceIcon style={{ color: "#C70039" }} />
								<span>India</span>
							</div>
							<div className="item">
								<LanguageIcon style={{ color: "#5271ff" }} />
								<span>xitij.io</span>
							</div>
						</div>
						<button>Follow</button>
					</div>
					<div className="right">
						<EmailOutlinedIcon />
						<ExpandCircleDownRoundedIcon style={{ color: "cornflowerblue" }} />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
};

export default Profile;
