// src/components/RegistrationForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../reducers/userSlice";
import { useNavigate } from "react-router-dom";
import "../styles/registration-page.scss";

function RegistrationForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		image: null,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevData) => ({ ...prevData, [name]: value }));
	};

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setUserData((prevData) => ({ ...prevData, image: imageFile }));
  };
	const handleRegistration = () => {
		dispatch(registerUser(userData));
		navigate("/profile");
	};

	return (
		<div className="registration-page">
			<h2>Registration</h2>
			<form onSubmit={handleRegistration}>
				<input
					type="text"
					name="firstName"
					value={userData.firstName}
					onChange={handleInputChange}
					placeholder="First Name"
				/>
				<input
					type="text"
					name="lastName"
					value={userData.lastName}
					onChange={handleInputChange}
					placeholder="Last Name"
				/>
				<input
					type="text"
					name="username"
					value={userData.username}
					onChange={handleInputChange}
					placeholder="User Name"
				/>
				<input
					type="password"
					name="password"
					value={userData.password}
					onChange={handleInputChange}
					placeholder="Password"
				/>
				<input type="file" accept="image/*" onChange={handleImageUpload} />
				<button className="registration-button" onClick={handleRegistration}>
					Register
				</button>
			</form>
		</div>
	);
}

export default RegistrationForm;
