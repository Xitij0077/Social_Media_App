import React, { useContext } from "react";
import "./LeftBar.scss";
import Friends from "./../../assets/Images/1.png";
import Groups from "./../../assets/Images/2.png";
import Market from "./../../assets/Images/3.png";
import Watch from "./../../assets/Images/4.png";
import Memories from "./../../assets/Images/5.png";
import Events from "./../../assets/Images/6.png";
import Gaming from "./../../assets/Images/7.png";
import Gallery from "./../../assets/Images/8.png";
import Videos from "./../../assets/Images/9.png";
import Messages from "./../../assets/Images/10.png";
import Fund from "./../../assets/Images/11.png";
import Tutorials from "./../../assets/Images/12.png";
import Courses from "./../../assets/Images/13.png";
import { AuthContext } from "../../Context/AuthContext";

const LeftBar = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="leftBar">
			<div className="container">
				<div className="menu">
					<div className="user">
						<img src={currentUser.profilePic} alt="" />
						<span>{currentUser.name}</span>
					</div>
					<div className="item">
						<img src={Friends} alt="" />
						<span>Friends</span>
					</div>

					<div className="item">
						<img src={Groups} alt="" />
						<span>Groups</span>
					</div>

					<div className="item">
						<img src={Market} alt="" />
						<span>Market</span>
					</div>

					<div className="item">
						<img src={Watch} alt="" />
						<span> Watch</span>
					</div>

					<div className="item">
						<img src={Memories} alt="" />
						<span> Memories</span>
					</div>
				</div>
				<hr />

				<div className="menu">
					<span>Your Shortcuts</span>

					<div className="item">
						<img src={Events} alt="" />
						<span> Events</span>
					</div>

					<div className="item">
						<img src={Gaming} alt="" />
						<span> Gaming</span>
					</div>

					<div className="item">
						<img src={Gallery} alt="" />
						<span> Gallery</span>
					</div>

					<div className="item">
						<img src={Videos} alt="" />
						<span> Videos</span>
					</div>

					<div className="item">
						<img src={Messages} alt="" />
						<span> Messages</span>
					</div>
				</div>

				<hr />

				<div className="menu">
					<span>Others</span>

					<div className="item">
						<img src={Fund} alt="" />
						<span> Fundraisers</span>
					</div>

					<div className="item">
						<img src={Tutorials} alt="" />
						<span> Tutorials</span>
					</div>

					<div className="item">
						<img src={Courses} alt="" />
						<span> Courses</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
