import React from "react";
import { Container } from "@mui/material";
import { TasksList } from "./views/TasksList";

export const App: React.FC = () => {
	return (
		<Container>
			<TasksList />
		</Container>
	);
};
