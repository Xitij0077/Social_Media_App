import React, { useContext } from "react";
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
import { makeRequest } from "../../Axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
	const userId = parseInt(useLocation().pathname.split("/")[2]);
	// const [openUpdate, setOpenUpdate] = useState(false);

	const { currentUser } = useContext(AuthContext);

	const { isLoading, error, data } = useQuery({
		queryKey: ["user"],
		queryFn: () =>
			makeRequest.get("/users/find/" + userId).then((res) => {
				return res.data;
			}),
	});

	const { isLoading: rIsLoading, data: relationshipData } = useQuery({
		queryKey: ["relationship"],
		queryFn: () =>
			makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
				return res.data;
			}),
	});

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (following) => {
			if (following)
				return makeRequest.delete("/relationships?userId=" + userId);
			return makeRequest.post("/relationships", { userId });
		},

		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries(["relationship"]);
		},
	});
	const handleFollow = () => {
		mutation.mutate(relationshipData.includes(currentUser.id));
	};
	return (
		<div className="profile">
			{isLoading ? (
				"Loading"
			) : (
				<>
					<div className="images">
						<img src={data.coverPic} alt="" className="cover" />
						<img src={data.profilePic} alt="" className="profilePic" />
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
								<span>{data.name}</span>
								<div className="info">
									<div className="item">
										<PlaceIcon style={{ color: "#C70039" }} />
										<span>{data.city}</span>
									</div>
									<div className="item">
										<LanguageIcon style={{ color: "#5271ff" }} />
										<span>{data.website}</span>
									</div>
								</div>
								{rIsLoading ? (
									"Loading"
								) : userId === currentUser.id ? (
									<button>Update</button>
								) : (
									<button onClick={handleFollow}>
										{relationshipData.includes(currentUser.id)
											? "Following"
											: "Follow"}
									</button>
								)}
							</div>
							<div className="right">
								<EmailOutlinedIcon />
								<ExpandCircleDownRoundedIcon
									style={{ color: "cornflowerblue" }}
								/>
							</div>
						</div>
						<Posts userId={userId} />
					</div>
				</>
			)}
		</div>
	);
};

export default Profile;
