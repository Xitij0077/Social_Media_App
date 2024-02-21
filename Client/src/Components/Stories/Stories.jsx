import React, { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../Context/AuthContext";

const Stories = () => {
	const { currentUser } = useContext(AuthContext);
	// TEMPORARY

	const stories = [
		{
			id: 1,
			name: "xitij.G",
			img: "https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793829.jpg?t=st=1706272959~exp=1706276559~hmac=fda27783c20cf5b16cddee74e5e35a11784a35a0d45fa48a91e538dfed2f7566&w=360",
		},

		{
			id: 2,
			name: "xitij.G",
			img: "https://img.freepik.com/free-photo/3d-portrait-happy-couple_23-2150793837.jpg?t=st=1706273088~exp=1706276688~hmac=dde9f558b352858e81d3aeed7a79954ba233793c4886a8bf36a7b891bd57bf9c&w=360",
		},

		{
			id: 3,
			name: "xitij.G",
			img: "https://img.freepik.com/free-photo/3d-portrait-happy-family_23-2150793893.jpg?t=st=1706273199~exp=1706276799~hmac=d967fc81b8ad3e07ab4ffad5c0375f276583dc7c3b26393227132d26c0498ab7&w=360",
		},

		{
			id: 4,
			name: "xitij.G",
			img: "https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793833.jpg?t=st=1706273236~exp=1706276836~hmac=4e10ef55903e8a8a5c61d8ddd7a8614b0c0404bf54957789b35dd4d5b49d2725&w=360",
		},
	];
	return (
		<div className="stories">
			<div className="story">
				<img src={currentUser.profilePic} alt="" />
				<span>{currentUser.name}</span>
				<button style={{ paddingBottom: "5px" }}>+</button>
			</div>
			{stories.map((story) => (
				<div className="story" key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	);
};

export default Stories;

// import { useContext } from "react";
// import "./stories.scss";
// import { AuthContext } from "../../context/authContext";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";

// const Stories = () => {
// 	const { currentUser } = useContext(AuthContext);

// 	const { isLoading, error, data } = useQuery({
// 		queryKey: ["stories"],
// 		queryFn: makeRequest.get("/stories").then((res) => {
// 			return res.data;
// 		}),
// 	});

// 	//TODO Add story using react-query mutations and use upload function.

// 	return (
// 		<div className="stories">
// 			<div className="story">
// 				<img src={"/upload/" + currentUser.profilePic} alt="" />
// 				<span>{currentUser.name}</span>
// 				<button>+</button>
// 			</div>
// 			{error
// 				? "Something went wrong"
// 				: isLoading
// 				? "loading"
// 				: data.map((story) => (
// 						<div className="story" key={story.id}>
// 							<img src={story.img} alt="" />
// 							<span>{story.name}</span>
// 						</div>
// 				  ))}
// 		</div>
// 	);
// };

// export default Stories;
