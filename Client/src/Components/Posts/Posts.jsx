import React from "react";
import "./Posts.scss";
import Post from "../Post/Post";
const Posts = () => {
	// TEMPORARY

	const posts = [
		{
			id: 1,
			name: "Kshitij Gudekar",
			userId: 1,
			profilePic:
				"https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793833.jpg?t=st=1706273236~exp=1706276836~hmac=4e10ef55903e8a8a5c61d8ddd7a8614b0c0404bf54957789b35dd4d5b49d2725&w=360",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, unde!",
			img: "https://img.freepik.com/free-photo/people-celebrating-new-year-s-eve_23-2151070791.jpg?t=st=1706277741~exp=1706281341~hmac=6135ca953409920e73bc91078bab0c724e18de588fa28b489f4f7aaf1afa0e73&w=826",
		},

		{
			id: 2,
			name: "Xitij Gudekar",
			userId: 2,
			profilePic:
				"https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793833.jpg?t=st=1706273236~exp=1706276836~hmac=4e10ef55903e8a8a5c61d8ddd7a8614b0c0404bf54957789b35dd4d5b49d2725&w=360",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, unde!",
			img: "https://img.freepik.com/free-photo/3d-portrait-happy-family_23-2150793825.jpg?t=st=1706277565~exp=1706281165~hmac=450a6beafacbd7a0007a167ce9ec89f462f71b0692bf01bf19007992a23158c1&w=1060",
		},
	];
	return (
		<div className="posts">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	);
};

export default Posts;
