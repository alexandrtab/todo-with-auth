import React from "react";
import { useSelector } from "react-redux";
import "../styles/profile-page.scss";
import ToDoList from "../components/ToDoList";

function ProfilePage() {
	const user = useSelector((state) => state.user);
	console.log(user.user.image);
	const imageUrl = user.user.image
		? URL.createObjectURL(user.user.image)
		: null;

	return (
		<div className="profile-page">
			<h2>Profile Page</h2>
			{user ? (
				<>
					<p>
						Hello {user.user.firstName} {user.user.lastName} 👋
					</p>
					{imageUrl && (
						<img
							src={imageUrl}
							alt={`${user.user.firstName}'s profile`}
							className="profile-image"
						/>
					)}
					<div className="user-info">
						<h3>User Information</h3>
						<p>Last name: {user.user.lastName}</p>
						<p>User name: {user.user.username}</p>
					</div>
					<ToDoList />
				</>
			) : (
				<p>Loading user data...</p>
			)}
		</div>
	);
}

export default ProfilePage;
