import React from "react";
import "./Comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Comments = () => {
	const { currentUser } = useContext(AuthContext);
	const comments = [
		{
			id: 1,
			name: "Kshitij Gudekar",
			userId: 1,
			profilePicture:
				"https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793833.jpg?t=st=1706273236~exp=1706276836~hmac=4e10ef55903e8a8a5c61d8ddd7a8614b0c0404bf54957789b35dd4d5b49d2725&w=360",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, unde!",
		},

		{
			id: 2,
			name: "Xitij Gudekar",
			userId: 2,
			profilePicture:
				"https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793833.jpg?t=st=1706273236~exp=1706276836~hmac=4e10ef55903e8a8a5c61d8ddd7a8614b0c0404bf54957789b35dd4d5b49d2725&w=360",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, unde!",
		},
	];
	return (
		<div className="comments">
			<div className="write">
				<img src={currentUser.profilePic} alt="" />
				<input type="text" placeholder="Write a comment" />
				<button>Send</button>
			</div>
			{comments.map((comment) => (
				<div className="comment">
					<img src={comment.profilePicture} alt="" />
					<div className="info">
						<span>{comment.name}</span>
						<p>{comment.desc}</p>
					</div>
					<span className="date">1 hour ago</span>
				</div>
			))}
		</div>
	);
};

export default Comments;
