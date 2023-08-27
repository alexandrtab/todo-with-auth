import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="container">
				<Routes>
					<Route path="/" element={<RegistrationPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/todo" element={<ToDoList />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
