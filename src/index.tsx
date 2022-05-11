import React from "react";
import ReactDOM from "react-dom";
import { Routers } from "./Routers";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<ToastContainer />
		<BrowserRouter>
			<Routers />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
