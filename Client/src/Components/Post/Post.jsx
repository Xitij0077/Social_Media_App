import React, { useState } from "react";
import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import moment from "moment";
const Post = ({ post }) => {
	const [commentOpen, setCommentOpen] = useState(false);
	// TEMPORARY

	const liked = false;
	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img src={post.profilePic} alt="" />
						<div className="details">
							<Link
								to={`/profile/${post.userId}`}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<span className="name ">{post.name}</span>
							</Link>
							<span className="date">{moment(post.createdAt).fromNow()}</span>
						</div>
					</div>
					<ExpandCircleDownRoundedIcon style={{ color: "cornflowerblue " }} />
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img src={"/upload/" + post.img} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
						12 Likes
					</div>

					<div className="item" onClick={() => setCommentOpen(!commentOpen)}>
						<TextsmsOutlinedIcon />
						12 Comments
					</div>

					<div className="item">
						<ShareRoundedIcon />
						Share
					</div>
				</div>
				{commentOpen && <Comments />}
			</div>
		</div>
	);
};

export default Post;
