import React, { useContext, useState } from "react";
import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import moment from "moment";
import { makeRequest } from "../../Axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "./../../Context/AuthContext";
const Post = ({ post }) => {
	const [commentOpen, setCommentOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	// TEMPORARY

	const { currentUser } = useContext(AuthContext);
	const { isLoading, error, data } = useQuery({
		queryKey: ["likes", post.id],
		queryFn: () =>
			makeRequest.get("/likes?postId=" + post.id).then((res) => {
				return res.data;
			}),
	});

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (liked) => {
			if (liked)
				return makeRequest.delete("/likes", { data: { postId: post.id } });
			return makeRequest.post("/likes", { postId: post.id });
		},
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries(["likes"]);
		},
	});

	const deleteMutation = useMutation({
		mutationFn: (postId) => {
			return makeRequest.delete("/posts/" + postId);
		},
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries(["posts"]);
		},
	});

	const handleLike = () => {
		mutation.mutate(data.includes(currentUser.id));
	};

	const handleDelete = () => {
		deleteMutation.mutate(post.id);
	};
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
					<ExpandCircleDownRoundedIcon
						style={{ color: "cornflowerblue " }}
						onClick={() => setMenuOpen(!menuOpen)}
					/>
					{menuOpen && post.userId === currentUser.id && (
						<button onClick={handleDelete}>delete</button>
					)}
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img src={"/upload/" + post.img} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{isLoading ? (
							"Loading"
						) : data?.includes(currentUser.id) ? (
							<FavoriteOutlinedIcon
								style={{ color: "red" }}
								onClick={handleLike}
							/>
						) : (
							<FavoriteBorderOutlinedIcon onClick={handleLike} />
						)}
						{data?.length} Likes
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
				{commentOpen && <Comments postId={post.id} />}
			</div>
		</div>
	);
};

export default Post;
