import React from "react";
import { TasksList } from "./pages/TasksList";
import { Routes, Route } from "react-router-dom";

export const Routers: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<TasksList />} />
		</Routes>
	);
};
