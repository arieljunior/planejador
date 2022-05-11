import React from "react";
import { Container } from "@mui/material";
import { TasksList } from "./views/TasksList";
import { Routes, Route } from "react-router-dom";

export const Routers: React.FC = () => {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<TasksList />} />
			</Routes>
		</Container>
	);
};
